import { mergeOptions } from '../utils/index'

import type { Prepared } from '../utils/index'

export enum Context {
  Type = 'type',
  Scope = 'scope',
  TicketNumber = 'ticketNumber',
  Subject = 'subject',
  Body = 'body',
  Breaking = 'breaking',
  Footer = 'footer',
}

export interface Type {
  value: string
  name: string
  emoji: string
}
export interface Scope {
  value: string
  name: string
}
/**
 * @default
 * @see {@link DEFAULT_MESSAGES}
 */
export interface Messages {
  type?: string | undefined
  scope?: string | undefined
  /**
   * used if allowCustomScopes is true
   *
   * @see {@link CommitizenConfig.allowCustomScope}
   */
  customScope?: string | undefined
  ticketNumber?: string | undefined
  subject?: string | undefined
  body?: string | undefined
  breaking?: string | undefined
  footer?: string | undefined
  confirmCommit?: string | undefined
}
export const DEFAULT_MESSAGES: Prepared<Messages> = {
  type: "Select the type of change that you're committing:",
  scope: '\nDenote the SCOPE of this change (optional):',
  customScope: 'Denote the SCOPE of this change:',
  ticketNumber: 'Enter the ticket number:\n',
  subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
  body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
  breaking: 'List any BREAKING CHANGES (optional):\n',
  footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
  confirmCommit: 'Are you sure you want to proceed with the commit above?'
}
export const prepareMessages = (messages: Messages): Prepared<Messages> => {
  return mergeOptions(DEFAULT_MESSAGES, messages) as Prepared<Messages>
}

/**
 * @default
 * @see {@link DEFAULT_COMMITIZEN_CONFIG}
 */
export interface CommitizenConfig {
  /**
   * @default
   * @see {@link DEFAULT_TYPES}
   */
  types: Type[]
  /**
   * @default
   * @see {@link DEFAULT_SCOPES}
   */
  scopes: Scope[]

  /**
   * @default {}
   */
  scopeOverrides?: Record<string, Scope[]> | undefined
  /**
   * @default
   * @see {@link DEFAULT_MESSAGES}
   */
  messages?: Messages | undefined

  /**
   * @default []
   * @example
   * ```
   * ['scope', 'body']
   * ```
   */
  skipQuestionContexts?: string[] | undefined

  /**
   * to re-use commit from ./.git/COMMIT_EDITMSG
   *
   * @default false
   */
  usePreparedCommit?: boolean | undefined

  /**
   * @default true
   */
  lowerCaseType?: boolean | undefined
  /**
   * @default ''
   */
  typePrefix?: string | undefined
  /**
   * @default ''
   */
  typeSuffix?: string | undefined

  /**
   * @default true
   */
  allowEmptyScope?: boolean | undefined
  /**
   * @default true
   */
  allowCustomScope?: boolean | undefined
  /**
   * @default []
   */
  skipScopeWhenTypeEquals?: string[] | undefined
  /**
   * @default '('
   */
  scopePrefix?: string | undefined
  /**
   * @default ')'
   */
  scopeSuffix?: string | undefined

  /**
   * @default false
   */
  allowTicketNumber?: boolean | undefined
  /**
   * @default false
   */
  isTicketNumberRequired?: boolean | undefined
  /**
   * @default 'TICKET-'
   */
  ticketNumberPrefix?: string | undefined
  /**
   * @default '\\d{1,5}'
   */
  ticketNumberRegExp?: string | undefined

  /**
   * @default ': '
   */
  subjectSeparator?: string | undefined
  /**
   * @default 100
   */
  subjectMaxLength?: number | undefined
  /**
   * Uppercase the first letter of the subject.
   *
   * @default false
   */
  upperCaseSubject?: boolean | undefined

  /**
   * It is supported for fields body and footer.
   *
   * @default '|'
   */
  breaklineCharacter?: string | undefined

