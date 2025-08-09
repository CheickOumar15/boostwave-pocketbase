/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2587040969")

  // update collection data
  unmarshal({
    "listRule": "",
    "viewRule": ""
  }, collection)

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

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_PBAj",
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
    "id": "_clone_ekWS",
    "name": "cancel",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_LP9A",
    "name": "dripfeed",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_Obuf",
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
    "id": "_clone_WCtR",
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
    "id": "_clone_dHYH",
    "name": "refill",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "_clone_JGSh",
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
    "id": "_clone_ZnK5",
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
    "id": "_clone_MeLp",
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
    "listRule": null,
    "viewRule": null
  }, collection)

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

  // remove field
  collection.fields.removeById("_clone_PBAj")

  // remove field
  collection.fields.removeById("_clone_ekWS")

  // remove field
  collection.fields.removeById("_clone_LP9A")

  // remove field
  collection.fields.removeById("_clone_Obuf")

  // remove field
  collection.fields.removeById("_clone_WCtR")

  // remove field
  collection.fields.removeById("_clone_dHYH")

  // remove field
  collection.fields.removeById("_clone_JGSh")

  // remove field
  collection.fields.removeById("_clone_ZnK5")

  // remove field
  collection.fields.removeById("_clone_MeLp")

  return app.save(collection)
})
