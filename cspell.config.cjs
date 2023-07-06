// https://cspell.org/configuration/
module.exports = {
  version: "0.2",
  language: "en",
  words: [
    "Ajith",
    "Anza-Borrego",
    "Asana",
    "Bitnami",
    "BOLSD",
    "Canndy",
    "cohorting",
    "Debrox",
    "decluttering",
    "dotfile",
    "gcrypt",
    "goldmark",
    "Hwai-En",
    "hwaien",
    "ICPS",
    "Kubernetes",
    "Mailchimp",
    "Medi-Cal",
    "mindmap",
    "Miramar",
    "Odoo",
    "Scripps",
    "Stylelint",
    "stylelintignore",
    "stylelintrc",
    "UCSD",
    "underhook",
  ],
  ignorePaths: [
    ".git/objects",
    ".vscode",
    "node_modules",
    "public",
    "resources",
    "themes",
    "*.json",
  ],
  ignoreRegExpList: ["hugo-short-code"],
  patterns: [{ name: "hugo-short-code", pattern: "/(?<={{)[^}]+/g" }],
};
