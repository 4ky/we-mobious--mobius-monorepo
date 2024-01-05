import type { FlatConfigItem } from '../types'

export const globalLinterOptions: FlatConfigItem = {
  linterOptions: {
    noInlineConfig: false,
    reportUnusedDisableDirectives: true
  }
}
