import { spawn } from 'node:child_process'
import { platform } from 'node:process'

export const edit = (file: string, callback: (code: number | null, signal: NodeJS.Signals | null) => void): void => {
  const editor = platform.startsWith('win') ? 'notepad' : 'vim'
  const args = editor.split(/\s+/)
  const bin = args.shift()
  const childProcess = spawn(bin!, [...args, file], { stdio: 'inherit' })

  childProcess.on('exit', (code, signal) => {
    callback(code, signal)
  })
}
