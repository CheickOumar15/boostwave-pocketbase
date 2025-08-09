/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2587040969")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n  service.id, service.name,\n  CAST((service.rate * dollarValue.value_number) AS INTEGER) as price,\n  service.cancel, service.dripfeed, service.max,\n  service.min, service.refill, service.type, category.name as category_name,\n  category.platform\n FROM boostwave_service as service\n  LEFT JOIN boostwave_category as category ON category.id = service.category\n  LEFT JOIN boostwave_constants as dollarValue \n  WHERE dollarValue.id = 'dollarsvaluecfa';"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_QgZT")

  // remove field
  collection.fields.removeById("_clone_G6T1")

  // remove field
  collection.fields.removeById("_clone_GtPb")

  // remove field
  collection.fields.removeById("_clone_SqtC")

  // remove field
  collection.fields.removeById("_clone_iXUk")

  // remove field
  collection.fields.removeById("_clone_sdlt")

  // remove field
  collection.fields.removeById("_clone_ih1Z")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_q7jU",
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
    "id": "_clone_imlk",
    "name": "cancel",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_IdBq",
    "name": "dripfeed",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_6YrP",
    "max": null,
    "min": null,
    "name": "max",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_JE5u",
    "max": null,
    "min": null,
    "name": "min",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "_clone_wStU",
    "name": "refill",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "_clone_WAaU",
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

  // add field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_vayq",
    "max": 0,
    "min": 0,
    "name": "category_name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "_clone_slIH",
    "maxSelect": 1,
    "name": "platform",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "TikTok",
      "Instagram",
      "Telegram",
      "YouTube",
      "Twitter",
      "Premium",
      "IGTV",
      "Threads",
      "Facebook",
      "VK",
      "Twitch",
      "LinkedIn",
      "Spotify",
      "WhatsApp"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2587040969")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n  service.id, service.name,\n  CAST((service.rate * dollarValue.value_number) AS INTEGER) as price,\n  service.cancel, service.dripfeed, service.max,\n  service.min, service.refill, service.type\n FROM boostwave_service as service\n  LEFT JOIN boostwave_constants as dollarValue \n  WHERE dollarValue.id = 'dollarsvaluecfa';"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_QgZT",
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
    "id": "_clone_G6T1",
    "name": "cancel",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_GtPb",
    "name": "dripfeed",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_SqtC",
    "max": null,
    "min": null,
    "name": "max",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_iXUk",
    "max": null,
    "min": null,
    "name": "min",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "_clone_sdlt",
    "name": "refill",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "_clone_ih1Z",
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

  // remove field
  collection.fields.removeById("_clone_q7jU")

  // remove field
  collection.fields.removeById("_clone_imlk")

  // remove field
  collection.fields.removeById("_clone_IdBq")

  // remove field
  collection.fields.removeById("_clone_6YrP")

  // remove field
  collection.fields.removeById("_clone_JE5u")

  // remove field
  collection.fields.removeById("_clone_wStU")

  // remove field
  collection.fields.removeById("_clone_WAaU")

  // remove field
  collection.fields.removeById("_clone_vayq")

  // remove field
  collection.fields.removeById("_clone_slIH")

  return app.save(collection)
})
