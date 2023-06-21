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
    "cohorting",
    "decluttering",
    "Hwai-En",
    "ICPS",
    "Kubernetes",
    "Mailchimp",
    "Medi-Cal",
    "mindmap",
    "Miramar",
    "Odoo",
    "Scripps",
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
  ],
  ignoreRegExpList: ["hugo-short-code"],
  patterns: [{ name: "hugo-short-code", pattern: "/(?<={{)[^}]+/g" }],
};
