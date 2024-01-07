# Mobius Monorepo

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Monorepo of Mobius Projects.

## Features

- Enable `"type": "module"` in `package.json` to use ES6 modules.
- Every package should expicitly declare its all dependencies in `package.json`, includes `@types/*`. For respecting [this](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-1.html#explicit-typeroots-disables-upward-walks-for-node_modulestypes).
- Using [lefthook](https://github.com/evilmartians/lefthook) as git hooks manager.
- Using [nx](https://nx.dev/) as [package-based monorepo](https://nx.dev/getting-started/tutorials/package-based-repo-tutorial) manager.
- Using [commitlint](https://commitlint.js.org/) to lint commit messages.
- Using [ESLint](https://eslint.org/) as code transformer, both for linting and formatting.
- Using [changesets](https://github.com/changesets/changesets) to manage changelog and versioning.
