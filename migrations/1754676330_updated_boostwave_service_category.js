/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2587040969")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n  service.id, service.n1_id, service.name,\n  (service.rate * dollarValue.value_number) as price\n FROM boostwave_service as service\n  LEFT JOIN boostwave_constants as dollarValue \n  WHERE dollarValue.id = 'dollarsvaluecfa';"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_DlCP")

  // remove field
  collection.fields.removeById("_clone_K32w")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_8rTo",
    "max": 0,
    "min": 0,
    "name": "n1_id",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_KJfT",
    "max": 0,
    "min": 0,
    "name": "name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2587040969")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n  service.id, service.n1_id, service.name,\n  (service.rate * dollarValue.value_number) as price\n FROM boostwave_service as service\n  LEFT JOIN boostwave_constants as dollarValue \n  WHERE dollarValue.id = 'boostwave_service_category';"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
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
  }))

  // add field
  collection.fields.addAt(2, new Field({
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
  }))

  // remove field
  collection.fields.removeById("_clone_8rTo")

  // remove field
  collection.fields.removeById("_clone_KJfT")

  return app.save(collection)
})
