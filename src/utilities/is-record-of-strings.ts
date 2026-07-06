export const isRecordOfStrings = (value: unknown): value is Record<string, string> => {
  if (typeof value !== 'object' || !value || Array.isArray(value)) {
    return false;
  }

  return Object.values(value).every((v) => typeof v === 'string');
};
