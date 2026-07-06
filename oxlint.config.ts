import eslintPluginRecommended from '#dilatorily/oxlint-plugin-alias/configuration/oxlint/eslint-plugin-recommended';
import eslintRecommended from '#dilatorily/oxlint-plugin-alias/configuration/oxlint/eslint-recommended';
import perfectionistRecommendedNatural from '#dilatorily/oxlint-plugin-alias/configuration/oxlint/perfectionist-recommended-natural';
import typescriptEslintStrictTypeChecked from '#dilatorily/oxlint-plugin-alias/configuration/oxlint/typescript-eslint-strict-type-checked';
import typescriptEslintStylisticTypeChecked from '#dilatorily/oxlint-plugin-alias/configuration/oxlint/typescript-eslint-stylistic-type-checked';
import unusedImports from '#dilatorily/oxlint-plugin-alias/configuration/oxlint/unused-imports';
import vitestRecommended from '#dilatorily/oxlint-plugin-alias/configuration/oxlint/vitest-recommended';

import type { OxlintConfig } from 'oxlint';

export default {
  extends: [
    eslintRecommended,
    typescriptEslintStrictTypeChecked,
    typescriptEslintStylisticTypeChecked,
    perfectionistRecommendedNatural,
    unusedImports,
    eslintPluginRecommended,
    vitestRecommended,
  ],
  jsPlugins: [{ name: 'alias', specifier: './src/index.ts' }],
  options: { typeAware: true, typeCheck: true },
  plugins: ['import'],
  rules: {
    'alias/prefer-alias': ['error', { alias: { '#dilatorily/oxlint-plugin-alias': './src' } }],
    'import/newline-after-import': 'error',
  },
} satisfies OxlintConfig;
