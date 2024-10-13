import eslintConfig from "@igorkowalczyk/eslint-config";
import jestPlugin from "eslint-plugin-jest";

export default [
 ...eslintConfig.base,
 ...eslintConfig.node,
 ...eslintConfig.typescript,
 {
  ignores: ["dist/**", "test/**"],
 },
 {
  files: ["test/**/*.mjs"],
  plugins: {
   jest: jestPlugin,
  },
  rules: {
   "jest/no-disabled-tests": "warn",
   "jest/no-focused-tests": "error",
   "jest/no-identical-title": "error",
   "jest/prefer-to-have-length": "warn",
   "jest/valid-expect": "error",
  },
 },
];
