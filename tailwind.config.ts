import type { Config } from "tailwindcss"

const svgToDataUri = require("mini-svg-data-uri")

const colors = require("tailwindcss/colors")
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				// border: "hsl(var(--border))",
				border: {
					DEFAULT: "hsl(var(--border))",
					strong: "hsl(var(--border-strong))",
					stronger: "hsl(var(--border-stronger))",
				},
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				// background: "hsl(var(--background))",
				background: {
					DEFAULT: "hsl(var(--background))",
					200: "hsl(var(--background-200))",
					lighter: "hsl(var(--background-lighter))",
				},
				surface: {
					"75": "hsl(0, 0%, 9%)",
					"100": "hsl(0, 0%, 12.2%)",
					"200": "hsl(0, 0%, 12.9%)",
					"300": "hsl(0, 0%, 16.1%)",
					"400": "hsl(0, 0%, 16.1%)",
				},
				foreground: {
					DEFAULT: "hsl(var(--foreground))",
					light: "hsl(var(--foreground-light))",
					lighter: "hsl(var(--foreground-lighter))",
					muted: "hsl(var(--foreground-muted))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},

				brand: {
					"DEFAULT": "hsl(var(--brand))",
					200: "hsl(var(--brand-200))",
					300: "hsl(var(--brand-300))",
					400: "hsl(var(--brand-400))",
					500: "hsl(var(--brand-500))",
					600: "hsl(var(--brand-600))",
					"green": "hsl(var(--brand-green))",
					"red": "hsl(var(--brand-red))",
					"alt": "hsl(var(--brand-alt))",
					"accent": "hsl(var(--brand-accent))",
					"accent-pale": "hsl(var(--brand-accent-pale))",
					"accent-deep": "hsl(var(--brand-accent-deep))",
					50: "hsla(51, 100%, 50%, .7)",
				},

				// 	},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"spotlight": {
					"0%": {
						opacity: 0,
						transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
						opacity: 1,
						transform: "translate(-50%,-40%) scale(1)",
					},
				},
				"brand-gradient": {
					"0%": { backgroundPosition: "0% 50%" },
					"100%": { backgroundPosition: "100% 50%" },
				},
				"fade-in": {
					from: { opacity: 0, transform: "translateY(-10px)" },
					to: { opacity: 1, transform: "none" },
				},
				"text-gradient": {
					to: {
						backgroundPosition: "-200% center",
					},
				},
				"scroll": {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
				"ripple": {
					"0%, 100%": {
						transform: "translate(-50%, -50%) scale(1)",
					},
					"50%": {
						transform: "translate(-50%, -50%) scale(0.9)",
					},
				},
				"rippling": {
					"0%": {
						opacity: "1",
					},
					"100%": {
						transform: "scale(2)",
						opacity: "0",
					},
				},
				"levitate": {
					"0%": {
						transform: "translateY(0)",
					},
					"30%": {
						transform: "translateY(-10px)",
					},
					"50%": {
						transform: "translateY(4px)",
					},
					"70%": {
						transform: "translateY(-15px)",
					},
					"100%": {
						transform: "translateY(0)",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"spotlight": "spotlight 2s ease .75s 1 forwards",
				"brand-gradient": "brand-gradient 6s linear infinite",
				"fade-in": "fade-in 600ms var(--animation-delay, 0ms) ease forwards",
				"text-gradient":
					"text-gradient 4s linear 0s infinite normal forwards running",
				"scroll":
					"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
				"ripple":
					"ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
				"rippling": "rippling var(--duration) ease-out",
				"levitate": "levitate 5s ease infinite",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		addVariablesForColors,
		function addVariablesForColors({ addBase, theme }: any) {
			let allColors = flattenColorPalette(theme("colors"))
			let newVars = Object.fromEntries(
				Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
			)

			addBase({
				":root": newVars,
			})
		},
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					"bg-grid": (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
						)}")`,
					}),
					"bg-grid-small": (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
						)}")`,
					}),
					"bg-dot": (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
						)}")`,
					}),
				},
				{
					values: flattenColorPalette(theme("backgroundColor")),
					type: "color",
				},
			)
		},
	],
} satisfies Config

export default config

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"))
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
	)

	addBase({
		":root": newVars,
	})
}
