const APP_COLLECTIONS = {
  CATEGORIES: {
    name: "boostwave_category",
    collection: () => $app.findCollectionByNameOrId("boostwave_category"),
  },
  SERVICES: {
    name: "boostwave_service",
    collection: () => $app.findCollectionByNameOrId("boostwave_service"),
  },
  SERVICE_CATEGORIES: {
    name: "boostwave_service_category",
    collection: () =>
      $app.findCollectionByNameOrId("boostwave_service_category"),
  },
  COMMANDES: {
    name: "boostwave_commande",
    collection: () => $app.findCollectionByNameOrId("boostwave_commande"),
  },
  COMMANDES_LOGS: {
    name: "boostwave_commande_logs",
    collection: () => $app.findCollectionByNameOrId("boostwave_commande_logs"),
  },
  CONSTANTS: {
    name: "boostwave_constants",
    collection: () =>
      $app.findCachedCollectionByNameOrId("boostwave_constants"),
  },
  PAYMENTS: {
    name: "boostwave_payment",
    collection: () => $app.findCachedCollectionByNameOrId("boostwave_payment"),
  },
};
enum APP_SERVICES_TYPES {
  Default = "Default",
  Subscriptions = "Subscriptions",
  CustomComments = "Custom Comments",
  MentionsUserFollowers = "Mentions User Followers",
  Package = "Package",
  CustomCommentsPackage = "Custom Comments Package",
  Poll = "Poll",
  Mentions = "Mentions",
  MentionsHashtag = "Mentions Hashtag",
}

const APP_CATEGORIES_PLATFORMS = [
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
  "WhatsApp",
];

const BANNED_CATEGORIES = ["⏺ TEST [Do not order]"];
const BANNED_PLATFORMS = [
  "Test",
  "◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️",
  "BETA",
  "[AUTO]",
];

export {
  APP_COLLECTIONS,
  APP_SERVICES_TYPES,
  BANNED_CATEGORIES,
  BANNED_PLATFORMS,
  APP_CATEGORIES_PLATFORMS,
};
