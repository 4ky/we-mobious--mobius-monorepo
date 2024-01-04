
/**
 * Enhanced version of [word-wrap](https://github.com/jonschlinkert/word-wrap).
 */

import { mergeOptions } from './options'

import type { Prepared } from './options'

export interface WordWrapOptions {
  width?: number | undefined
  indent?: string | undefined
  newline?: string | undefined
  escape?: ((targetString: string) => string) | undefined
  cut?: boolean | undefined
  trim?: boolean | undefined
}
export const DEFAULT_WORD_WRAP_OPTIONS: Prepared<WordWrapOptions> = {
  width: 50,
  indent: '',
  newline: '\n',
  escape: (targetString: string): string => targetString,
  cut: false,
  trim: true
}
export const prepareWordWrapOptions = (options: WordWrapOptions = {}): Prepared<WordWrapOptions> => {
  return mergeOptions(DEFAULT_WORD_WRAP_OPTIONS, options) as Prepared<WordWrapOptions>
}

export const wrapWord = (targetString: string, options: WordWrapOptions = {}): string => {
  const preparedOptions = prepareWordWrapOptions(options)

  const { width, indent, newline, escape, cut, trim } = preparedOptions

  let regexString = `.{1,${width}}`
  if (!cut) {
    regexString += '([\\s\u200B]+|$)|[^\\s\u200B]+?([\\s\u200B]+|$)'
  }

  const regExp = new RegExp(regexString, 'g')
  const lines = targetString.match(regExp) ?? []
  let result = indent + lines.map((line) => {
    if (line.endsWith('\n')) {
      line = line.slice(0, line.length - 1)
    }
    return escape(line)
  }).join(newline)

  if (trim) {
    result = result.replace(/[ \t]*$/gm, '')
  }
  return result
}
