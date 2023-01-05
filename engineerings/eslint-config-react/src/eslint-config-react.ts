
import { typescriptESLintConfig } from '@we-mobius/eslint-config-typescript/ts'

import { reactSettings, reactOverride } from './config-parts/react.config-parts'

export const reactESLintConfig = {
  ...typescriptESLintConfig,
  settings: {
    ...typescriptESLintConfig.settings,
    ...reactSettings
  },
  plugins: [
    ...typescriptESLintConfig.plugins
  ],
  overrides: [
    ...typescriptESLintConfig.overrides,
    reactOverride
  ],
  rules: {
    ...typescriptESLintConfig.rules
  }
}
