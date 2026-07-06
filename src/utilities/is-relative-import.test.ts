import { describe, expect, it } from 'vitest';

import { isRelativeImport } from '#dilatorily/oxlint-plugin-alias/utilities/is-relative-import';

describe('isRelativeImport', () => {
  it.each`
    path                | expected
    ${'.'}              | ${true}
    ${'..'}             | ${true}
    ${'./foo'}          | ${true}
    ${'../bar'}         | ${true}
    ${'/absolute/path'} | ${false}
    ${'foo'}            | ${false}
  `('returns $expected for $path', ({ expected, path }) => {
    const results = isRelativeImport(path);

    expect(results).toBe(expected);
  });
});
