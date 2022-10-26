module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    camelcase: 0,
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'func-names': ['error', 'never'],
    'lines-between-class-members': 0,
    'max-len': 0,
    'no-console': 0,
    'no-nested-ternary': 1,
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 0,
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'object-curly-newline': [0],
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    'prefer-destructuring': ['error', {
      array: false,
      object: false,
    }],
  },
}
