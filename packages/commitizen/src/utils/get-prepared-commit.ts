import { existsSync, readFileSync } from 'node:fs'

export const getPreparedCommit = (filePath = './.git/COMMIT_EDITMSG'): string | undefined => {
  if (existsSync(filePath)) {
    return readFileSync(filePath, 'utf-8')
  }

  return undefined
}
