import eslintConfig from "@igorkowalczyk/eslint-config/flat";
import jestPlugin from "eslint-plugin-jest";

export default [
 {
  files: ["*.js"],
  ignores: ["test/**/*.mjs"],
  ...eslintConfig,
 },
 {
  files: ["test/**/*.mjs"],
  ...eslintConfig,
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
