# Changelog

## &ensp; ` 🏷️ v0.4.3  `

### &emsp; 🩹 Fixes
- **Optional peer plugins are now actually declared**: `@eslint-react/eslint-plugin`, `@next/eslint-plugin-next` and `eslint-plugin-react-hooks` were only listed in `peerDependenciesMeta`, which npm ignores. They are now declared in `peerDependencies` with major-only ranges, so npm can verify version compatibility with the plugins consumers install. [🡥](https://github.com/kh4f/eslint-config/commit/34c4655)

##### &emsp;&emsp; [Commit log](https://github.com/kh4f/eslint-config/compare/v0.4.2...v0.4.3) &ensp;•&ensp; Aug 29, 2026

## &ensp; ` 🏷️ v0.4.2  `

### &emsp; 📋 Docs
- **Simplified usage examples**: the README now shows that the factory result can be exported directly without a `defineConfig` wrapper. [🡥](https://github.com/kh4f/eslint-config/commit/94c402a)

##### &emsp;&emsp; [Commit log](https://github.com/kh4f/eslint-config/compare/v0.4.1...v0.4.2) &ensp;•&ensp; Aug 29, 2026

## &ensp; ` 🏷️ v0.4.1  `

### &emsp; 🩹 Fixes
- **Fixed type-aware linting in multi-root workspaces**: the project service now receives an explicit `tsconfigRootDir`, resolving "was not found by the project service" and "multiple candidate TSConfigRootDirs" errors in editors when the config is used across several workspace roots. [🡥](https://github.com/kh4f/eslint-config/commit/b597406)

##### &emsp;&emsp; [Commit log](https://github.com/kh4f/eslint-config/compare/v0.4.0...v0.4.1) &ensp;•&ensp; Aug 29, 2026

## &ensp; ` 🏷️ v0.4.0  `

### &emsp; 📢 BREAKING CHANGES
- The config factory is now **async** because optional plugins are imported lazily. Update your `eslint.config.ts` to await it: `export default await kh4f()`. [🡥](https://github.com/kh4f/eslint-config/commit/84d438c)

### &emsp; 🎁 Features
- **Next.js build artifacts ignored by default**: `.next` and `next-env.d.ts` are now globally ignored alongside `dist`. [🡥](https://github.com/kh4f/eslint-config/commit/29694d8)

### &emsp; 🩹 Fixes
- **Optional plugins no longer crash on import**: `@eslint-react/eslint-plugin`, `eslint-plugin-react-hooks` and `@next/eslint-plugin-next` are imported dynamically only when the corresponding option is enabled, so projects without them lint fine. [🡥](https://github.com/kh4f/eslint-config/commit/84d438c)

##### &emsp;&emsp; [Commit log](https://github.com/kh4f/eslint-config/compare/v0.3.0...v0.4.0) &ensp;•&ensp; Aug 28, 2026

## &ensp; ` 🏷️ v0.3.0  `

### &emsp; 🎁 Features
- **Non-null assertions allowed**: the `@typescript-eslint/no-non-null-assertion` rule is now off, so non-null assertions no longer fail linting out of the box. [🡥](https://github.com/kh4f/eslint-config/commit/ed9cb07)

##### &emsp;&emsp; [Commit log](https://github.com/kh4f/eslint-config/compare/v0.2.0...v0.3.0) &ensp;•&ensp; Aug 28, 2026

## &ensp; ` 🏷️ v0.2.0  `

### &emsp; 📢 BREAKING CHANGES
- The default export is now a **factory function**, not a ready-made config array. Update your `eslint.config.ts` to call it, e.g. `export default kh4f()`. [🡥](https://github.com/kh4f/eslint-config/commit/1e81998)

### &emsp; 🎁 Features
- **Optional React and Next.js blocks**: enable framework-specific rules via `{ react: true }` / `{ next: true }` options; enabling `next` implies `react`. The plugin packages are optional peer dependencies. [🡥](https://github.com/kh4f/eslint-config/commit/1e81998)
- **All JS and TS file types linted by default**: the config now applies to `.js`, `.mjs`, `.cjs`, `.jsx`, `.ts`, `.mts`, `.cts` and `.tsx` files out of the box. [🡥](https://github.com/kh4f/eslint-config/commit/14b21a6)

### &emsp; 🩹 Fixes
- **Package entrypoint declared**: added missing `main` and `types` fields so consumers can resolve the module and its type declarations. [🡥](https://github.com/kh4f/eslint-config/commit/15bd466)

### &emsp; 📋 Docs
- **README with install and usage documentation**: describes included rule sets, installation steps, and examples for enabling React/Next.js blocks. [🡥](https://github.com/kh4f/eslint-config/commit/69be7e8)

### &emsp; 🎨 Style
- **Cleaner config block names**: removed the redundant "Rules" suffix from config names shown in the config inspector. [🡥](https://github.com/kh4f/eslint-config/commit/cb4d535)

##### &emsp;&emsp; [Commit log](https://github.com/kh4f/eslint-config/compare/v0.1.0...v0.2.0) &ensp;•&ensp; Aug 27, 2026

## &ensp; ` 🏷️ v0.1.0  `

### &emsp; 🎁 Features
- **Initial shareable ESLint flat config**: exported a flat config extending `@eslint/js` recommended, `typescript-eslint` strict and stylistic type-checked presets, and `@stylistic` recommended. [🡥](https://github.com/kh4f/eslint-config/commit/34fa57e)

##### &emsp;&emsp; [Commit log](https://github.com/kh4f/eslint-config/commits/v0.1.0) &ensp;•&ensp; Aug 26, 2026