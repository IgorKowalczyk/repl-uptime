import baseEslintConfig from "@igorkowalczyk/eslint-config/base";
import nodeEslintConfig from "@igorkowalczyk/eslint-config/node";
import prettierEslintConfig from "@igorkowalczyk/eslint-config/prettier";
import typescriptEslintConfig from "@igorkowalczyk/eslint-config/typescript";
import vitest from "@vitest/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
  baseEslintConfig,
  nodeEslintConfig,
  typescriptEslintConfig,
  prettierEslintConfig,
  {
    files: ["tests/**"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
]);
