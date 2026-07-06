import type { Configuration } from 'lint-staged';

export default {
  '*.ts': 'npm run format -- --no-error-on-unmatched-pattern && npm run lint -- --fix',
} satisfies Configuration;
