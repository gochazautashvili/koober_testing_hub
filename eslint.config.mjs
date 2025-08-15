import reactCompiler from 'eslint-plugin-react-compiler'
import pluginQuery from '@tanstack/eslint-plugin-query'
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import { dirname } from "path";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  allConfig: js.configs.all,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  // Ignores should be first and in its own object
  {
    ignores: [
      '**/next-env.d.ts',
      '**/.next/**',
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**'
    ],
  },
  // Main config with Next.js and TypeScript rules
  ...compat.config({
    extends: [
      'eslint:recommended',
      'next',
      'next/core-web-vitals',
      'next/typescript',
      'prettier'
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "args": "all",
          "argsIgnorePattern": "^_",
          "caughtErrors": "all",
          "caughtErrorsIgnorePattern": "^_",
          "destructuredArrayIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "ignoreRestSiblings": true
        }
      ],
    }
  }),
  // React Compiler plugin config (separate)
  {
    files: ['**/*.tsx', '**/*.ts', '**/*.jsx', '**/*.js'],
    plugins: { 'react-compiler': reactCompiler, },
    rules: { 'react-compiler/react-compiler': 'error', }
  },
  // TanStack Query config
  ...pluginQuery.configs['flat/recommended'],
];

export default eslintConfig;