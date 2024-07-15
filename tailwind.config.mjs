/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'morado-abbott': '#624495',
				'rosado-abbott': '#d787b5',
				'violeta-abbott' : '#772583',
				'morado-claro-abbott': '#8d78b1',
				'gris-abbott': '#f2f2f2',
			}
		},
		fontFamily: {
			serif : ['Georgia', 'ui-serif'],
		}
	},
	
	plugins: [],
}
