/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2587040969")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n  service.id, service.name,\n  CAST((service.rate * dollarValue.value_number) AS INTEGER) as price,\n  service.cancel, service.dripfeed, service.max, category.id as category,\n  service.min, service.refill, service.rate, service.type, category.name as category_name,\n  category.platform\n FROM boostwave_service as service\n  LEFT JOIN boostwave_category as category ON category.id = service.category\n  LEFT JOIN boostwave_constants as dollarValue \n  WHERE dollarValue.id = 'dollarsvaluecfa';"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_V5rt")

  // remove field
  collection.fields.removeById("_clone_bmaw")

  // remove field
  collection.fields.removeById("_clone_XKr1")

  // remove field
  collection.fields.removeById("_clone_zfFP")

  // remove field
  collection.fields.removeById("_clone_N8Bb")

  // remove field
  collection.fields.removeById("_clone_et7M")

  // remove field
  collection.fields.removeById("_clone_CPkU")

  // remove field
  collection.fields.removeById("_clone_opT0")

  // remove field
  collection.fields.removeById("_clone_aQQI")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_ijf4",
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
    "id": "_clone_KUFc",
    "name": "cancel",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_OWPJ",
    "name": "dripfeed",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_lGiu",
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
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "_clone_Nb9y",
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
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "_clone_QCgq",
    "name": "refill",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "_clone_rS8Z",
    "max": null,
    "min": null,
    "name": "rate",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "_clone_K0p1",
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
  collection.fields.addAt(11, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_ebJc",
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
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "_clone_nEBq",
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
    "viewQuery": "SELECT \n  service.id, service.name,\n  CAST((service.rate * dollarValue.value_number) AS INTEGER) as price,\n  service.cancel, service.dripfeed, service.max, category.id as category,\n  service.min, service.refill, service.type, category.name as category_name,\n  category.platform\n FROM boostwave_service as service\n  LEFT JOIN boostwave_category as category ON category.id = service.category\n  LEFT JOIN boostwave_constants as dollarValue \n  WHERE dollarValue.id = 'dollarsvaluecfa';"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_V5rt",
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
    "id": "_clone_bmaw",
    "name": "cancel",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_XKr1",
    "name": "dripfeed",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_zfFP",
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
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "_clone_N8Bb",
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
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "_clone_et7M",
    "name": "refill",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "_clone_CPkU",
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
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_opT0",
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
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "_clone_aQQI",
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

  // remove field
  collection.fields.removeById("_clone_ijf4")

  // remove field
  collection.fields.removeById("_clone_KUFc")

  // remove field
  collection.fields.removeById("_clone_OWPJ")

  // remove field
  collection.fields.removeById("_clone_lGiu")

  // remove field
  collection.fields.removeById("_clone_Nb9y")

  // remove field
  collection.fields.removeById("_clone_QCgq")

  // remove field
  collection.fields.removeById("_clone_rS8Z")

  // remove field
  collection.fields.removeById("_clone_K0p1")

  // remove field
  collection.fields.removeById("_clone_ebJc")

  // remove field
  collection.fields.removeById("_clone_nEBq")

  return app.save(collection)
})
