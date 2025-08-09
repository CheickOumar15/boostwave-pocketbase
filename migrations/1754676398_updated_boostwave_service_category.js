/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2587040969")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n  service.id, service.n1_id, service.name,\n  CAST((service.rate * dollarValue.value_number) AS INTEGER) as price\n FROM boostwave_service as service\n  LEFT JOIN boostwave_constants as dollarValue \n  WHERE dollarValue.id = 'dollarsvaluecfa';"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_8rTo")

  // remove field
  collection.fields.removeById("_clone_KJfT")

  // remove field
  collection.fields.removeById("json3402113753")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_4xaH",
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
    "id": "_clone_tCgO",
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

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number3402113753",
    "max": null,
    "min": null,
    "name": "price",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2587040969")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n  service.id, service.n1_id, service.name,\n  (service.rate * dollarValue.value_number) as price\n FROM boostwave_service as service\n  LEFT JOIN boostwave_constants as dollarValue \n  WHERE dollarValue.id = 'dollarsvaluecfa';"
  }, collection)

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

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "json3402113753",
    "maxSize": 1,
    "name": "price",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // remove field
  collection.fields.removeById("_clone_4xaH")

  // remove field
  collection.fields.removeById("_clone_tCgO")

  // remove field
  collection.fields.removeById("number3402113753")

  return app.save(collection)
})