  /**
   * @default 100
   */
  bodyMaxLineLength?: number | undefined

  /**
   * @default true
   */
  askForBreakingChangeFirst?: boolean | undefined
  /**
   * @default
   * ['feat', 'fix']
   */
  allowBreakingChanges?: string[] | undefined
  breakingPrefix?: string | undefined
  /**
   * @default 100
   */
  breakingMaxLineLength?: number | undefined

  /**
   * @default 'ISSUES CLOSED:'
   */
  footerPrefix?: string | undefined
  /**
   * @default 100
   */
  footerMaxLineLength?: number | undefined
}
export const DEFAULT_TYPES: Type[] = [
  {
    value: 'feat',
    name: 'feat:     A new feature',
    emoji: '✨'
  },
  {
    value: 'fix',
    name: 'fix:      A bug fix',
    emoji: '🐛'
  },
  {
    value: 'docs',
    name: 'docs:     Documentation only changes',
    emoji: '📚'
  },
  {
    value: 'style',
    name: 'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)',
    emoji: '💎'
  },
  {
    value: 'refactor',
    name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    emoji: '📦'
  },
  {
    value: 'perf',
    name: 'perf:     A code change that improves performance',
    emoji: '🚨'
  },
  {
    value: 'test',
    name: 'test:     Adding missing tests',
    emoji: '🛠'
  },
  {
    value: 'chore',
    name: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation',
    emoji: '♻️'
  },
  {
    value: 'revert',
    name: 'revert:   Revert to a commit',
    emoji: '🗑'
  },
  {
    value: 'WIP',
    name: 'WIP:      Work in progress',
    emoji: '🚧'
  }
]
export const DEFAULT_SCOPES: Scope[] = [
  { value: 'application', name: 'application' },
  { value: 'engineering', name: 'engineering ' },
  { value: 'feature', name: 'feature' },
  { value: 'utility', name: 'utility' }
]
export const DEFAULT_COMMITIZEN_CONFIG: Prepared<CommitizenConfig> = {
  types: DEFAULT_TYPES,
  scopes: DEFAULT_SCOPES,
  scopeOverrides: {},
  messages: DEFAULT_MESSAGES,
  skipQuestionContexts: [],
  usePreparedCommit: false,
  lowerCaseType: true,
  typePrefix: '',
  typeSuffix: '',
  subjectSeparator: ': ',
  allowEmptyScope: true,
  allowCustomScope: true,
  skipScopeWhenTypeEquals: [],
  scopePrefix: '(',
  scopeSuffix: ')',
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',
  subjectMaxLength: 100,
  upperCaseSubject: false,
  breaklineCharacter: '|',
  bodyMaxLineLength: 100,
  askForBreakingChangeFirst: false,
  allowBreakingChanges: ['feat', 'fix'],
  breakingPrefix: 'BREAKING CHANGE: ',
  breakingMaxLineLength: 100,
  footerPrefix: 'ISSUES CLOSED:',
  footerMaxLineLength: 100
}
export const prepareCommitizenConfig = (config: CommitizenConfig): Prepared<CommitizenConfig> => {
  return mergeOptions(DEFAULT_COMMITIZEN_CONFIG, config) as Prepared<CommitizenConfig>
}

export interface Answers {
  type: string
  scope?: string | undefined
  customScope?: string | undefined
  ticketNumber?: string | undefined
  subject: string
  body?: string | undefined
  breaking?: string | undefined
  footer?: string | undefined
  confirmCommit?: string | undefined
}

export const DEFAULT_ANSWERS: Prepared<Answers> = {
  type: '',
  scope: '',
  customScope: '',
  ticketNumber: '',
  subject: '',
  body: '',
  breaking: '',
  footer: '',
  confirmCommit: 'yes'
}
export const prepareAnswers = (answers: Answers): Prepared<Answers> => {
  return mergeOptions(DEFAULT_ANSWERS, answers) as Prepared<Answers>
}
