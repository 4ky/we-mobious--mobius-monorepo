#!/usr/bin/env node
// @see https://github.com/commitizen/cz-cli#commitizen-for-multi-repo-projects
"use strict";

const path = require('path');
const bootstrap = require('commitizen/dist/cli/git-cz').bootstrap;

bootstrap({
  cliPath: path.resolve(__filename, '../../node_modules/commitizen'),
  config: {
    "path": "@we-mobius/commitizen/adapter"
  }
});
