import { defineWorkspace } from 'vitest/config'

const workspaceConfig = defineWorkspace([
  'packages/*/vitest.config.ts'
])

export default workspaceConfig
