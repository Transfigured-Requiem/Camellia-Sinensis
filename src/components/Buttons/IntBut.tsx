import React from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface InteractiveHoverButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string
}

const InteractiveHoverButton = React.forwardRef<
	HTMLButtonElement,
	InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
	return (
		<button
			ref={ref}
			className={cn(
				"group relative w-40 cursor-pointer overflow-hidden rounded-full border-2 border-brand bg-neutral-900/80 p-2 text-center font-semibold",
				className,
			)}
			{...props}
		>
			<span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
				{/* <span className="ml-4"> */}
				{text}
				{/* </span> */}
			</span>
			<div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
				<span>{text}</span>
				<ArrowUpRight className="size-6 font-extrabold text-brand" />
			</div>
			<div className="absolute left-[10%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-brand transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-amber-50"></div>
		</button>
	)
})

InteractiveHoverButton.displayName = "InteractiveHoverButton"

export default InteractiveHoverButton
