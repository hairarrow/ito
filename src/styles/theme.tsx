const breakpoints = {
  sm: 500,
  md: 700,
  lg: 1000,
  xl: 1400,
  xxl: 2000
};

const theme = {
  colors: {
    bg: "#fff",
    fg: "rgba(0, 0, 0, 0.8)",
    accent: `rgba(0, 98, 255, 1)`,
    alt: `rgba(255, 12, 253, 1)`,
    orange: "#e35d5b",
    gray: "#e9e9eb"
  },
  breakpoints: Object.keys(breakpoints).reduce<{
    [k: string]: { up: string; down: string };
  }>((a, b) => {
    a[b] = {
      up: `min-width: ${breakpoints[b]}px`,
      down: `max-width: ${breakpoints[b]}px`
    };
    return a;
  }, {})
};

export type Theme = typeof theme;

export default theme;
