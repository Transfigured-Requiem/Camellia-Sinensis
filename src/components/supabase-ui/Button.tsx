type Props = {
	type?: "primary" | "secondary"
	text: string
	url?: string
	className?: string
	hideArrow?: boolean
}

const Button = (props: Props) => {
	const { type = "primary", text, url, className, hideArrow = false } = props

	const colorClass =
		type === "primary"
			? "px-3 py-2 shadow-sm border border-transparent text-white bg-slate-400 hover:bg-slate-300 focus:ring-2 focus:ring-offset-2 focus:ring-slate-300"
			: "text-slate-400 bg-none"

	const textClass =
		type === "primary" ? "font-medium left-3 group-hover:left-0" : "font-normal"

	const arrowClass =
		type === "primary" ? "" : "relative -left-1 group-hover:left-0"

	let buttonStyles = {
		textShadow: "none",
	}
	if (type === "primary") {
		buttonStyles.textShadow = "0px 0px 6px rgba(13, 128, 86, 0.8)"
	}

	const renderButton = () => (
		<button
			type="button"
			className={`
          group inline-flex items-center rounded-md text-sm
          leading-4 transition focus:outline-none ${colorClass} ${className}
        `}
			style={buttonStyles}
		>
			<span
				className={`
          relative transition-all ${url ? textClass : ""}
        `}
			>
				{text}
			</span>
			{url && (
				<span
					className={`ml-2 opacity-0 transition-all group-hover:opacity-100 ${arrowClass}`}
				>
					→
				</span>
			)}
		</button>
	)

	return url ? <a href={url}>{renderButton()}</a> : renderButton()
}

export default Button
