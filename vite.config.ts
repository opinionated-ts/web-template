import prefresh from "@prefresh/vite";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [UnoCSS(), prefresh()],

  resolve: {
    tsconfigPaths: true,
  },
});
