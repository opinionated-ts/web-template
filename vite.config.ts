import prefresh from "@prefresh/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [prefresh()],

  resolve: {
    tsconfigPaths: true,
  },
});
