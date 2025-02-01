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
        blogBlue: "#444E8D",
        blogRed: "#FFBF42",
        blogYellow: "#D94F4F",
        blogGreen: "#82E49A",
      },
      fontFamily: {
        playfair: "var(--font-playfair-display)",
        openSans: "var(--font-open-sans)",
        poppins: "var(--font-poppins)",
      },
    },
  },
  plugins: [],
} satisfies Config;
