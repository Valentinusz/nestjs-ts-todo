import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig(
  globalIgnores(['dist', 'generated']),
  {
    extends: [
      eslint.configs.recommended,
    ]
  },
  {
    files: ['**/*.{ts,mts}'],
    extends: [
      tseslint.configs.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      // already handled by typescript (TS2300, TS2323)
      'import/export': 'off',
      // already handled by typescript (TS1192)
      'import/default': 'off',
      // already handled by typescript (TS2614)
      'import/named': 'off',
      // already handled by typescript (TS2307)
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'error',
      'import/extensions': ['error', 'never'],
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: import.meta.resolve('./tsconfig.json'),
        },
      },
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
