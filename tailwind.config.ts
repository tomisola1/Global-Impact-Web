import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
			themes: {
				light: {
					colors: {
						backgroundColor: "#F5F5F5",
						primary: "#2D338F",
            textColorDark: "#3F3F40",
            textColorLight: "#F5F5F5"
					},
				},
			},
		}),
  ],
};
export default config;
