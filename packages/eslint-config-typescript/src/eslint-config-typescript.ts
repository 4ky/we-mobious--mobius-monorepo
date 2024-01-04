
import { basicESLintConfig } from '@we-mobius/eslint-config-basic/ts'

import { typescriptSettings, typescriptOverride } from './config-parts/typescript.config-parts'

export const typescriptESLintConfig = {
  ...basicESLintConfig,
  settings: {
    ...basicESLintConfig.settings,
    ...typescriptSettings
  },
  plugins: [
    ...basicESLintConfig.plugins
  ],
  overrides: [
    ...basicESLintConfig.overrides,
    typescriptOverride
  ],
  rules: {
    ...basicESLintConfig.rules
  }
}
