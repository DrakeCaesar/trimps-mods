import babel from "@rollup/plugin-babel"
import typescript from "@rollup/plugin-typescript"
import { glob } from "glob"

async function generateConfigs() {
  const files = await glob("src/mods.ts")

  return files.map((file) => ({
    input: file,
    output: {
      dir: ".",
      format: "es",
      exports: "named",
    },
    plugins: [
      typescript({
        target: "es2020",
        module: "esnext",
      }),
      babel({
        babelHelpers: "bundled",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
    ],
    external: [],
    watch: {
      include: "src/**/*.ts",
      exclude: "dist/",
    },
  }))
}

export default generateConfigs()
