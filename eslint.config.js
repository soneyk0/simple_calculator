import js from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
export default [
  {
    files: ['**/*.js']
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  prettierRecommended,
  {
    rules: {
      'no-console': 'warn',
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'avoid',
          printWidth: 120,
          semi: true,
          singleQuote: true,
          trailingComma: 'none'
        }
      ]
    }
  }
];
