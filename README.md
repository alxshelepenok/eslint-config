# eslint-config 

[![circleci][1]][2]

Shared eslint config for my projects.

## Install

```
npm install @alxshelepenok/eslint-config --dev
```

## Example

```json
{
  "extends": [
    "prettier",
    "airbnb-typescript",
    "plugin:import/errors",
    "plugin:import/typescript",
    "@alxshelepenok/eslint-config"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": [
    "import",
    "react",
    "@typescript-eslint",
    "simple-import-sort"
  ],
  "rules": {
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/test.ts",
          "**/*.test.ts",
          "**/test.tsx",
          "**/tests.tsx",
          "config/**/*",
          "*.config.js"
        ]
      }
    ],
    "import/no-internal-modules": [0],
    "import/no-named-as-default": [0],
    "import/order": [0],
    "import/prefer-default-export": [0],
    "react/prop-types": [0],
    "sort-imports": [0],
    "no-underscore-dangle": [0],
    "sort-keys": [0],
    "no-prototype-builtins": [0],
    "jsx-a11y/click-events-have-key-events": [0],
    "react/no-did-update-set-state": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "@typescript-eslint/no-use-before-define": [0],
    "no-useless-escape": [0],
    "jsx-a11y/no-noninteractive-element-interactions": [0],
    "react/no-array-index-key": [0],
    "no-empty-pattern": [0],
    "no-restricted-globals": [0],
    "@typescript-eslint/no-unused-vars": [0],
    "@typescript-eslint/quotes": ["error", "double"],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": ["Link"],
        "specialLink": ["href", "to"],
        "aspects": ["invalidHref", "preferButton"]
      }
    ],
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          ["^\\u0000"],
          ["^@?\\w"],
          ["^[^. ]"],
          [
            "^(@providers|@components|@containers|@constants|@pages|@utils|@hooks|@images|@scss)(/.*|$)"
          ],
          ["^\\."],
          ["^(images|!!raw-loader)"],
          ["w*(w*.*css)"]
        ]
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}

```

[1]: https://circleci.com/gh/alxshelepenok/eslint-config.svg?style=svg
[2]: https://circleci.com/gh/alxshelepenok/eslint-config
