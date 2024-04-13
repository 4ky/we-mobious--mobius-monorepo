import { eslintConfig, globalIgnores } from '@we-mobius/eslint-config'

const [_, ...rules] = eslintConfig

const customEslintConfig = [
  {
    ignores: [...globalIgnores.ignores, 'tests/incorrect-cases/']
  },
  ...rules
]

export default customEslintConfig
