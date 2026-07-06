import { createRuleTester } from 'eslint-vitest-rule-tester';
import { describe, expect, it } from 'vitest';

import { preferAlias } from '#dilatorily/oxlint-plugin-alias/rules/prefer-alias';

describe('preferAlias', () => {
  const { valid, invalid } = createRuleTester({
    name: 'prefer-alias',
    rule: { ...preferAlias, create: preferAlias.createOnce },
  });

  it('does not lint with existing aliases', async () => {
    const { result } = await valid({
      code: 'import { foo } from "@/components/Button"',
      options: [{ alias: { '@': './src' } }],
    });

    expect(result.output).toMatchInlineSnapshot(`"import { foo } from "@/components/Button""`);
  });

  it('does not lint with other packages', async () => {
    const { result } = await valid({
      code: 'import { foo } from "some-package"',
      options: [{ alias: { '@': './src' } }],
    });

    expect(result.output).toMatchInlineSnapshot(`"import { foo } from "some-package""`);
  });

  it('does not lint with unconfigured relative imports', async () => {
    const { result } = await valid({
      code: 'import { foo } from "./dist/foo"',
      options: [{ alias: { '@': './src' } }],
    });

    expect(result.output).toMatchInlineSnapshot(`"import { foo } from "./dist/foo""`);
  });

  it('lints configured relative imports', async () => {
    const { result } = await invalid({
      code: 'import { foo } from "./src/components/Button"',
      errors: ['import'],
      options: [{ alias: { '@': './src' } }],
    });

    expect(result.output).toMatchInlineSnapshot(`"import { foo } from "@/components/Button""`);
  });
});
