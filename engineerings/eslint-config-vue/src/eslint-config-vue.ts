
import { typescriptESLintConfig } from '@we-mobius/eslint-config-typescript/ts'

import { vueSettings, vueOverride } from './config-parts/vue.config-parts'

export const vueESLintConfig = {
  ...typescriptESLintConfig,
  settings: {
    ...typescriptESLintConfig.settings,
    ...vueSettings
  },
  plugins: [
    ...typescriptESLintConfig.plugins
  ],
  overrides: [
    ...typescriptESLintConfig.overrides,
    vueOverride
  ],
  rules: {
    ...typescriptESLintConfig.rules
  }
}
