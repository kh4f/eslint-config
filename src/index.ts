import { defineConfig, globalIgnores } from 'eslint/config'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
	globalIgnores(['**/dist']),
	{
		name: 'TypeScript Rules',
		extends: [
			js.configs.recommended,
			ts.configs.strictTypeChecked,
			ts.configs.stylisticTypeChecked,
		],
		languageOptions: { parserOptions: { projectService: true } },
		rules: {
			'@typescript-eslint/restrict-template-expressions': 'off',
			'@typescript-eslint/no-confusing-void-expression': 'off',
		},
	},
	{
		name: 'Stylistic Rules',
		extends: [stylistic.configs.recommended],
		rules: {
			'@stylistic/no-tabs': 'off',
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/indent-binary-ops': ['error', 'tab'],
			'@stylistic/brace-style': ['error', '1tbs'],
			'@stylistic/arrow-parens': ['error', 'as-needed'],
			'@stylistic/eol-last': ['error', 'never'],
		},
	},
])