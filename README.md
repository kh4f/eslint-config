# 🧹 ESLint Config

A shareable ESLint config that provides:
- strict, type-aware TypeScript rules
- stylistic rules (tabs, single quotes, `1tbs`, etc.)
- optional React and Next.js rules

## 📥 Install

```bash
bun a -d eslint @kh4f/eslint-config
```

React and Next.js ESLint plugins are only required if you enable the corresponding options:

```bash
bun a -d @eslint-react/eslint-plugin eslint-plugin-react-hooks
bun a -d @next/eslint-plugin-next
```

## 🕹️ Usage

```ts
// eslint.config.ts
import { defineConfig } from 'eslint/config'
import kh4f from '@kh4f/eslint-config'

export default defineConfig([
	await kh4f(), // a standard flat config array
])
```

Enable framework-specific rules via options:

```ts
export default defineConfig([
	await kh4f({
		react: true, // React rules
		next: true, // Next.js rules (implies `react`)
	}),
])
```