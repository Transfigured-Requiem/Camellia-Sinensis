import React, { MouseEventHandler, ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

interface CustomButtonProps {
	text: string
	href?: string | object
	arrow?: boolean
	appearance?: "main" | "sec"
	className?: string
	onClick?: MouseEventHandler
}

function CustomButton({
	text,
	href = "",
	arrow = false,
	appearance = "sec",
	className,
	onClick,
}: CustomButtonProps) {
	const spanGradient =
		appearance === "main"
			? "from_90deg_at_50%_50%,#E61919_0%,#10d6f9_50%,#E61919_100%"
			: "from_90deg_at_50%_50%,#292D2E_0%,#3F4546_50%,#292D2E_100%" // "from_90deg_at_50%_50%,#46C9E9_0%,#BE46E9_50%,#46C9E9_100%"

	const buttonClassName = `inline-flex h-10 px-4 py-2 cursor-pointer items-center justify-center rounded-full ${
		appearance === "main"
			? "bg-black/85 group-hover:bg-transparent/70"
			: "bg-black/85 group-hover:bg-transparent/50"
	} transition-all duration-500 text-sm font-medium text-foreground backdrop-blur-3xl w-full`

	return (
		<Button
			variant="ghoster"
			className={cn("pl-0", className)}
			onClick={onClick}
		>
			<Link
				className="group relative flex min-w-[120px] items-center gap-1.5 overflow-hidden rounded-full p-[2px] font-semibold text-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
				href={href}
				rel="noopener noreferrer"
			>
				<span
					className={`absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(${spanGradient})]`}
				/>
				<div className={buttonClassName}>
					{text}
					{arrow && (
						<ArrowRight className="ml-1 size-4 transition-all group-hover:translate-x-1/4" />
					)}
				</div>
			</Link>
		</Button>
	)
}

export default CustomButton
