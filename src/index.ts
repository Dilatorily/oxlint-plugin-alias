import { eslintCompatPlugin } from '@oxlint/plugins';

import { preferAlias } from '#dilatorily/oxlint-plugin-alias/rules/prefer-alias';
import pkg from '../package.json' with { type: 'json' };

import type { Plugin } from '@oxlint/plugins';

const plugin: Plugin = eslintCompatPlugin({
  meta: { name: pkg.name },
  rules: { 'prefer-alias': preferAlias },
});
export default plugin;
