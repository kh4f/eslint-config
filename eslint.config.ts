import { defineConfig } from 'eslint/config'
import kh4f from './src'

export default defineConfig([
	await kh4f(),
	{ languageOptions: { parserOptions: { tsconfigRootDir: import.meta.dirname } } },
])