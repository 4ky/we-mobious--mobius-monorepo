import { wrapWord } from '../utils/index'

import { prepareCommitizenConfig, prepareAnswers } from './basic'

import type { CommitizenConfig, Answers } from './basic'
import type { Prepared } from '../utils/index'

const addType = (type: string, preparedCommitizenConfig: Prepared<CommitizenConfig>): string => {
  const { lowerCaseType, typePrefix, typeSuffix } = preparedCommitizenConfig
  const preparedType = (`${typePrefix}${type.trim()}${typeSuffix}`).trim()
  return lowerCaseType ? preparedType.toLowerCase() : preparedType
}

const addScope = (preparedAnswers: Prepared<Answers>, preparedCommitizenConfig: Prepared<CommitizenConfig>): string => {
  const { scope, customScope } = preparedAnswers
  const { scopePrefix, scopeSuffix } = preparedCommitizenConfig
  const finalScope = scope === 'custom' ? customScope : scope
  return finalScope.trim() === '' ? '' : `${scopePrefix}${finalScope.trim()}${scopeSuffix}`.trim()
}

const addTicketNumber = (ticketNumber: string, preparedCommitizenConfig: Prepared<CommitizenConfig>): string => {
  if (ticketNumber === '') {
    return ''
  }
  return `${preparedCommitizenConfig.ticketNumberPrefix + ticketNumber.trim()} `
}

const addSubject = (subject: string): string => subject.trim()

const addBreaklinesIfNeeded = (value: string, preparedCommitizenConfig: Prepared<CommitizenConfig>): string => {
  return value.split(preparedCommitizenConfig.breaklineCharacter).join('\n').valueOf()
}

const addFooter = (footer: string, preparedCommitizenConfig: Prepared<CommitizenConfig>): string => {
  const { footerPrefix } = preparedCommitizenConfig
  if (footerPrefix === '') {
    return `\n\n${footer}`
  } else {
    return `\n\n${footerPrefix} ${addBreaklinesIfNeeded(footer, preparedCommitizenConfig)}`
  }
}

const escapeSpecialChars = (targetString: string): string => {
  const specialChars = ['`', '"', '\\$', '!', '<', '>', '&']
  let newResult = targetString

  specialChars.forEach((specialChar) => {
    // If user types `feat: "string"`, the commit preview should show `feat: \"string\"`.
    // Don't worry. The git log will be `feat: "string"`
    newResult = newResult.replace(new RegExp(specialChar, 'g'), `\\${specialChar}`)
  })

  return newResult
}

export const buildCommit = (answers: Answers, commitizenConfig: CommitizenConfig): string => {
  const preparedCommitizenConfig = prepareCommitizenConfig(commitizenConfig)
  const preparedAnswers = prepareAnswers(answers)

  const head =
    addType(preparedAnswers.type, preparedCommitizenConfig) +
    addScope(preparedAnswers, preparedCommitizenConfig) +
    preparedCommitizenConfig.subjectSeparator +
    addTicketNumber(preparedAnswers.ticketNumber, preparedCommitizenConfig) +
    addSubject(preparedAnswers.subject.slice(0, preparedCommitizenConfig.subjectMaxLength))

  // Wrap these lines at 100 characters
  let body = wrapWord(preparedAnswers.body, { width: preparedCommitizenConfig.bodyMaxLineLength })
  body = addBreaklinesIfNeeded(body, preparedCommitizenConfig)

  const breaking = wrapWord(preparedAnswers.breaking, { width: preparedCommitizenConfig.breakingMaxLineLength })
  const footer = wrapWord(preparedAnswers.footer, { width: preparedCommitizenConfig.footerMaxLineLength })

  let result = head
  if (body !== '') {
    result += `\n\n${body}`
  }
  if (breaking !== '') {
    const { breakingPrefix } = preparedCommitizenConfig
    result += `\n\n${breakingPrefix}\n${breaking}`
  }
  if (footer !== '') {
    result += addFooter(footer, preparedCommitizenConfig)
  }

  return escapeSpecialChars(result)
}
