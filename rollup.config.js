import { uglify } from "rollup-plugin-uglify";

const commonPlugins = [uglify()];

export default {
 input: "index.js",
 external: ["node:http"],
 plugins: commonPlugins,
 output: [
  // ES Module build
  {
   file: "dist/mjs/index.js",
   format: "esm",
   compact: true,
  },
  // CommonJS build
  {
   file: "dist/cjs/index.cjs",
   format: "cjs",
   compact: true,
  },
 ],
};
