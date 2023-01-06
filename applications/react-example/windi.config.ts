import { defineConfig } from 'windicss/helpers'

import type { FullConfig } from 'windicss/types/interfaces'

export interface WindConfigMakeOptions {
  customRoot?: string | undefined
}

/**
 * @see {@link https://codesandbox.io/s/react-windicss-live-playground-5j7xr}
 */

export const makeWindiConfig = (options: WindConfigMakeOptions): FullConfig => {
  const { customRoot } = options
  const preparedCustomRoot = customRoot ?? 'src/'

  return defineConfig({
    extract: {
      // accepts globs and file paths relative to project root
      include: [
        `${preparedCustomRoot}**/*.{vue,html,js,ts,jsx,tsx}`
      ],
      exclude: [
        'node_modules/**/*',
        '.git/**/*'
      ]
    },
    preflight: false,
    theme: {},
    shortcuts: {},
    alias: {},
    plugins: []
  })
}

export const windiConfig = makeWindiConfig({ customRoot: 'src/' })

export default windiConfig
