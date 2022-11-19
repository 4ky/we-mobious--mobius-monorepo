import { resolve } from 'node:path'
import { cwd } from 'node:process'

import { checkFile } from '../src/index'

checkFile(resolve(cwd(), './test/____main.target.ts'))
