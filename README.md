# @dilatorily/oxlint-plugin-alias

An Oxlint plugin that autofixes and enforces the use of import aliases instead of relative imports.

## Description

This plugin provides the `prefer-alias` rule, which helps maintain a clean and consistent project structure by replacing deep relative imports (e.g., `../../utils/helper`) with pre-configured aliases (e.g., `utils/helper`). It supports automatic fixes to streamline the transition to an alias-based import system.

## Installation

Install the plugin via npm:

```bash
npm install --save-dev @dilatorily/oxlint-plugin-alias
```

## Usage

Add the plugin to your Oxlint configuration:

```json
{
  "jsPlugins": [{ "name": "@dilatorily/oxlint-plugin-alias", "specifier": "alias" }],
  "rules": {
    "alias/prefer-alias": ["error", {
      "alias": {
        "@": "./src",
        "@utils": "./src/utils"
      }
    }]
  }
}
```

## Examples

### Valid

```typescript
import { Button } from '@/components/Button';
import { someFunction } from 'some-package';
```

### Invalid (Autofixable)

```typescript
// Original
import { helper } from '../utils/helper';

// Fixed
import { helper } from '@utils';
```

## Contribute

Contributions are welcome! Please see the [GitHub issues](https://github.com/Dilatorily/oxlint-plugin-alias/issues) or submit a [pull request](https://github.com/Dilatorily/oxlint-plugin-alias/pulls).

## License

[MIT License](LICENSE)
