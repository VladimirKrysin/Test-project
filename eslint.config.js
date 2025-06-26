import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintReact, { rules } from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import i18next from 'eslint-plugin-i18next';

export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ['dist', 'node_modules', 'eslint.config.js'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
  },
  i18next.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prefer-const': 'error',
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
      'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'i18next/no-literal-string': [
        'warn',
        { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
      ],
      'max-lines': ['warn', { max: 124 }],
      'max-params': ['error', 3],
    },
  },
  {
    overrides: [
      {
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
          'i18next/no-literal-string': 'off',
        },
      },
    ],
  },
);
