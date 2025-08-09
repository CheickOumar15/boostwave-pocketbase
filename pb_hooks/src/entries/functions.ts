import {
  APP_CATEGORIES_PLATFORMS,
  APP_COLLECTIONS,
  BANNED_CATEGORIES,
} from "./constants";
import { AppCategory, AppService, N1PanelService } from "./types";

type EnvVariables = Record<string, string>;

const loadEnvFile = (): EnvVariables => {
  const file = $filesystem.fileFromPath(`${__hooks}/.env`);
  const reader = file.reader.open();
  const content = toString(reader);

  const env: EnvVariables = {};
  const lines = content.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]?.trim();
    if (!line || line.indexOf("#") === 0) continue; // au lieu de .startsWith()

    const eqIndex = line.indexOf("=");
    if (eqIndex === -1) continue;

    const key = line.substring(0, eqIndex).trim();
    const value = line
      .substring(eqIndex + 1)
      .trim()
      .replace(/^["']|["']$/g, "");

    if (key) {
      env[key] = value;
    }
  }

  return env;
};

const convertN1PanelServiceToAppService = (
  service: N1PanelService
): AppService => {
  return {
    id: service.service,
    n1_id: service.service,
    category: service.category,
    rate: service.rate,
    refill: service.refill,
    service: service.service,
    type: service.type,
    cancel: service.cancel,
    dripfeed: service.dripfeed,
    max: service.max,
    min: service.min,
    name: service.name,
  };
};

const AppServiceFromRecord = (record: core.Record): AppService => {
  return {
    id: record.id,
    n1_id: record.getString("n1_id"),
    category: record.getString("category"),
    rate: record.getFloat("rate"),
    refill: record.getBool("refill"),
    service: record.getString("service"),
    type: record.getString("type"),
    cancel: record.getBool("cancel"),
    dripfeed: record.getBool("dripfeed"),
    max: record.getInt("max"),
    min: record.getInt("min"),
    name: record.getString("name"),
  };
};

const AppCategoryFromRecord = (record: core.Record): AppCategory => {
  return {
    id: record.id,
    name: record.getString("name"),
    platform: record.getString("platform"),
  };
};

const createAppCategoriesUnique = (categories: string[]) => {
  const categoriesCreated: { id: string; name: string }[] = [];
  for (const category of categories) {
    if (BANNED_CATEGORIES.includes(category)) {
      continue;
    }
    try {
      const categoryRecord = $app.findFirstRecordByData(
        APP_COLLECTIONS.CATEGORIES.collection(),
        "name",
        category.split("/")[0]
      );
      categoryRecord.set(
        "platform",
        APP_CATEGORIES_PLATFORMS.find((platform) =>
          category.toLocaleLowerCase().includes(platform.toLocaleLowerCase())
        )
      );
      $app.save(categoryRecord);
      categoriesCreated.push({
        id: categoryRecord.id,
        name: categoryRecord.getString("name"),
      });
    } catch (error) {
      const categoryRecord = new Record(
        APP_COLLECTIONS.CATEGORIES.collection()
      );
      categoryRecord.set("name", category.split("/")[0]);
      categoryRecord.set(
        "platform",
        APP_CATEGORIES_PLATFORMS.find((platform) =>
          category.toLocaleLowerCase().includes(platform.toLocaleLowerCase())
        )
      );
      $app.save(categoryRecord);
      categoriesCreated.push({
        id: categoryRecord.id,
        name: categoryRecord.getString("name"),
      });
    }
  }
  return categoriesCreated;
};

const createServices = (
  services: N1PanelService[],
  createdCategories: { id: string; name: string }[]
) => {
  for (const service of services) {
    try {
      try {
        const serviceRecord = $app.findFirstRecordByData(
          APP_COLLECTIONS.SERVICES.collection(),
          "n1_id",
          service.service
        );
        if (serviceRecord) {
          const category = createdCategories.find(
            (category) =>
              category.name.toLocaleLowerCase().split("/")[0] ===
              service.category.toLocaleLowerCase().split("/")[0]
          );
          if (!category) {
            continue;
          }
          if (category) {
            serviceRecord.set("category", category.id);
          }
          serviceRecord.set("name", service.name.split("-")[0]);
          serviceRecord.set("n1_id", service.service);
          serviceRecord.set("rate", service.rate < 1 ? 1 : service.rate);
          serviceRecord.set("refill", service.refill);
          serviceRecord.set("service", service.service);
          serviceRecord.set("type", service.type);
          serviceRecord.set("cancel", service.cancel);
          serviceRecord.set("dripfeed", service.dripfeed);
          serviceRecord.set("max", service.max);
          serviceRecord.set("min", service.min);
          $app.save(serviceRecord);
        }
      } catch (error) {
        const serviceRecord = new Record(APP_COLLECTIONS.SERVICES.collection());
        const category = createdCategories.find(
          (category) =>
            category.name.toLocaleLowerCase().split("/")[0] ===
            service.category.toLocaleLowerCase().split("/")[0]
        );
        if (!category) {
          continue;
        }
        if (category) {
          serviceRecord.set("category", category.id);
        }
        serviceRecord.set("name", service.name.split("-")[0]);
        serviceRecord.set("n1_id", service.service);
        serviceRecord.set("rate", service.rate < 1 ? 1 : service.rate);
        serviceRecord.set("refill", service.refill);
        serviceRecord.set("service", service.service);
        serviceRecord.set("type", service.type);
        serviceRecord.set("cancel", service.cancel);
        serviceRecord.set("dripfeed", service.dripfeed);
        serviceRecord.set("max", service.max);
        serviceRecord.set("min", service.min);
        $app.save(serviceRecord);
      }
    } catch (error) {
      console.error("Error creating service", service.service, service.name);
      console.error(error);
    }
  }
};

export {
  loadEnvFile,
  convertN1PanelServiceToAppService,
  AppServiceFromRecord,
  AppCategoryFromRecord,
  createAppCategoriesUnique,
  createServices,
};
