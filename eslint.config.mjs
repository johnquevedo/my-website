import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const config = [
  ...compat.config({
    extends: ["next/core-web-vitals"]
  }),
  {
    ignores: ["node_modules/**", ".next/**", "coverage/**", "playwright-report/**"]
  }
];

export default config;
