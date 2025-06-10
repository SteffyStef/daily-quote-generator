// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact, // ✅ plugin object, not string
    },
    rules: {
      // ✅ Modern JSX support — no need to import React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': 'warn',
      'react/prop-types': 'off', // Optional: turn off if not using prop-types
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
