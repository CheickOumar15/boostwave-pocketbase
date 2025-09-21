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

export { syncN1PanelServices };

const run = () => {
  cronAdd("syncN1PanelServices", "@weekly", () => {
    require(`${__hooks}/api-config.js`).syncN1PanelServices();
  });

  onBootstrap((e) => {
    e.next();

    require(`${__hooks}/api-config.js`).syncN1PanelServices();
  });
};

export { run };
