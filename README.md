# Mobius Monorepo

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Monorepo of Mobius Projects.

- Enable `"type": "module"` in `package.json` to use ES6 modules.

- Every package should expicitly declare its all dependencies in `package.json`, includes `@types/*`.

  Why? Respect [this](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-1.html#explicit-typeroots-disables-upward-walks-for-node_modulestypes).

- Using `lefthook` as git hooks manager.
