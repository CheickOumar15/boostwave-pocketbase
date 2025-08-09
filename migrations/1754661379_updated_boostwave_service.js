/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1652061787")

  // update field
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
      "Default",
      "Subscriptions",
      "Custom Comments",
      "Mentions User Followers",
      "Package",
      "Custom Comments Package",
      "Poll",
      "Mentions",
      "Mentions Hashtag"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1652061787")

  // update field
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
})
