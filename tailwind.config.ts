import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { 
        background: "var(--background)",
        foreground: "var(--foreground)",
        gris1: "#E5E1E1",  // ← Usa un código HEX en lugar de rgba
        gris2: "#E6E6E6",
        gris3: "#F1F1F1",
      },
      fontFamily: {
        poppins: ["jost", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;
