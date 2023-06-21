# Hwai-En's Personal Journal

Hwai-En's personal journal about everything.

Powered by the [Hugo](https://gohugo.io/) framework.

## Guardrails

This repository uses the following guardrails to automatically find and fix problems, thereby minimizing distractions and maximizing productivity.

### CSpell

[CSpell](https://cspell.org/) is a command line tool and library for spell checking.

Misspellings create confusion and degrades content quality. CSpell helps to keep misspellings to a minimum.

CSpell is configured by the [`cspell.config.cjs`](cspell.config.cjs) file.

CSpell is integrated with VS Code by the [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) extension.

### EditorConfig

[EditorConfig](https://editorconfig.org/) helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.

Consistency improves readability, which in turn improves productivity when editing content.

EditorConfig is configured by the [`.editorconfig`](.editorconfig) file.

EditorConfig is integrated with VS Code by [extension](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig).

### Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter with support for many languages.

EditorConfig has broad editor support but only enforces basic formatting rules. Prettier provides comprehensive formatting while [respecting EditorConfig rules](https://prettier.io/docs/en/configuration.html#editorconfig). Therefore, this repository uses EditorConfig to define basic formatting rules and Prettier to enforce them.

Prettier is configured by the [`.prettierrc.js`](.prettierrc.js) and [`.prettierignore`](.prettierignore) files.

Prettier is integrated with VS Code by [extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

### markdownlint-cli2

[markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) is a fast, flexible, configuration-based command-line interface for linting Markdown/CommonMark files with [`markdownlint`](https://github.com/DavidAnson/markdownlint), a static analysis tool for Node.js with a library of rules to enforce standards and consistency for Markdown files. It was inspired by - and heavily influenced by - Mark Harrison's [markdownlint](https://github.com/markdownlint/markdownlint) for Ruby. The initial rules, rule documentation, and test cases came directly from that project.

The content in this journal is almost entirely in Markdown. Even though Prettier has some support for Markdown, it is not as comprehensive as markdownlint. Therefore, this repository adds markdownlint to enforce more Markdown-specific formatting rules.

markdownlint is configured by the [`.markdownlint-cli2.jsonc`](.markdownlint-cli2.jsonc) file.

markdownlint is integrated with VS Code by [extension](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint).

### Stylelint

[Stylelint](https://stylelint.io/) is a CSS linter that helps avoid errors and enforce conventions.

Stylelint is configured by the [`.stylelintrc.js`](.stylelintrc.js) and [`.stylelintignore`](.stylelintignore) files.

Stylelint is integrated with VS Code by [extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint).

### ESLint

[ESLint](https://eslint.org/) statically analyzes JavaScript code to find and fix problems.

ESLint is configured by the [`.eslintrc.js`](.eslintrc.js) and [`.eslintignore`](.eslintignore) files.

ESLint is integrated with VS Code by [extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

## Workspace Setup

Here is how to set up the environment to get to work on this repository.

1. Install [Docker](https://www.docker.com/).
1. Install [VS Code](https://code.visualstudio.com/).
1. Clone the repo [with SSH](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-ssh-urls).
1. Open the repo in [VS Code](https://en.wikipedia.org/wiki/Visual_Studio_Code).
1. Click "Reopen in Container" when prompted.
1. Configure Git to always sign commits using a signing key.
   -  One way to automate this is through a personal [dotfile repository](https://code.visualstudio.com/docs/devcontainers/containers#_personalizing-with-dotfile-repositories). See [example here](https://github.com/hwaien/dotfiles/blob/main/install.sh).
1. To connect and authenticate to GitHub by SSH, add the dev container's [SSH key to GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).
   -  To find the dev container's SSH key, run the following:
      -  `cat $HOME/.ssh/id_rsa.pub`
   -  If the dev container does not have an SSH key, consider adding [this feature](https://github.com/hwaien/devcontainer-features/pkgs/container/devcontainer-features%2Fssh-keygen) to the `dev.containers.defaultFeatures` setting in VS Code's `settings.json` file. This way, all VS Code dev containers automatically gets a key.
1. Pull the `content` submodule
   1. `cd content`
   1. `git init`
   1. `git remote add origin gcrypt::git@github.com:hwaien/spirited-journey-content.git`
   1. `git pull`
   1. `git checkout master`
1. Initialize submodules
   1. `cd ..` to return to the repository's root directory
   1. `git submodule init`
   1. `git submodule update`
1. Checkout the default branch of the theme submodule
   1. `cd themes/hugo-book`
   1. `git checkout master`
