# Mobius Commitizen

## Getting Started

Install as development dependencies:

```sh
pnpm add -D @we-mobius/commitizen
```

Using `pnpm exec commit` to commit your changes.

Or using `pnpm exec cz` to commit your changes, equipped with `commitizen`'s functionality.

## With commitlint

Install `commitlint` and `husky` as development dependencies:

```sh
pnpm dlx husky-init
pnpm install
pnpm add -D @commitlint/cli@latest
```

Using husky's command to add `commitlint` as `commit-msg` git hooks:

```sh
pnpm exec husky add .husky/commit-msg  'pnpm exec commitlint --edit ${1}'
```

Create a `commitlint` config file named `.commitlintrc.json` in the root directory of your project, with the following content:

```json
{
  "extends": "@we-mobius/commitizen/commitlint"
}
```

Done, here we go, run `git add .` and `pnpm exec cz` to commit our changes.

Don't forget to add Commitizen friendly badge to your `README.md`: [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

```
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
```

## Roadmap

- [ ] Support fine-grained instructions for breaking parts and issue parts, see [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/index.js).
- [ ] Respect the `commitlint` configurations in the workspace root or the project root, using `commitlint` configurations to change the `commitizen` configurations.
- [ ] Add `commitizen-init` command to initialize the `commitizen` -related configurations, including install necessary dependencies, adding `commitlint` configurations, adding git hooks, and so on. Then users can use `pnpm dlx commitizen-init` to get started, everything just works.
- [ ] Reading `commitizen.config.js` to get the configurations; or reading configurations from valid `commitlint` config files. Functionalities `commitlint` provided will be integrated into Mobius Commitizen in the future, so `commitizen.config.js` will be the first config choice.

## References

- Built with [Commitizen](https://github.com/commitizen/cz-cli).
- Derived from [cz-customizable](https://github.com/leoforfree/cz-customizable).
- Inspired by [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog), [cz-emoji](https://github.com/ngryman/cz-emoji)
- Compatible with [commitlint](https://github.com/conventional-changelog/commitlint)
