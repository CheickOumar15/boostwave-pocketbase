const HOOKS_LISTS: string[] = ["api-config", "api-data"];

HOOKS_LISTS.map((hook) => require(`${__hooks}/${hook}.js`).run());
