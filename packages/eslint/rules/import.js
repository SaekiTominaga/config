// @ts-check
/* eslint-disable jsdoc/lines-before-block */

/** @type {import("eslint").Linter.FlatConfig} */
export default {
	rules: {
		/**
		 * Helpful warnings
		 */
		/* ✅ import/export */
		/* import/no-deprecated TODO: parserPath or languageOptions.parser is required! */
		'import/no-empty-named-blocks': 'error',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: false,
				optionalDependencies: false,
				peerDependencies: false,
				bundledDependencies: false,
			},
		],
		'import/no-mutable-exports': 'error',
		'import/no-named-as-default': 'off', // ✅ TODO: parserPath or languageOptions.parser is required! / 有効にする際は *.test.js での無効化を検討
		'import/no-named-as-default-member': 'off', // ✅ TODO: parserPath or languageOptions.parser is required! / 有効にする際は *.test.js での無効化を検討
		/* import/no-unused-modules */

		/**
		 * Module systems
		 */
		/* import/no-amd */
		/* import/no-commonjs */
		/* import/no-import-module-exports */
		/* import/no-nodejs-modules */
		/* import/unambiguous */

		/**
		 * Static analysis
		 */
		'import/default': 'off', // ✅ TODO: parserPath or languageOptions.parser is required!
		/* ✅ import/named */
		'import/namespace': 'off', // ✅ TODO: parserPath or languageOptions.parser is required!
		'import/no-absolute-path': 'error',
		/* import/no-cycle ⚠ This rule is comparatively computationally expensive */
		/* import/no-dynamic-require */
		/* import/no-internal-modules */
		/* import/no-relative-packages */
		/* import/no-relative-parent-imports */
		/* import/no-restricted-paths */
		'import/no-self-import': 'error',
		/* ✅ import/no-unresolved */
		'import/no-useless-path-segments': 'error',
		'import/no-webpack-loader-syntax': 'error',

		/**
		 * Style guide
		 */
		/* import/consistent-type-specifier-style */
		/* import/dynamic-import-chunkname */
		/* import/exports-last */
		'import/extensions': ['error', 'ignorePackages'],
		'import/first': 'error',
		/* import/group-exports */
		/* import/max-dependencies */
		'import/newline-after-import': 'error',
		/* import/no-anonymous-default-export */
		/* import/no-default-export */
		/* ✅ import/no-duplicates */
		'import/no-named-default': 'error',
		/* import/no-named-export */
		/* import/no-namespace */
		'import/no-unassigned-import': 'error',
		'import/order': 'error',
		'import/prefer-default-export': 'error',
	},
};
