import type { UserConfig } from "unocss";

/**
 * Shared visual design tokens exposed to UnoCSS utilities.
 *
 * The theme maps semantic CSS custom properties to UnoCSS tokens,
 * keeping component styles independent from concrete color, spacing,
 * typography, motion, and elevation values.
 *
 * CSS custom properties remain the source of truth for the actual values.
 */
const theme = {
  /** Semantic application surfaces and their interaction/elevation states. */
  colors: {
    /** Default application background. */
    bg: "var(--color-bg)",

    /** Application surfaces ordered from normal to floating/inset contexts. */
    surface: {
      /** Default surface. */
      DEFAULT: "var(--color-surface)",
      /** Surface on pointer hover. */
      hover: "var(--color-surface-hover)",
      /** Surface while actively interacted with. */
      active: "var(--color-surface-active)",
      /** Visually elevated surface. */
      raised: "var(--color-surface-raised)",
      /** Floating surface such as popovers, menus, or dialogs. */
      floating: "var(--color-surface-floating)",
      /** Recessed surface such as inputs or code blocks. */
      inset: "var(--color-surface-inset)",
    },

    /** Semantic text roles used across the application UI. */
    text: {
      /** Primary readable content. */
      DEFAULT: "var(--color-text)",
      /** Secondary content with reduced emphasis. */
      muted: "var(--color-text-muted)",
      /** Tertiary content with low emphasis. */
      subtle: "var(--color-text-subtle)",
      /** Text for unavailable or disabled controls. */
      disabled: "var(--color-text-disabled)",
      /** Text shown as a non-value hint inside controls. */
      placeholder: "var(--color-text-placeholder)",
      /** Text intended for use on high-contrast surfaces. */
      inverse: "var(--color-text-inverse)",
    },

    /** Semantic border roles for structure and interaction states. */
    border: {
      /** Default component boundary. */
      DEFAULT: "var(--color-border)",
      /** Low-emphasis boundary. */
      subtle: "var(--color-border-subtle)",
      /** Boundary highlighted by pointer interaction. */
      hover: "var(--color-border-hover)",
      /** Boundary used for keyboard focus. */
      focus: "var(--color-border-focus)",
      /** Boundary for unavailable or disabled controls. */
      disabled: "var(--color-border-disabled)",
    },

    /** Primary application accent and its interaction variants. */
    accent: {
      /** Default accent color. */
      DEFAULT: "var(--color-accent)",
      /** Accent during pointer hover. */
      hover: "var(--color-accent-hover)",
      /** Accent during active interaction. */
      active: "var(--color-accent-active)",
      /** Low-emphasis accent background. */
      soft: "var(--color-accent-soft)",
      /** Accent-colored boundary. */
      border: "var(--color-accent-border)",
      /** Foreground color intended for use on accent surfaces. */
      contrast: "var(--color-accent-contrast)",
    },

    /** Positive semantic state. */
    success: {
      /** Default success color. */
      DEFAULT: "var(--color-success)",
      /** Low-emphasis success background. */
      soft: "var(--color-success-soft)",
      /** Success-colored boundary. */
      border: "var(--color-success-border)",
      /** Foreground color intended for use on success surfaces. */
      contrast: "var(--color-success-contrast)",
    },

    /** Cautionary semantic state. */
    warning: {
      /** Default warning color. */
      DEFAULT: "var(--color-warning)",
      /** Low-emphasis warning background. */
      soft: "var(--color-warning-soft)",
      /** Warning-colored boundary. */
      border: "var(--color-warning-border)",
      /** Foreground color intended for use on warning surfaces. */
      contrast: "var(--color-warning-contrast)",
    },

    /** Negative or destructive semantic state. */
    danger: {
      /** Default danger color. */
      DEFAULT: "var(--color-danger)",
      /** Low-emphasis danger background. */
      soft: "var(--color-danger-soft)",
      /** Danger-colored boundary. */
      border: "var(--color-danger-border)",
      /** Foreground color intended for use on danger surfaces. */
      contrast: "var(--color-danger-contrast)",
    },

    /** Informational semantic state. */
    info: {
      /** Default informational color. */
      DEFAULT: "var(--color-info)",
      /** Low-emphasis informational background. */
      soft: "var(--color-info-soft)",
      /** Information-colored boundary. */
      border: "var(--color-info-border)",
      /** Foreground color intended for use on informational surfaces. */
      contrast: "var(--color-info-contrast)",
    },

    /** Default color used for links. */
    link: "var(--color-link)",
    /** Link color during pointer interaction. */
    "link-hover": "var(--color-link-hover)",
    /** Keyboard focus color used across interactive elements. */
    focus: "var(--color-focus)",
    /** Selection highlight color. */
    selection: "var(--color-selection)",
    /** Backdrop color used to separate overlays from underlying content. */
    overlay: "var(--color-overlay)",
  },

  /** Shared typography families. */
  fontFamily: {
    /** Primary application UI and body font. */
    sans: "var(--font-sans)",
    /** Monospaced font for code and technical content. */
    mono: "var(--font-mono)",
  },

  /** Shared semantic font sizes. */
  fontSize: {
    /** Prominent display text used for primary page headings. */
    display: "var(--font-size-display)",
    /** Standard readable body text. */
    body: "var(--font-size-body)",
    /** Compact text for secondary content and controls. */
    small: "var(--font-size-small)",
    /** Very compact text for labels, metadata, and technical UI. */
    label: "var(--font-size-label)",
  },

  /** Shared line-height values for common text roles. */
  lineHeight: {
    /** Compact line height for headings and short UI labels. */
    tight: "var(--line-height-tight)",
    /** Standard readable line height for general text. */
    normal: "var(--line-height-normal)",
    /** Relaxed line height for longer-form readable content. */
    relaxed: "var(--line-height-relaxed)",
  },

  /** Shared letter-spacing values for common typographic treatments. */
  letterSpacing: {
    /** Negative tracking for large or prominent headings. */
    tight: "var(--tracking-tight)",
    /** Slightly tighter tracking for normal interface text. */
    normal: "var(--tracking-normal)",
    /** Expanded tracking for labels, metadata, and uppercase text. */
    wide: "var(--tracking-wide)",
  },

  /** Shared interaction transition durations. */
  transitionDuration: {
    /** Very fast feedback for small interaction state changes. */
    fast: "var(--duration-fast)",
    /** Default duration for standard UI transitions. */
    normal: "var(--duration-normal)",
    /** Slower duration for larger or more noticeable transitions. */
    slow: "var(--duration-slow)",
  },

  /** Shared elevation levels used to communicate visual depth. */
  boxShadow: {
    /** Low elevation for subtle separation. */
    sm: "var(--shadow-sm)",
    /** Standard elevation for raised components. */
    md: "var(--shadow-md)",
    /** Higher elevation for floating components. */
    lg: "var(--shadow-lg)",
    /** High elevation for dialogs and prominent overlays. */
    xl: "var(--shadow-xl)",
    /** Highest elevation for top-level overlays. */
    "2xl": "var(--shadow-2xl)",
  },

  /** Shared border-radius tokens. */
  borderRadius: {
    /** Small radius for compact controls and small surfaces. */
    sm: "var(--radius-sm)",
    /** Default radius for most components. */
    md: "var(--radius-md)",
    /** Large radius for prominent containers and surfaces. */
    lg: "var(--radius-lg)",
  },
} satisfies Theme;

export { theme };

export default theme;

/**
 * UnoCSS theme configuration shape.
 *
 * The theme is intentionally kept as a structural subset of
 * {@link UserConfig} so it can be shared independently from the
 * complete UnoCSS configuration.
 */
type Theme = UserConfig["theme"];
