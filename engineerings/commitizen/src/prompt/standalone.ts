import inquirer from 'inquirer'

import { commit } from '../utils/index'

import { app } from './app'

export const standaloneRun = (): void => {
  app.prompter(inquirer, commit)
}
