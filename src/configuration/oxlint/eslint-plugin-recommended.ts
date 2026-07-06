import type { OxlintConfig } from 'oxlint';

// eslint-plugin/recommended from eslint-plugin-eslint-plugin@7.4.1
export default {
  categories: { correctness: 'off' },
  env: { builtin: true },
  jsPlugins: ['eslint-plugin-eslint-plugin'],
  plugins: [],
  rules: {
    'eslint-plugin/fixer-return': 'error',
    'eslint-plugin/no-deprecated-context-methods': 'error',
    'eslint-plugin/no-deprecated-report-api': 'error',
    'eslint-plugin/no-identical-tests': 'error',
    'eslint-plugin/no-meta-replaced-by': 'error',
    'eslint-plugin/no-meta-schema-default': 'error',
    'eslint-plugin/no-missing-message-ids': 'error',
    'eslint-plugin/no-missing-placeholders': 'error',
    'eslint-plugin/no-only-tests': 'error',
    'eslint-plugin/no-unused-message-ids': 'error',
    'eslint-plugin/no-unused-placeholders': 'error',
    'eslint-plugin/no-useless-token-range': 'error',
    'eslint-plugin/prefer-message-ids': 'error',
    'eslint-plugin/prefer-object-rule': 'error',
    'eslint-plugin/prefer-output-null': 'error',
    'eslint-plugin/require-meta-default-options': 'error',
    'eslint-plugin/require-meta-fixable': 'error',
    'eslint-plugin/require-meta-has-suggestions': 'error',
    'eslint-plugin/require-meta-schema': 'error',
    'eslint-plugin/require-meta-schema-description': 'error',
    'eslint-plugin/require-meta-type': 'error',
  },
} satisfies OxlintConfig;
