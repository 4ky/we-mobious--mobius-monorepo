
import { readFileSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { resolve } from 'node:path'

import inquirer from 'inquirer'

import { edit } from '../utils/index'
import { logger } from '../utils/logger'

import { prepareCommitizenConfig } from './basic'
import { buildCommit } from './build-commit'
import { getQuestions } from './question'

import type { CommitizenConfig } from './basic'

export const app = {
  prompter: (InquirerInstance: typeof inquirer, commit: (message: string) => void) => {
    const config = {} as unknown as CommitizenConfig
    const preparedCommitizenConfig = prepareCommitizenConfig(config)

    const questions = getQuestions(preparedCommitizenConfig, InquirerInstance)

    InquirerInstance.prompt(questions)
      .then((answers) => {
        if (answers.confirmCommit === 'edit') {
          mkdirSync(tmpdir(), { recursive: true })
          const tmpFile = resolve(tmpdir(), `COMMIT_EDITMSG--${+new Date()}`)
          writeFileSync(tmpFile, buildCommit(answers, preparedCommitizenConfig))
          edit(tmpFile, (code) => {
            if (code === 0) {
              const commitStr = readFileSync(tmpFile, { encoding: 'utf8' })
              logger.info(`Editor returned. Commit message was:\n${commitStr}`)
              commit(commitStr)
            } else {
              logger.info(`Editor returned non zero value. Commit message was:\n${buildCommit(answers, preparedCommitizenConfig)}`)
            }
            rmSync(tmpFile)
          })
        } else if (answers.confirmCommit === 'yes') {
          commit(buildCommit(answers, preparedCommitizenConfig))
        } else {
          logger.info('Commit has been canceled.')
        }
        return answers
      }).catch(console.error)
  }
}
