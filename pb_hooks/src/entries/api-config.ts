import { APP_COLLECTIONS } from "./constants";
import {
  createAppCategoriesUnique,
  createServices,
  loadEnvFile,
} from "./functions";
import { N1PanelService } from "./types";

const syncN1PanelServices = () => {
  const env = loadEnvFile();
  const n1panelApiKey = env["N1PANEL_API_KEY"];
  const n1panelApiUrl = env["N1PANEL_API_URL"];
  try {
    const response = $http.send({
      method: "GET",
      url: `${n1panelApiUrl}?key=${n1panelApiKey}&action=services`,
    });

    const services = response.json as N1PanelService[];
    const differentCategories: string[] = [];

    for (const service of services) {
      if (!differentCategories.includes(service.category)) {
        differentCategories.push(service.category);
      }
    }
    const categoriesCreated = createAppCategoriesUnique(differentCategories);
    createServices(services, categoriesCreated);
  } catch (error) {
    console.log(error);
  }
};

const dryBenetpayedAccessToken = () => {
  const env = loadEnvFile();
  const BENETPAYED_API_KEY = env["BENETPAYED_API_KEY"];
  const BENETPAYED_API_SECRET = env["BENETPAYED_API_SECRET"];
  const BENETPAYED_BEARER_CONSTANT = env["BENETPAYED_BEARER_CONSTANT"];

  const result = $http.send({
    url: `https://backend-benetpayed.freeicezapiro.pro/api/v1/auth/token`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: { api_key: BENETPAYED_API_KEY, api_secret: BENETPAYED_API_SECRET },
    timeout: 30,
  });

  if (result.statusCode != 200) {
    return new BadRequestError();
  }
  const access_token = result.json["access_token"];
  try {
    const aceess_record = $app.findRecordById(
      APP_COLLECTIONS.CONSTANTS.name,
      BENETPAYED_BEARER_CONSTANT!
    );
    aceess_record!.set("value_string", access_token);
    $app.save(aceess_record);
  } catch (error) {
    const access_record = new Record(APP_COLLECTIONS.CONSTANTS.collection(), {
      value_string: access_token,
      id: BENETPAYED_BEARER_CONSTANT,
    });
    $app.save(access_record);
  }
};

export { syncN1PanelServices, dryBenetpayedAccessToken };

const run = () => {
  cronAdd("syncN1PanelServices", "@weekly", () => {
    require(`${__hooks}/api-config.js`).syncN1PanelServices();
  });
  cronAdd("drybenetpayed", "*/55 * * * *", () => {
    require(`${__hooks}/api-config.js`).dryBenetpayedAccessToken();
  });

  onBootstrap((e) => {
    e.next();

    require(`${__hooks}/api-config.js`).syncN1PanelServices();
  });
};

export { run };
