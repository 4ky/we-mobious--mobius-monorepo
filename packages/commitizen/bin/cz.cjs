#!/usr/bin/env node
// @see https://github.com/commitizen/cz-cli#commitizen-for-multi-repo-projects
'use strict'

const fs = require('fs')
const path = require('path')

const bootstrap = require('commitizen/dist/cli/git-cz').bootstrap

const findCommitizenPathUpwards = (() => {
  const checkedPaths = new Set()
  const internalFindCommitizenPathUpwards = (startPath) => {
    if (checkedPaths.has(startPath)) {
      return internalFindCommitizenPathUpwards(path.resolve(startPath, '..'))
    }

    if (!fs.existsSync(startPath)) {
      return internalFindCommitizenPathUpwards(path.resolve(startPath, '..'))
    }

    if (fs.statSync(startPath).isFile()) {
      return internalFindCommitizenPathUpwards(path.dirname(startPath))
    }

    const packageJsonPath = path.resolve(startPath, 'package.json')

    if (!fs.existsSync(packageJsonPath)) {
      checkedPaths.add(startPath)
      return internalFindCommitizenPathUpwards(path.resolve(startPath, '../node_modules/commitizen'))
    }

    const packageJSON = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
    const packageName = packageJSON.name
    if (packageName === 'commitizen') {
      return startPath
    } else {
      checkedPaths.add(startPath)
      return internalFindCommitizenPathUpwards(path.resolve(startPath, '../node_modules/commitizen'))
    }
  }

  return internalFindCommitizenPathUpwards
})()

bootstrap({
  // cliPath: path.resolve(__filename, '../../node_modules/commitizen'),
  cliPath: findCommitizenPathUpwards(__filename),
  config: {
    path: '@we-mobius/commitizen/adapter'
  }
})
