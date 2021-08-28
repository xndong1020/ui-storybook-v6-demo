import dts from "rollup-plugin-dts";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import url from "@rollup/plugin-url";
import { visualizer } from "rollup-plugin-visualizer";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import svgr from "@svgr/rollup";
import packageJson from "./package.json";

// NOTE: if it is ever required to add rollup-plugin-node-polyfills, then add this plugin only for esm output
const codeBundleConfig = {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    commonjs({ include: "node_modules/**" }),
    // https://github.com/rollup/plugins/tree/master/packages/node-resolve
    nodeResolve({ preferBuiltins: false }),
    typescript(),
    url({
      limit: 102400,
      include: [
        "**/*.svg",
        "**/*.png",
        "**/*.jp(e)?g",
        "**/*.gif",
        "**/*.webp",
        "**/*.woff",
        "**/*.woff2",
      ],
    }),
    svgr(),
    visualizer(),
  ],
};

const typeConfig = {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.types,
      format: "es",
    },
  ],
  plugins: [dts()],
};

const configs = [codeBundleConfig, typeConfig];

export default configs;
