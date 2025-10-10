import js from '@eslint/js';
import html from 'eslint-plugin-html';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    plugins: {
      html,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        alert: 'readonly',
        prompt: 'readonly',
        CustomEvent: 'readonly',
        // Firebase globals
        firebase: 'readonly',
        auth: 'readonly',
        db: 'readonly',
        // App functions
        closeAuthModal: 'readonly',
        showSignupForm: 'readonly',
        showLoginForm: 'readonly',
        signInWithEmail: 'readonly',
        signUpWithEmail: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-undef': 'warn',
    },
  },
  {
    ignores: [
      'node_modules/',
      '.firebase/',
      'public/firebase-config.js',
    ],
  },
];
