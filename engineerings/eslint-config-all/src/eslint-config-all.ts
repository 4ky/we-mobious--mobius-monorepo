import { reactSettings, reactOverride } from '@we-mobius/eslint-config-react/ts'
import { typescriptESLintConfig } from '@we-mobius/eslint-config-typescript/ts'
import { vueSettings, vueOverride } from '@we-mobius/eslint-config-vue/ts'

export const allESLintConfig = {
  ...typescriptESLintConfig,
  settings: {
    ...typescriptESLintConfig.settings,
    ...reactSettings,
    ...vueSettings
  },
  plugins: [
    ...typescriptESLintConfig.plugins
  ],
  overrides: [
    ...typescriptESLintConfig.overrides,
    reactOverride,
    vueOverride
  ],
  rules: {
    ...typescriptESLintConfig.rules
  }
}
