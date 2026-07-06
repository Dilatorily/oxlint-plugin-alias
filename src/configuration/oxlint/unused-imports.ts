import type { OxlintConfig } from 'oxlint';

// unused-imports from eslint-plugin-unused-imports@4.4.1
export default {
  categories: { correctness: 'off' },
  env: { builtin: true },
  jsPlugins: ['eslint-plugin-unused-imports'],
  plugins: ['eslint'],
  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' },
    ],
  },
} satisfies OxlintConfig;
