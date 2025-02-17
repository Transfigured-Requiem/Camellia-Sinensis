"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Cursor } from "public/_svg"
import NavMenu from "./NavigationMenu"
import { useEffect } from "react"

import { BorderBeam } from "@/shared/BorderBeam"

export default function TimelineNavbar() {
	const totalTicks = 121
	const timelineWidth = totalTicks * 10 // Total width of the timeline

	// Track scroll progress
	const { scrollYProgress } = useScroll()

	// Map scroll progress to the cursor's left position
	const cursorLeft = useTransform(
		scrollYProgress,
		[0, 1], // Input range (scroll progress from 0 to 1)
		[132, timelineWidth - 358], // Output range (left position from 0 to timelineWidth)
	)

	// Log scroll progress for debugging
	useEffect(() => {
		const unsubscribe = scrollYProgress.on("change", (latest) => {
			console.log("Scroll progress:", latest)
		})
		return () => unsubscribe()
	}, [scrollYProgress])

	return (
		<div className="fixed left-1/2 z-40 flex w-full max-w-[1000px] -translate-x-1/2 transform flex-col items-center justify-center pb-6 pt-4">
			{/* Timeline Container */}
			<div className="relative h-full w-full">
				{/* Timeline Ticks */}
				<div
					className="absolute left-1/2 z-20 h-full -translate-x-1/2 transform bg-brand-red"
					style={{ width: `${timelineWidth}px` }}
				>
					{Array.from({ length: totalTicks }).map((_, index) => {
						// Skip the first and last ticks
						if (
							index === 0 ||
							index === 1 ||
							index === 2 ||
							index === totalTicks - 1 ||
							index === totalTicks - 2 ||
							index === totalTicks - 3
						) {
							return null
						}

						const isThick = index % 24 === 0
						const isEven = index % 2 === 0

						let tickHeight = "h-[7px]"
						let bgColor = "bg-gray-400/45"

						if (isThick) {
							tickHeight = "h-[20px]"
							bgColor = "bg-brand-red"
						} else if (isEven) {
							tickHeight = "h-[12px]"
							bgColor = "bg-gray-400/80"
						}

						const tickWidth = isThick ? "w-[3px]" : "w-[2px]"
						const tickPosition = index * 10

						return (
							<div
								key={index}
								className={`absolute top-0 ${bgColor} ${tickWidth} ${tickHeight}`}
								style={{
									left: `${tickPosition}px`,
									transform: "translateX(-50%)",
								}}
							/>
						)
					})}
				</div>

				{/* Gradient Div (Under the Image) */}
				<div
					className="absolute left-[50%] top-0 z-10 -translate-x-1/2 transform rounded-2xl backdrop-blur-md"
					style={{
						background:
							"linear-gradient(to bottom, hsla(0, 0%, 3.6%, .8) 5%, hsla(0, 0%, 3.6%, .6)) 100%",
						width: "1210px", // Match the width of the Image
						height: "56px", // Match the height of the Image
					}}
				/>
				{/* Gradient Div (Under the Image) */}
				<div
					className="absolute left-[50%] top-0 z-40 -translate-x-1/2 transform rounded-full border border-white/10"
					style={{
						background:
							"linear-gradient(to bottom, hsla(0, 0%, 3.6%, 0.2) 1%, hsla(0, 0%, 3.6%, 1)) 100%",
						width: "1210px", // Match the width of the Image
						height: "56px", // Match the height of the Image
					}}
				>
					{/* <BorderBeam
						duration={4}
						reverse
						size={400}
						className="from-transparent via-brand-red to-transparent"
					/> */}
				</div>

				{/* Animated Cursor (Image) */}
				<motion.div
					className="absolute top-0 z-30"
					style={{
						left: cursorLeft, // Use the animated `cursorLeft` value
						transform: "translateX(-50%)", // Center the image
					}}
				>
					<Image
						priority
						src={Cursor}
						className="size-14"
						alt="Follow us on Twitter"
					/>
				</motion.div>
			</div>

			{/* Navigation Menu */}
			<div className="z-50 -translate-y-0">
				<NavMenu />
			</div>
		</div>
	)
}
