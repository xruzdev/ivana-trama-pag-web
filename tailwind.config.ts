import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#F9FBF8",
        color2: "#878787",
        color3: "#A39383",
        color4: "#E0CFA5",
        color5: "#786c61",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwindcss-animated')
  ],
};
export default config;


/**
 * 
 * colors: {
        color1: "#edede9",
        color2: "#d6ccc2",
        color3: "#d2d2d2",
        color4: "#e3d5ca",
        color5: "#d5bdaf",
      },
 */