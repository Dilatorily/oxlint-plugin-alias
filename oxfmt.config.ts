import type { OxfmtConfig } from 'oxfmt';

export default {
  singleQuote: true,
  sortImports: {
    groups: [
      'builtin',
      'external',
      ['internal', 'subpath', 'parent', 'sibling', 'index'],
      'type',
      'side_effect',
      'unknown',
    ],
  },
  sortPackageJson: { sortScripts: true },
} satisfies OxfmtConfig;
