import { APP_COLLECTIONS } from "./constants";
import { getBenetPayedToken, loadEnvFile } from "./functions";

const receptNotif = (e: core.RequestEvent) => {
  const body = e.request?.body;
  const data = new DynamicModel({
    token: "",
    transaction_id: "",
    status: "",
  }) as {
    token: string;
    transaction_id: string;
    status: string;
  };
  e.bindBody(data);
  console.log(JSON.stringify(data));

  const record = $app.findFirstRecordByData(
    APP_COLLECTIONS.PAYMENTS.collection(),
    "token",
    data.token
  );
  record.set("status", data.status);
  $app.save(record);
  const commandeId = record.getString("commande");
  const commandeRecord = $app.findRecordById(
    APP_COLLECTIONS.COMMANDES.collection(),
    commandeId
  );
  if (data.status == "SUCCESS") {
    commandeRecord.set("status", "paid");
    $app.save(commandeRecord);
  }
  if (data.status == "FAILED" || data.status == "EXPIRED") {
    commandeRecord.set("status", "canceled");
    $app.save(commandeRecord);
  }
};

const createPaymentLink = (
  amount: number,
  cmdId: string
): string | InternalServerError => {
  const pathTo = `https://backend-benetpayed.freeicezapiro.pro/api/v1/unilinks/dev/create`;
  const env = loadEnvFile();
  const FRONTEND_URL = env["FRONTEND_URL"];
  const BACKEND_URL = env["BACKEND_URL"];
  const returnUrl = `${FRONTEND_URL}?ticket=${cmdId}`;
  const notifyUrl = `${BACKEND_URL}/payments/benetpayed/notif`;
  const tokenBearer = getBenetPayedToken();
  console.log(tokenBearer);
  if (tokenBearer == null) {
    return new InternalServerError(
      "Une erreur inattendue c'est produite lors de l'initialisation du paiement"
    );
  }
  const resultat = $http.send({
    url: pathTo,
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokenBearer}`,
      "Content-Type": "application/json",
    },
    data: {
      amount: amount,
      return_url: returnUrl,
      cancel_url: returnUrl,
      notify_url: notifyUrl,
    },
    timeout: 10,
  });

  console.log(JSON.stringify(resultat.json));
  if (resultat.statusCode != 200 || resultat.json["success"] != true) {
    return new InternalServerError(
      "Une erreur inattendue c'est produite lors de l'initialisation du paiement"
    );
  }
  const paymentData = {
    token: resultat.json["token"],
    transaction_id: resultat.json["transaction_id"],
    payment_url: resultat.json["payment_url"],
  };
  const commande = $app.findFirstRecordByData(
    APP_COLLECTIONS.COMMANDES.collection(),
    "cmd_id",
    cmdId
  );

  const record = new Record(APP_COLLECTIONS.PAYMENTS.collection(), {
    status: "INITIATED",
    token: paymentData.token,
    transaction_id: paymentData.transaction_id,
    payment_url: paymentData.payment_url,
    commande: commande.id,
  });
  $app.save(record);

  return paymentData.payment_url;
};

const createCommandePayment = (e: core.RequestEvent) => {
  const data = new DynamicModel({
    cmdId: "",
  }) as { cmdId: string };
  e.bindBody(data);
  if (!data.cmdId) {
    return new BadRequestError("cmdId requit");
  }
  const commande = $app.findFirstRecordByData(
    APP_COLLECTIONS.COMMANDES.collection(),
    "cmd_id",
    data.cmdId
  );

  const service = $app.findRecordById(
    APP_COLLECTIONS.SERVICE_CATEGORIES.name,
    commande.getString("service")
  );

  const amount = service.getInt("price");
  const quantity = commande.getInt("quantity");
  const cmdId = commande.getString("cmd_id");
  const totalPrice = parseInt(((amount / 1000) * quantity).toString());
  const response = createPaymentLink(totalPrice, cmdId);
  if (typeof response != "string") {
    return response;
  }
  return e.json(200, { payment_url: response });
};

export { receptNotif, createPaymentLink, createCommandePayment };

const run = () => {
  routerAdd("POST", "/payments/benetpayed/notif", (e) =>
    require(`${__hooks}/benetpayed.api.js`).receptNotif(e)
  );
  routerAdd("POST", "/payments/create", (e) =>
    require(`${__hooks}/benetpayed.api.js`).createCommandePayment(e)
  );
};

export { run };
