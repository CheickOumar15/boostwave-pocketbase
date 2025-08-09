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
