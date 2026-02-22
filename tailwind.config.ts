import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B6F47",
        accent: "#D4A574",
        light: "#F5EFE7",
        dark: "#2C2C2C",
      },
    },
  },
  plugins: [],
}
export default config
