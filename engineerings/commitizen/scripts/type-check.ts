import { resolve } from 'node:path'
import { cwd } from 'node:process'

import { checkFile } from '@we-mobius/type-check'

checkFile(resolve(cwd(), './src/index.ts'))
