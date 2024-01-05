
export type LanguageOptions = Record<string, unknown>
export type LinterOptions = Record<string, unknown>
export type Plugins = Record<string, unknown>
export type Settings = Record<string, unknown>
export type Rules = Record<string, unknown>

export interface FlatConfigItem {
  files?: string[]
  ignores?: string[]
  languageOptions?: LanguageOptions
  linterOptions?: LinterOptions
  processor?: object | string
  plugins?: Plugins
  settings?: Settings
  rules?: Rules
}
