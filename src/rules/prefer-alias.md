# prefer-alias

Enforce the use of import aliases instead of relative imports.

## Description

This rule identifies relative imports that can be replaced by a configured alias. This helps in maintaining a cleaner and more consistent project structure, especially in large codebases where deep relative paths (e.g., `../../../../utils/helper`) can be difficult to read and maintain.

## Options

The rule accepts an `alias` object that maps relative paths to their corresponding aliases.

```json
{
  "alias": {
    "@": "./src",
    "utils": "./src/utils"
  }
}
```

## Examples

### Valid

```typescript
// Already using an alias
import { Button } from "@/components/Button";

// Importing from a non-relative path (package or alias)
import { someFunction } from "some-package";
import { helper } from "utils";
```

### Invalid

```typescript
// Should be replaced with @ alias
import { Button } from "./components/Button";

// Should be replaced with utils alias
import { helper } from "../utils/helper";
```

## Fixes

The rule provides an automatic fix to replace the relative import path with the corresponding alias.

```typescript
// Original
import { helper } from "../utils/helper";

// Fixed
import { helper } from "utils";
```
