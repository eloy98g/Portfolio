import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#1D1C1E",
				secondary: "#302C36",
				black: "black",
				grey: "#CBC4CF",
				"light-grey": "#49444E",
				white: "#E6E1E6",
			},
			spacing: {
				xs: "0.5rem", // 8px
				sm: "1rem", // 16px
				md: "1.5rem", // 24px
				lg: "2rem", // 32px
				xl: "3rem", // 48px
				"2xl": "4rem", // 64px
				"3xl": "6rem", // 96px
				"4xl": "8rem", // 128px
			},
		},
	},
	plugins: [typography],
};
