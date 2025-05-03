import eslintConfig from "@igorkowalczyk/eslint-config";
import vitest from "@vitest/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
 eslintConfig.base,
 eslintConfig.node,
 eslintConfig.typescript,
 eslintConfig.prettier,
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
