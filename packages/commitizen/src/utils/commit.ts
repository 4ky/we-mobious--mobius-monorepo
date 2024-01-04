import { execSync } from 'node:child_process'

import { logger } from './logger'

export const commit = (commitMessage: string): void => {
  try {
    execSync(`git commit -m "${commitMessage}"`, { stdio: [0, 1, 2] })
  } catch (error) {
    logger.error('>>> ERROR', error)
  }
}
