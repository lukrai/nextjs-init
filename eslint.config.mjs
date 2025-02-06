import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      quotes: ['error', 'single'],
      'import/no-default-export': 'off',
      'import/no-anonymous-default-export': 'warn',
      '@next/next/no-html-link-for-pages': 'error',
      'import/no-duplicates': 'error',
    },
  }),
];

export default eslintConfig;
