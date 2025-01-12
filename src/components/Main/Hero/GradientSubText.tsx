import React from "react"

function GradientSubText() {
	return (
		<a
			className="text-small flex items-end sm:text-[0.93rem] text-foreground hover:opacity-80 transition-opacity"
			href="https://nextui.pro?utm_source=nextui.org&utm_medium=top-banner"
			rel="noopener noreferrer"
			target="_blank"
			// onClick={handleClick}
		>
			{/* <span aria-label="rocket" className="hidden md:block" role="img">
				
			</span> */}
			<span
				className="inline-flex md:ml-1 animate-text-gradient font-medium bg-clip-text text-transparent bg-[linear-gradient(90deg,#10F984_0%,#2044f9_50%,#10F984_100%)]"
				style={{
					fontSize: "inherit",
					backgroundSize: "200%",
					backgroundClip: "text",
					WebkitBackgroundClip: "text",
					color: "transparent",
				}}
			>
				Ship faster with beautiful components
			</span>
		</a>
	)
}

export default GradientSubText
