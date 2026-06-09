/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        panel: "var(--panel)",
        surface: "var(--surface)",
        surface2: "var(--surface2)",
        line: "var(--line)",
        line2: "var(--line2)",
        fg: "var(--text)",
        muted: "var(--text2)",
        subtle: "var(--text3)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        disp: ["'Space Grotesk'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      screens: {
        tablet: "800px",
      },
    },
  },
  plugins: [],
};
