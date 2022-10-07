module.exports = {
  "extends": ["@we-mobius/eslint-config-basic"],
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "overrides": [
    {
      "files": [
        "*.js",
        "*.mjs"
      ],
      "extends": [
        "eslint:recommended",
        "standard"
      ],
      "plugins": [],
      "parser": "espree",
      "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.eslint.json"
      }
    },
    {
      "files": [
        "*.ts",
        "*.d.ts"
      ],
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "standard-with-typescript"
      ],
      "ecmaFeatures": {
        "jsx": false
      },
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.eslint.json"
      },
      "plugins": [
        "@typescript-eslint/eslint-plugin"
      ],
      "rules": {
        "@typescript-eslint/no-non-null-assertion": [
          "off"
        ],
        "@typescript-eslint/unified-signatures": [
          "off"
        ],
        "@typescript-eslint/no-unsafe-assignment": [
          "off"
        ],
        "dot-notation": [
          "off"
        ]
      }
    }
  ],
  "plugins": [
    "@nrwl/nx"
  ],
  "rules": {
    "@nrwl/nx/enforce-module-boundaries": [
      "error",
      {
        "allow": [],
        "enforceBuildableLibDependency": false,
        "banTransitiveDependencies": true,
        "depConstraints": [
          {
            "sourceTag": "*",
            "onlyDependOnLibsWithTags": [
              "*"
            ]
          },
          {
            "sourceTag": "type:util",
            "onlyDependOnLibsWithTags": [
              "type:util"
            ]
          },
          {
            "sourceTag": "type:feature",
            "onlyDependOnLibsWithTags": [
              "type:util",
              "type:feature"
            ]
          },
          {
            "sourceTag": "type:application",
            "onlyDependOnLibsWithTags": [
              "type:util",
              "type:feature"
            ]
          },
          {
            "sourceTag": "scope:package-harvester-part",
            "onlyDependOnLibsWithTags": [
              "scope:package-harvester-part"
            ]
          },
          {
            "sourceTag": "scope:package-harvester",
            "onlyDependOnLibsWithTags": [
              "scope:package-harvester-part", "scope:package-data-model"
            ]
          },
          {
            "sourceTag": "scope:package-harvester-deployer",
            "onlyDependOnLibsWithTags": [
              "scope:package-harvester-part"
            ]
          },
          {
            "sourceTag": "scope:package-harvester-executor",
            "onlyDependOnLibsWithTags": [
              "scope:package-harvester-part"
            ]
          },
          {
            "sourceTag": "scope:package-data-model",
            "onlyDependOnLibsWithTags": [
              "scope:package-data-model"
            ]
          },
          {
            "sourceTag": "scope:package-data-manager",
            "onlyDependOnLibsWithTags": [
              "scope:package-data-model", "scope:package-data-manager"
            ]
          },
          {
            "sourceTag": "scope:package-data-extractor",
            "onlyDependOnLibsWithTags": [
              "scope:package-data-manager"
            ]
          },
          {
            "sourceTag": "scope:package-data-transformer",
            "onlyDependOnLibsWithTags": [
              "scope:package-data-transformer"
            ]
          }
        ]
      }
    ]
  }
}
