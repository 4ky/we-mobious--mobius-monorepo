import { eslintComments } from './parts/eslint-comments'
import { globalIgnores } from './parts/global-ignore'
import { globalLinterOptions } from './parts/global-linter-options'
import { html } from './parts/html'
import { javascript } from './parts/javascript'
import { javascriptInMarkdown } from './parts/javascript-in-markdown'
import { json } from './parts/json'
import { markdown } from './parts/markdown'
import { nx } from './parts/nx'
import { packageJson } from './parts/package-json'
import { reactWithTypescript } from './parts/react-with-typescript'
import { typescript } from './parts/typescript'
import { vueWithTypescript } from './parts/vue-with-typescript'

export const eslintConfig = [
  globalIgnores,
  globalLinterOptions,
  eslintComments,
  html,
  javascriptInMarkdown,
  javascript,
  json,
  markdown,
  nx,
  packageJson,
  typescript,
  reactWithTypescript,
  vueWithTypescript
]
