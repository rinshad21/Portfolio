/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: '#6366f1',
					dark: '#4f46e5',
					light: '#a5b4fc',
				},
			},
		},
	},
	darkMode: 'class',
	plugins: [],
}


