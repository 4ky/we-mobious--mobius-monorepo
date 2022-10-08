import { jsonRules, jsonOverride } from './json.config-parts'

export const packageJSONRules = {
  ...jsonRules,
  'jsonc/sort-keys': [
    'error',
    {
      pathPattern: '^$',
      order: [
        'publisher',
        'name',
        'displayName',
        'icon',
        'type',
        'version',
        'private',
        'packageManager',
        'description',
        'author',
        'license',
        'funding',
        'homepage',
        'repository',
        'bugs',
        'keywords',
        'categories',
        'sideEffects',
        'engines',
        'typings',
        'types',
        'main',
        'module',
        'exports',
        'typesVersions',
        'bin',
        'directories',
        'scripts',
        'files',
        'unpkg',
        'jsdelivr',
        'publishConfig',

        'peerDependencies',
        'peerDependenciesMeta',
        'dependencies',
        'optionalDependencies',
        'devDependencies',
        'activationEvents',
        'contributes',
        'config',
        'pnpm',
        'overrides',
        'resolutions',
        'husky',
        'simple-git-hooks',
        'lint-staged',
        'eslintConfig'
      ]
    },
    {
      pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
      order: { type: 'asc' }
    },
    {
      pathPattern: '^(config|publishConfig)$',
      order: { type: 'asc' }
    },
    {
      pathPattern: '^exports.*$',
      order: [
        'types',
        'require',
        'import'
      ]
    }
  ]
}
export const packageJSONOverride = {
  ...jsonOverride,
  files: ['package.json'],
  rules: { ...packageJSONRules }
}
