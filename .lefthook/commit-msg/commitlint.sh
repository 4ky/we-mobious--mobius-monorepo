echo $(head -n1 $1) | npx commitlint --color
#!/usr/bin/env sh
# . "$(dirname -- "$0")/_/husky.sh"

# pnpm exec commitlint --edit ${1}
