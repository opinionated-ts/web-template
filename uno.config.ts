import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

import { shortcuts } from "./src/client/styles/shortcuts";
import { theme } from "./src/client/styles/theme";

export default defineConfig({
  presets: [presetWind4(), presetIcons(), presetTypography()],

  transformers: [transformerVariantGroup(), transformerDirectives()],

  theme,

  shortcuts,
});
