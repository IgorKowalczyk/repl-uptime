import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";

const defaultConfig = {
 input: "src/index.ts",
 plugins: [
  typescript({
   declaration: true,
   include: ["src/**/*.ts"],
   tsconfig: "tsconfig.json",
   outDir: "dist",
  }),
  nodeResolve(),
 ],
};

export default defineConfig([
 // ES module bundle
 {
  ...defaultConfig,
  output: {
   file: "dist/index.js",
   format: "esm",
   compact: true,
  },
 },
 // CommonJS bundle
 {
  ...defaultConfig,
  output: {
   file: "dist/index.cjs",
   format: "cjs",
   compact: true,
  },
 },
]);
