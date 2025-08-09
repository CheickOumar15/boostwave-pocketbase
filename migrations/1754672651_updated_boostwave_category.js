/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2460731305")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select961728715",
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
      "BETA",
      "[AUTO]",
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
  const collection = app.findCollectionByNameOrId("pbc_2460731305")

  // remove field
  collection.fields.removeById("select961728715")

  return app.save(collection)
})
