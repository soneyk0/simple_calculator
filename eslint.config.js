import js from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.js']
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser
    },
    plugins: {
      prettier
    }
  },
  prettierRecommended,
  {
    rules: {
      'no-console': 'warn',
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'avoid',
          printWidth: 120,
          singleQuote: true,
          trailingComma: 'none'
        }
      ]
    }
  }
];
