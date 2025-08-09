/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1652061787")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select2363381545",
    "maxSelect": 1,
    "name": "type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "package",
      "mentions",
      "poll",
      "subscriptions",
      "comments",
      "hashtag",
      "user_hashtag",
      "default"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1652061787")

  // remove field
  collection.fields.removeById("select2363381545")

  return app.save(collection)
})
