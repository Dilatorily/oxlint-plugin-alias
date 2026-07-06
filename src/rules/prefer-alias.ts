import { dirname, resolve } from 'node:path';

import { isRecordOfStrings } from '#dilatorily/oxlint-plugin-alias/utilities/is-record-of-strings';
import { isRelativeImport } from '#dilatorily/oxlint-plugin-alias/utilities/is-relative-import';

import type { CreateOnceRule } from '@oxlint/plugins';

export const preferAlias: CreateOnceRule = {
  createOnce: (context) => ({
    ImportDeclaration: (node) => {
      const options = context.options[0] ?? {};
      const aliases: Record<string, string> = {};
      if (
        typeof options === 'object' &&
        !Array.isArray(options) &&
        isRecordOfStrings(options.alias)
      ) {
        Object.entries(options.alias).forEach(([alias, relativePath]) => {
          aliases[alias] = resolve(context.cwd, relativePath);
        });
      }

      if (Object.keys(aliases).length <= 0) {
        throw new Error('No aliases are configured.');
      }

      if (!isRelativeImport(node.source.value)) {
        return;
      }

      const absoluteImport = resolve(dirname(context.filename), node.source.value);
      const aliasEntry = Object.entries(aliases).find(([_, absolutePath]) =>
        absoluteImport.startsWith(absolutePath),
      );
      if (!aliasEntry) {
        return;
      }

      const replacedImport = absoluteImport.replace(aliasEntry[1], aliasEntry[0]);
      context.report({
        data: { newPath: replacedImport, path: node.source.value },
        fix: (fixer) =>
          fixer.replaceTextRange(
            [node.source.range[0] + 1, node.source.range[1] - 1],
            replacedImport,
          ),
        messageId: 'import',
        node,
      });
    },
  }),
  meta: {
    defaultOptions: [{ alias: {} }],
    docs: {
      description: 'Enforce imports aliases instead of relative imports',
      url: 'https://github.com/Dilatorily/oxlint-plugin-alias/blob/main/src/rules/prefer-alias.md',
    },
    fixable: 'code' as const,
    messages: { import: 'Unexpected import {{path}}. Use {{newPath}} instead' },
    schema: [
      {
        additionalProperties: false,
        properties: {
          alias: {
            description: 'Map of relative paths with their corresponding aliases',
            type: 'object',
          },
        },
        type: 'object',
      },
    ],
    type: 'suggestion' as const,
  },
};
