# Development Guide

## Prerequisites

- [Node.js](https://nodejs.org/) v16.13.0 or higher
- [git](https://git-scm.com/)
- [pnpm](https://pnpm.io/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Installation

Pull origin repository to local, enter project directory, and install dependencies:

```sh
git clone git@github.com:organization-name/project-name.git
cd project-name
pnpm install
```

Open the project directory with Visual Studio Code, and install recommended extensions.

## Common Commands

Build all packages:

```sh
pnpm run build:all
```

View the dependency graph of all packages:

```sh
pnpm run graph:all
```

Check the format of all code:

```sh
pnpm run lint
```

Check and fix the format of all code as possible:

```sh
pnpm run lint:fix
```

Type check all code of projects:

```sh
pnpm run type-check
```

Write commit messages and commit with the prompt:

```sh
pnpm run cz
```
