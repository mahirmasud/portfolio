/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  safelist: [
    // Borders
    "hover:border-cyber-green",
    "hover:border-neon-blue",

    // Backgrounds with opacity
    "bg-cyber-green/10",
    "bg-cyber-green/20",
    "bg-neon-blue/10",
    "bg-neon-blue/20",

    // Text colors
    "text-cyber-green",
    "text-neon-blue",

    // Gradient start/end
    "from-cyber-green",
    "to-cyber-green",
    "from-neon-blue",
    "to-neon-blue",

    // Extra glow background
    "bg-cyber-green/5",
    "bg-neon-blue/5",

    // Borders with opacity
    "border-cyber-green/30",
    "border-neon-blue/30",
  ],

  theme: {
    extend: {
      colors: {
        "navy-black": "#0A0F1C",
        "dark-slate": "#111827",
        "neon-blue": "#00D4FF",
        "cyber-green": "#00FF9D",
        "soft-white": "#E5E7EB",
        "gray-blue": "#94A3B8",
        "border-glow": "#1E293B",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },

  plugins: [],
};
