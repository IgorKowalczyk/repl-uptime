import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import { dts } from "rollup-plugin-dts";
import { uglify } from "rollup-plugin-uglify";

// Common Rollup plugins for all bundles
const commonPlugins = [typescript(), nodeResolve(), uglify()];

export default defineConfig([
 // ES module bundle
 {
  input: "index.ts",
  plugins: commonPlugins,
  output: {
   file: "dist/mjs/index.js",
   format: "esm",
   compact: true,
  },
 },
 // CommonJS bundle
 {
  input: "index.ts",
  plugins: commonPlugins,
  output: {
   file: "dist/cjs/index.cjs",
   format: "cjs",
   compact: true,
  },
 },
 {
  input: "index.ts",
  plugins: [dts()],
  external: ["node:http"],
  output: {
   file: "dist/types/index.d.ts",
   format: "es",
  },
 },
]);
