import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
// library that helps you import in svelte with
// absolute paths, instead of
// import Component  from "../../../../components/Component.svelte";
// we will be able to say
// import Component from "components/Component.svelte";
import alias from "@rollup/plugin-alias";

const production = !process.env.ROLLUP_WATCH;

// configure aliases for absolute imports
const aliases = alias({
  resolve: [".svelte", ".js", ".ts"], //optional, by default this will just look for .js files or folders
  entries: [
    { find: "components", replacement: "src/components" },
    { find: "views", replacement: "src/views" },
    { find: "assets", replacement: "src/assets" },
  ],
});

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn(
        "npm",
        ["run", "start", "--", "--dev"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        }
      );

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

export default {
  input: "src/main.ts",
  output: {
    // sourcemap: true,
    format: "es",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    svelte({
      dev: !production,
      css: (css) => {
        css.write("bundle.css");
      },
      preprocess: sveltePreprocess({
        typescript: {
          compilerOptions: {
            target: 'es2020',
            module: 'es2020',
            baseUrl: './src',
          },
          transpileOnly: true,
        },
      }),
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),
    typescript({ sourceMap: !production }),
    !production && serve(),
    !production && livereload("public"),
    production && terser(),
    aliases,
  ],
  watch: {
    clearScreen: false,
  },
};
