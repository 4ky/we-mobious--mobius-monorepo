# Type Check

## Getting Started

Install as development dependencies:

```sh
pnpm add -D @we-mobius/type-check
```

Create a script named `type-check.{ts|js}` for example, and put it in some folder like `scripts` in your project root directory, with the following content:

```typescript
import { resolve } from 'node:path'
import { cwd } from 'node:process'

import { checkFile } from '../src/index'

checkFile(resolve(cwd(), './src/index.ts'))
```

Add the corresponding `type-check` script to your `package.json`, here I use TypeScript to write my type-check script and run it with `tsx`, so my script in `package.json` seems:

```json
{
  "scripts": {
    "type-check": "pnpm exec tsx ./scripts/type-check.ts"
  }
}
```

Done, here we go, run `pnpm exec type-check` to check your types.

## References

- Built with [TypeScript](https://www.typescriptlang.org/).
