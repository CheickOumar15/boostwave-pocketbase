/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4195186709")

  // update field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "CMD-{date:YYYYMMDD}-{rand:6}",
    "hidden": false,
    "id": "text1933841373",
    "max": 0,
    "min": 0,
    "name": "cmd_id",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4195186709")

  // update field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1933841373",
    "max": 0,
    "min": 0,
    "name": "cmd_id",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
