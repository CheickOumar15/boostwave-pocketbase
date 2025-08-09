/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_DlCP",
        "max": 0,
        "min": 0,
        "name": "n1_id",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_K32w",
        "max": 0,
        "min": 0,
        "name": "name",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "json3402113753",
        "maxSize": 1,
        "name": "price",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      }
    ],
    "id": "pbc_2587040969",
    "indexes": [],
    "listRule": null,
    "name": "boostwave_service_category",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT \n  service.id, service.n1_id, service.name,\n  (service.rate * dollarValue.value_number) as price\n FROM boostwave_service as service\n  LEFT JOIN boostwave_constants as dollarValue \n  WHERE dollarValue.id = 'boostwave_service_category';",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2587040969");

  return app.delete(collection);
})
