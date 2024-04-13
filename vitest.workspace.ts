import { defineWorkspace } from 'vitest/config'

const config = defineWorkspace([
  'packages/*/vitest.config.ts'
])

export default config
