/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4195186709")

  // remove field
  collection.fields.removeById("bool3038768840")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4195186709")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "bool3038768840",
    "name": "payed",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
