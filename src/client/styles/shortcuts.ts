import type { UserConfig } from "unocss";

/**
 * Example UnoCSS utility shortcuts.
 *
 * These demonstrate how shared layout and interaction patterns can be
 * expressed as shortcuts. They are intentionally minimal and are not
 * intended to define a mandatory component system for projects generated
 * from the template.
 */
const shortcuts = {
  /**
   * Example page content container.
   *
   * Provides a centered container with shared maximum width and
   * horizontal spacing tokens.
   */
  "content-container": "mx-auto w-full max-w-[var(--layout-max-width)] px-[var(--layout-gutter)]",

  /**
   * Example standard keyboard focus treatment.
   *
   * Demonstrates how a reusable accessibility pattern can be exposed
   * through a shortcut while keeping its visual values in the theme.
   */
  "focus-ring":
    "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus",
} satisfies Shortcuts;

export { shortcuts };

export default shortcuts;

/**
 * UnoCSS shortcuts configuration shape.
 *
 * Shortcuts in the template are examples of reusable utility patterns
 * that a project may keep, adapt, or remove according to its needs.
 */
type Shortcuts = UserConfig["shortcuts"];
