module.exports = {
  env: {
    'browser': true, // Browser environment
    'es6': true, // Enable ES6 features
    'node': true,
    'jest/globals': true, // Jest globals
  },
  extends: [
    'eslint:recommended', // ESLint recommended rules
    'plugin:react/recommended', // React plugin recommended rules
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable JSX syntax
    },
    ecmaVersion: 2018, // Support ES2018 syntax
    sourceType: 'module', // Use ES modules
  },
  plugins: [
    'react', // React plugin
    'jest', // Jest plugin
  ],
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
  rules: {
    'indent': ['error', 2], // Enforce 2-space indentation
    'linebreak-style': ['error', 'unix'], // Enforce Unix-style linebreaks
    'quotes': ['error', 'single'], // Enforce single quotes
    'semi': ['error', 'always'], // Require semicolons
    'eqeqeq': 'error', // Enforce strict equality
    'no-trailing-spaces': 'error', // Disallow trailing spaces
    'object-curly-spacing': ['error', 'always'], // Require spacing inside curly braces
    'arrow-spacing': ['error', { before: true, after: true }], // Enforce arrow function spacing
    'no-console': 'error', // Disallow console statements
    'react/prop-types': 0, // Disable React prop-types rule
  },
  ignorePatterns: [
    'dist/**', // Ignore the dist folder
  ],
};
