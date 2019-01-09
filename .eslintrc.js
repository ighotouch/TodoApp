module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:flowtype/recommended',
    'prettier/flowtype',
  ],
  plugins: ['flowtype'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': [
      2,
      {
        bracketSpacing: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react/jsx-filename-extension': 'off',
    'no-plusplus': 'off',
  },
  env: {
    jest: true,
  },
};
