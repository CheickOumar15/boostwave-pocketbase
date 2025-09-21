import { APP_COLLECTIONS } from "./constants";
import { AppCommandeStatus } from "./types";

const getPlatformTypes = (c: core.RequestEvent) => {
  try {
    const platform = c.request?.pathValue("platform");
    const platformCategories = $app.findAllRecords(
      APP_COLLECTIONS.CATEGORIES.collection(),
      $dbx.exp("LOWER(platform) = {:platform}", {
        platform: platform === "others" ? "" : platform?.toLowerCase(),
      })
    ) as core.Record[];
    const platformTypes = platformCategories.map((category) => ({
      id: category.id,
      name: category.getString("name"),
      platform: category.getString("platform"),
    }));
    return c.json(200, {
      success: true,
      platformTypes,
    });
  } catch (error) {
    console.error(error);
    return c.json(404, {
      success: false,
      message: "Platform non trouvé",
    });
  }
};

const getCategoryServices = (c: core.RequestEvent) => {
  const category = c.request?.pathValue("category");
  const page = c.request?.url?.query().get("page");
  const perPage = c.request?.url?.query().get("perPage");
  const services = $app.findAllRecords(
    APP_COLLECTIONS.SERVICE_CATEGORIES.collection(),
    $dbx.exp("LOWER(category) = {:category}", {
      category: category?.toLowerCase(),
    })
  ) as core.Record[];
  const returnServices = services.map((service) => ({
    cancel: service.getBool("cancel"),
    category: service.getString("category"),
    category_name: service.getString("category_name"),
    dripfeed: service.getBool("dripfeed"),
    id: service.id,
    max: service.getInt("max"),
    min: service.getInt("min"),
    name: service.getString("name"),
    platform: service.getString("platform"),
    price: service.getInt("price"),
    refill: service.getBool("refill"),
    type: service.getString("type"),
  }));
  const pageNumber = page ? parseInt(page) : 1;
  const perPageNumber = perPage ? parseInt(perPage) : 12;
  const paginatedServices = returnServices.slice(
    (pageNumber - 1) * perPageNumber,
    pageNumber * perPageNumber
  );

  return c.json(200, {
    success: true,
    services: paginatedServices,
    page: pageNumber,
    perPage: perPageNumber,
    total: returnServices.length,
  });
};

const trackTicket = (c: core.RequestEvent) => {
  const ticket = c.request?.url?.query().get("ticket");
  if (!ticket)
    return c.json(400, {
      error: true,
      message: "Ticket introuvable",
    });
  try {
    const ticketRecord = $app.findFirstRecordByData(
      APP_COLLECTIONS.COMMANDES.collection(),
      "cmd_id",
      ticket
    );
    if (!ticketRecord)
      return c.json(404, {
        error: true,
        message: "Ticket non trouvé",
      });
    const commandeLogs = $app.findAllRecords(
      APP_COLLECTIONS.COMMANDES_LOGS.collection(),
      $dbx.exp("commande = {:commande}", {
        commande: ticketRecord.id,
      })
    ) as core.Record[];
    const service = $app.findFirstRecordByData(
      APP_COLLECTIONS.SERVICE_CATEGORIES.collection(),
      "id",
      ticketRecord.getString("service")
    );
    if (!service)
      return c.json(404, {
        error: true,
        message: "Service non trouvé",
      });
    return c.json(200, {
      ticketNumber: ticketRecord.getString("cmd_id"),
      status: ticketRecord.getString("status"),
      createdAt: ticketRecord.getDateTime("created")?.toString(),
      updatedAt: ticketRecord.getDateTime("updated")?.toString(),
      service: {
        id: service.getString("id"),
        name: service.getString("name"),
        platform: service.getString("platform"),
        type: service.getString("type"),
        category: service.getString("category_name"),
        price_per_1k: service.getInt("price"),
      },
      quantity: ticketRecord.getInt("quantity"),
      url: ticketRecord.getString("target_link"),
      total: service.getInt("price") * (ticketRecord.getInt("quantity") / 1000),
      history: commandeLogs.map((log) => ({
        status: log.getString("status"),
        note: log.getString("note"),
        at: log.getDateTime("created")?.toString(),
      })),
    });
  } catch (error) {
    return c.json(400, {
      error: true,
      message: "Ticket Invalide",
    });
  }
};
export { getPlatformTypes, getCategoryServices, trackTicket };

const run = () => {
  routerAdd(`GET`, `/api/data/categories/{platform}`, (c: core.RequestEvent) =>
    require(`${__hooks}/api-data.js`).getPlatformTypes(c)
  );
  routerAdd(
    "GET",
    "/api/data/categories/{category}/services",
    (c: core.RequestEvent) =>
      require(`${__hooks}/api-data.js`).getCategoryServices(c)
  );
  routerAdd("GET", "/api/data/track-ticket", (c: core.RequestEvent) =>
    require(`${__hooks}/api-data.js`).trackTicket(c)
  );
  onRecordAfterUpdateSuccess((e: core.RecordEvent) => {
    e.next();
    const record = e.record;
    if (!record) return;
    const recordLog = new Record(
      $app.findCollectionByNameOrId("boostwave_commande_logs")
    );
    const cmd_id = record.getString("cmd_id");
    recordLog.set("commande", record.id);
    recordLog.set("status", record.getString("status"));
    switch (record.getString("status") as AppCommandeStatus) {
      case AppCommandeStatus.INITIAL:
        recordLog.set(
          "note",
          `La commande ${cmd_id} a ete initiee avec succes`
        );
        break;
      case AppCommandeStatus.PAID:
        recordLog.set("note", `La commande ${cmd_id} a ete payee avec succes`);
        break;
      case AppCommandeStatus.PENDING:
        recordLog.set(
          "note",
          `La commande ${cmd_id} est en attente de  traitement`
        );
        break;
      case AppCommandeStatus.PROCESSING:
        recordLog.set(
          "note",
          `La commande ${cmd_id} est en cours de traitement`
        );
        break;
      case AppCommandeStatus.COMPLETED:
        recordLog.set(
          "note",
          `La commande ${cmd_id} a ete traitee avec succes`
        );
        break;
      case AppCommandeStatus.CANCELLED:
        recordLog.set("note", `La commande ${cmd_id} a ete annuler`);
        break;
    }
    $app.save(recordLog);
  }, "boostwave_commande");
  onRecordAfterCreateSuccess((e: core.RecordEvent) => {
    e.next();
    const record = e.record;
    if (!record) return;
    record.set(
      "cmd_id",
      `BW-${new Date()
        .toISOString()
        .split("T")[0]
        ?.replaceAll("-", "")}-${$security.randomString(6).toUpperCase()}`
    );
    record.set("status", AppCommandeStatus.INITIAL);
    $app.save(record);
  }, "boostwave_commande");
};

export { run };
