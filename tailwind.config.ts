import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.{js}',
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin'),
  ],
  darkMode: 'class',
};
export default config;
