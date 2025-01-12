type IconProps = React.HTMLAttributes<SVGElement>

export const TrustedBrandsIcons = {
	azure: (props: IconProps) => (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
			<path fill="#f3f3f3" d="M0 0h23v23H0z" />
			<path fill="#f35325" d="M1 1h10v10H1z" />
			<path fill="#81bc06" d="M12 1h10v10H12z" />
			<path fill="#05a6f0" d="M1 12h10v10H1z" />
			<path fill="#ffba08" d="M12 12h10v10H12z" />
		</svg>
	),
	google: (props: IconProps) => (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="705.6"
			height="720"
			viewBox="0 0 186.69 190.5"
			// xmlns:v="https://vecta.io/nano"
		>
			<g transform="translate(1184.583 765.171)">
				<path
					clip-path="none"
					mask="none"
					d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
					fill="#4285f4"
				/>
				<path
					clip-path="none"
					mask="none"
					d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
					fill="#34a853"
				/>
				<path
					clip-path="none"
					mask="none"
					d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
					fill="#fbbc05"
				/>
				<path
					d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
					fill="#ea4335"
					clip-path="none"
					mask="none"
				/>
			</g>
		</svg>
	),
	xtwitter: (props: IconProps) => (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
		>
			<path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path>
		</svg>
	),
}
