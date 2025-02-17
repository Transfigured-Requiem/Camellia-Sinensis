"use client"

import { cn } from "@/lib/utils"
import { motion, MotionProps, useScroll } from "motion/react"
import Image from "next/image"
import React from "react"
import { Cursor } from "public/_svg"
interface ScrollProgressProps
	extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {}

export const ScrollProgress = React.forwardRef<
	HTMLDivElement,
	ScrollProgressProps
>(({ className, ...props }, ref) => {
	const { scrollYProgress } = useScroll()

	return (
		<motion.div
			ref={ref}
			className={cn(
				"fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
				className,
			)}
			style={{
				scaleX: scrollYProgress,
			}}
			{...props}
		>
			<Image
				priority
				src={Cursor}
				className="size-14"
				alt="Follow us on Twitter"
			/>{" "}
		</motion.div>
	)
})

ScrollProgress.displayName = "ScrollProgress"
