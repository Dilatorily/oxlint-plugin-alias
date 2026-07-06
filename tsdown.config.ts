import type { UserConfig } from 'tsdown';

export default {
  attw: { enabled: 'ci-only', profile: 'esm-only' },
  entry: ['./src/index.ts'],
  exports: { legacy: false },
  fixedExtension: false,
  minify: true,
  outDir: 'lib',
  publint: 'ci-only',
  tsconfig: 'tsconfig.build.json',
} satisfies UserConfig;
