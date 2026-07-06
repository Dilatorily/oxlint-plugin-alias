import { describe, expect, it } from 'vitest';

import { isRecordOfStrings } from '#dilatorily/oxlint-plugin-alias/utilities/is-record-of-strings';

describe('isRecordOfStrings', () => {
  it('returns true for a valid record of strings', () => {
    expect(isRecordOfStrings({ a: 'foo', b: 'bar' })).toBe(true);
  });

  it('returns false for a record containing non-string values', () => {
    expect(isRecordOfStrings({ a: 'foo', b: 123 })).toBe(false);
  });

  it('returns false for an array', () => {
    expect(isRecordOfStrings(['a', 'b'])).toBe(false);
  });

  it('returns false for null', () => {
    expect(isRecordOfStrings(null)).toBe(false);
  });

  it('returns false for a non-object', () => {
    expect(isRecordOfStrings('string')).toBe(false);
  });
});
