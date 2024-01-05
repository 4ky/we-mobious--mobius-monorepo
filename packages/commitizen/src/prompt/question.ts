import { getPreparedCommit, logger } from '../utils/index'

import { Context, prepareCommitizenConfig, DEFAULT_ANSWERS } from './basic'
import { buildCommit } from './build-commit'

import type { Answers, CommitizenConfig } from './basic'
import type { Prepared } from '../utils/index'
import type inquirer from 'inquirer'
import type { QuestionCollection, DistinctQuestion } from 'inquirer'

const isValidateTicketNumber = (value: string, preparedCommitizenConfig: Prepared<CommitizenConfig>): boolean => {
  const { isTicketNumberRequired, ticketNumberRegExp } = preparedCommitizenConfig
  if (value === '') {
    return !isTicketNumberRequired
  }
  const reg = new RegExp(ticketNumberRegExp)
  if (value.replace(reg, '') === '') {
    return false
  } else {
    return true
  }
}

const prepareCommit = (context: Context): string | undefined => {
  let message

  const preparedCommit = getPreparedCommit()

  if (preparedCommit === undefined) {
    return message
  }

  const preparedCommitParts = preparedCommit
    .replace(/^#.*/gm, '')
    .replace(/^\s*[\r\n]/gm, '')
    .replace(/[\r\n]$/, '')
    .split(/\r\n|\r|\n/)

  if ((preparedCommitParts.length > 0) && preparedCommitParts[0] !== '') {
    if (context === Context.Subject) {
      [message] = preparedCommitParts
    } else if (context === Context.Body && preparedCommitParts.length > 1) {
      preparedCommitParts.shift()
      message = preparedCommitParts.join('|')
    }
  }

  return message
}

export const getQuestions = (commitizenConfig: CommitizenConfig, InquirerInstance: typeof inquirer): QuestionCollection<Prepared<Answers>> => {
  const preparedCommitizenConfig = prepareCommitizenConfig(commitizenConfig)

  const { messages } = preparedCommitizenConfig

  let questions: Array<DistinctQuestion<Prepared<Answers>> & { name: string }> = [
    {
      type: 'list',
      name: 'type',
      message: messages.type,
      choices: commitizenConfig.types
    },
    {
      type: 'list',
      name: 'scope',
      message: messages.scope,
      default: DEFAULT_ANSWERS.scope,
      choices: (answers) => {
        const { scopeOverrides } = preparedCommitizenConfig
        let scopes: Array<{ name: string, value?: string } | inquirer.Separator> = []
        if (scopeOverrides[answers.type] !== undefined) {
          scopes = [...scopes, ...scopeOverrides[answers.type]!]
        } else {
          scopes = [...scopes, ...preparedCommitizenConfig.scopes]
        }
        if (scopes.length !== 0 && (preparedCommitizenConfig.allowCustomScope || preparedCommitizenConfig.allowEmptyScope)) {
          scopes.push(new InquirerInstance.Separator())
        }
        if (preparedCommitizenConfig.allowEmptyScope) {
          scopes.push({ name: 'empty', value: '' })
        }
        if (preparedCommitizenConfig.allowCustomScope) {
          scopes.push({ name: 'custom', value: 'custom' })
        }
        return scopes
      },
      when: (answers) => {
        return !preparedCommitizenConfig.skipScopeWhenTypeEquals.includes(answers.type.toLowerCase())
      }
    },
    {
      type: 'input',
      name: 'customScope',
      message: messages.customScope,
      when: (answers) => {
        return answers.scope.toLowerCase() === 'custom'
      }
    },
    {
      type: 'input',
      name: 'ticketNumber',
      message: messages.ticketNumber,
      when: () => {
        return preparedCommitizenConfig.allowTicketNumber
      },
      validate: (value: string) => {
        return isValidateTicketNumber(value, preparedCommitizenConfig)
      }
    },
    {
      type: 'input',
      name: 'subject',
      message: messages.subject,
      default: preparedCommitizenConfig.usePreparedCommit ? prepareCommit(Context.Subject) : '',
      validate: (value: string) => {
        const { subjectMaxLength } = preparedCommitizenConfig
        if (value.length > subjectMaxLength) {
          return `Exceed limit: ${subjectMaxLength}`
        }
        return true
      },
      filter: (value: string) => {
        const { upperCaseSubject } = preparedCommitizenConfig
        const preparedSubject = (upperCaseSubject ? value.charAt(0).toUpperCase() : value.charAt(0).toLowerCase()) + value.slice(1)
        return preparedSubject
      }
    },
    {
      type: 'input',
      name: 'body',
      message: messages.body,
      default: preparedCommitizenConfig.usePreparedCommit ? prepareCommit(Context.Body) : ''
    },
    {
      type: 'input',
      name: 'breaking',
      message: messages.breaking,
      when: (answers): boolean => {
        const showThisQuestion = preparedCommitizenConfig.askForBreakingChangeFirst || preparedCommitizenConfig.allowBreakingChanges.includes(answers.type.toLowerCase())
        // no breaking changes allowed unless specifed
        return showThisQuestion
      }
    },
    {
      type: 'input',
      name: 'footer',
      message: messages.footer
    },
    {
      type: 'expand',
      name: 'confirmCommit',
      choices: [
        { key: 'y', name: 'Yes', value: 'yes' },
        { key: 'n', name: 'Abort commit', value: 'no' },
        { key: 'e', name: 'Edit message', value: 'edit' }
      ],
      default: 0,
      message: (answers) => {
        const SEP = '###--------------------------------------------------------###'
        logger.info(`\n${SEP}\n${buildCommit(answers, preparedCommitizenConfig)}\n${SEP}\n`)
        return messages.confirmCommit
      }
    }
  ]

  questions = questions.filter((item) => !preparedCommitizenConfig.skipQuestionContexts.includes(item.name))

  if (preparedCommitizenConfig.askForBreakingChangeFirst) {
    const breakingQuestion = questions.filter((question) => question.name === 'breaking')
    const questionWithoutBreaking = questions.filter((question) => question.name !== 'breaking')

    questions = [...breakingQuestion, ...questionWithoutBreaking]
  }

  return questions
}
