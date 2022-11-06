/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				darkGrey: "#1F2232",
				whiteYellow: "#F4E04D",
				finePink: "#EB4B98",
				brightBlue: "#D2FDFF",

			},
		},
	},
	plugins: [],
}
