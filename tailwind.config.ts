import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.{ts,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				black: {
					DEFAULT: '#000',
					100: '#000319',
				},
				white: {
					DEFAULT: '#fff',
					100: '#FFF6E9',
				},
			},
			fontFamily: {
				sans: [
					'__Roboto_Slab_062cf3',
					'__Roboto_Slab_Fallback_062cf3',
					'sans-serif',
				],
				serif: ['__Roboto_8de4fe', '__Roboto_Fallback_8de4fe', 'serif'],
				cursive: ['__Indie_Flower_18396d', '__Indie_Flower_Fallback_18396d'],
			},
			animation: {
				spotlight: 'spotlight 2s ease .75s 1 forwards',
			},
			keyframes: {
				spotlight: {
					'0%': {
						opacity: '0',
						transform: 'translate(-72%, -62%) scale(0.5)',
					},
					'100%': {
						opacity: '1',
						transform: 'translate(-50%,-40%) scale(1)',
					},
				},
			},
		},
	},
	plugins: [],
}
export default config
