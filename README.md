# 🧹 kh4f's ESLint Config

<a href="https://www.npmjs.com/package/@kh4f/eslint-config"><img src="https://img.shields.io/npm/v/@kh4f/eslint-config?style=flat-square&labelColor=6600F5&color=E2CFFC&label=npm&logo=npm"/></a>&nbsp;
<a href="https://www.npmjs.com/package/@kh4f/eslint-config"><img src="https://img.shields.io/npm/dy/@kh4f/eslint-config?style=flat-square&labelColor=6600F5&color=E2CFFC&label=%F0%9F%93%A5%20downloads"/></a>&nbsp;
<a href="https://eslint.org/"><img src="https://img.shields.io/badge/ESLint-%5E10.0.0-000000?logo=eslint&style=flat-square&labelColor=6600F5&color=E2CFFC"/></a>

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