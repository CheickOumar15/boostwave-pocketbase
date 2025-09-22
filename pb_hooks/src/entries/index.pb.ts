const HOOKS_LISTS: string[] = ["api-config", "api-data", "benetpayed.api"];

HOOKS_LISTS.map((hook) => require(`${__hooks}/${hook}.js`).run());
