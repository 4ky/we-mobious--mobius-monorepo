import { existsSync, statSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { cwd, exit } from 'node:process'

import ts from 'typescript'

import { compilerOptions } from './compilerOptions'

/**
 * 类型检查的目标是：
 *  - 接受被检查的文件名或路径作为参数之一，若是文件名或相对路径，根据执行脚本的位置进行解析
 *  - 使用默认的一套 tsconfig 配置文件，若脚本执行的目录有 tsconfig，用该 tsconfig 的配置覆盖默认配置
 */

const allTypescriptFilesUnderDirectory = (directory: string): string[] => {
  const files = ts.sys.readDirectory(directory)
  const result: string[] = []
  for (const file of files) {
    const path = resolve(directory, file)
    if (ts.sys.fileExists(path)) {
      if (file.endsWith('.ts')) {
        result.push(path)
      }
    } else {
      result.push(...allTypescriptFilesUnderDirectory(path))
    }
  }
  return result
}

const findProjectRootUpwards = (filepath: string): string | undefined => {
  if (!existsSync(filepath)) {
    return findProjectRootUpwards(dirname(filepath))
  }

  if (!statSync(filepath).isDirectory()) {
    return findProjectRootUpwards(dirname(filepath))
  }

  if (existsSync(resolve(filepath, 'package.json'))) {
    return filepath
  }

  if (dirname(filepath) === filepath) {
    return undefined
  }

  return findProjectRootUpwards(dirname(filepath))
}

export const getSourceFiles = (filepath: string): string[] => {
  const projectRoot = findProjectRootUpwards(filepath) ?? ''
  const preProgram = ts.createProgram([filepath], compilerOptions)
  const sourceFiles = preProgram.getSourceFiles()
  const detectedFiles = sourceFiles.map(item => item.fileName)
  const tobeCheckedFiles = detectedFiles.filter(
    item => !item.includes('node_modules') && item.replace(/\/|\\/g, '').includes(projectRoot.replace(/\/|\\/g, ''))
  )
  return tobeCheckedFiles
}

export const checkFile = (filepath: string): void => {
  const tobeCheckedFiles = getSourceFiles(filepath)
  console.log(`[[🤔 Files to be type check]] number of them: ${tobeCheckedFiles.length}, projectRoot is ${findProjectRootUpwards(filepath) ?? ''}`)
  console.log(tobeCheckedFiles)
  console.log('\r')
  const program = ts.createProgram(tobeCheckedFiles, compilerOptions)
  const allDiagnostics = program.getSemanticDiagnostics()
  allDiagnostics.forEach((diagnostic) => {
    console.log('[[🔴 Find]]', diagnostic.messageText)
    if (diagnostic.file !== undefined) {
      console.log('  at: ', diagnostic.file.fileName)
    }
    console.log('\r')
  })

  if (allDiagnostics.length === 0) {
    console.log('[[🤗 Congraduations! No error found!]]')
    exit(0)
  }
}

export const check = (filepath: string): void => {
  const resolvedFilepath = resolve(cwd(), filepath)
  const allTypescriptFiles = allTypescriptFilesUnderDirectory(dirname(resolvedFilepath))
  console.log(JSON.stringify(allTypescriptFiles, null, 2))
  const program = ts.createProgram([resolvedFilepath, ...allTypescriptFiles], compilerOptions)
  const diagnostics = program.getSemanticDiagnostics()
  diagnostics.forEach((diagnostic) => {
    console.log('[[Find]]', diagnostic.messageText)
    if (diagnostic.file !== undefined) {
      console.log('  at: ', diagnostic.file.fileName)
    }
    console.log('\r')
  })
}
