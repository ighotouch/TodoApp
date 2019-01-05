module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:flowtype/recommended',
    'prettier/flowtype',
  ],
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
  },
};
