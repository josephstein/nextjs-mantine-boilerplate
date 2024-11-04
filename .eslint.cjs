module.exports = {
  extends: [
    'mantine',
    'plugin:@next/next/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['testing-library', 'jest', 'react-hooks'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    indent: ['off'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/no-unescaped-entities': 'off',
    'react/jsx-key': 'error',

    'import/order': ['off'],
    'no-plusplus': ['off'],
    'no-use-before-define': ['error'],
    'no-void': ['error', { allowAsStatement: true }],

    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-floating-promises': 'error',

    // 'import/order': [
    //   'error',
    //   {
    //     groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin'],
    //   },
    // ],
  },
};
