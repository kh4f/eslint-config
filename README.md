# 🧹 ESLint Config

A shareable ESLint config that provides:
- strict, type-aware TypeScript rules
- stylistic rules (tabs, single quotes, `1tbs`, etc.)
- optional React and Next.js rules

## ⚙️ Setup

```bash
bun a -d @kh4f/eslint-config
```

```ts
// eslint.config.ts
import { defineConfig } from 'eslint/config'
import kh4f from '@kh4f/eslint-config'

export default defineConfig([
	await kh4f(), // a standard flat config array
])
// or just
export default await kh4f()
```

For framework-specific rules, install the corresponding ESLint plugins and enable them via options:


```bash
bun a -d @eslint-react/eslint-plugin eslint-plugin-react-hooks
bun a -d @next/eslint-plugin-next
```

```ts
await kh4f({
	react: true, // React rules
	next: true, // Next.js rules (implies `react`)
})
```