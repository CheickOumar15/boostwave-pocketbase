import { APP_COLLECTIONS } from "./constants";

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
export { getPlatformTypes, getCategoryServices };

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
};

export { run };
