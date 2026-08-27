import { defineConfig, globalIgnores } from 'eslint/config'
import type { ConfigWithExtends } from '@eslint/config-helpers'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import react from '@eslint-react/eslint-plugin'
import hooks from 'eslint-plugin-react-hooks'
import next from '@next/eslint-plugin-next'

interface Options {
	/** Enable React rules */
	react?: boolean
	/** Enable Next.js rules (implies `react: true`) */
	next?: boolean
}

export default function kh4f(opts: Options = {}) {
	const reactCfg: ConfigWithExtends[] = [
		{
			name: 'React',
			extends: [react.configs['recommended-type-checked'], hooks.configs.flat.recommended],
		},
		{
			name: 'Stylistic > JSX',
			rules: {
				'@stylistic/jsx-indent-props': ['error', 'tab'],
				'@stylistic/jsx-one-expression-per-line': 'off',
				'@stylistic/jsx-tag-spacing': ['error', { beforeClosing: 'never', beforeSelfClosing: 'never' }],
				'@stylistic/jsx-wrap-multilines': 'off',
				'@stylistic/jsx-closing-tag-location': 'off',
				'@stylistic/jsx-closing-bracket-location': 'off',
				'@stylistic/jsx-quotes': ['error', 'prefer-single'],
				'@stylistic/jsx-first-prop-new-line': 'off',
			},
		},
	]

	const nextCfg: ConfigWithExtends[] = [{
		name: 'Next',
		extends: [next.configs.recommended, next.configs['core-web-vitals']],
	}]

	return defineConfig([
		globalIgnores(['**/dist']),
		{
			name: 'TypeScript',
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
			name: 'Stylistic',
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
		...(opts.react || opts.next ? reactCfg : []),
		...(opts.next ? nextCfg : []),
	])
}