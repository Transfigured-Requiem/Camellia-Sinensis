import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const MaxWidthWrapper = ({
	className,
	children,
}: {
	className?: string
	children: ReactNode
}) => {
	return (
		<div
			className={cn(
				"mx-auto w-full max-w-screen-lg bg-green-200/20 px-2.5 md:px-20",
				className,
			)}
		>
			{children}
		</div>
	)
}

export default MaxWidthWrapper
