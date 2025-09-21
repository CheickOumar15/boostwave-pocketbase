/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4195186709")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": true,
    "id": "bool3878310292",
    "name": "transaction_orange_payed_validate",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4195186709")

  // remove field
  collection.fields.removeById("bool3878310292")

  return app.save(collection)
})
