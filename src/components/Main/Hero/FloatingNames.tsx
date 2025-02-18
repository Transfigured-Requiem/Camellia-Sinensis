"use client"
import { useEffect, useState } from "react"

export function FloatingNames() {
	const [activeIndex, setActiveIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % 6) // Cycle through 6 spans
		}, 1500) // Change every 1 second

		return () => clearInterval(interval) // Cleanup on unmount
	}, [])

	return (
		<div className="absolute z-10 h-screen w-screen">
			{/* Quark names positioned relative to the div */}
			<span
				className={`absolute left-1/2 top-[20%] z-10 -translate-x-1/2 -translate-y-1/4 transform text-5xl transition-colors duration-1000 ${
					activeIndex === 0 ? "text-brand-red" : "text-white/20"
				}`}
			>
				タハ
			</span>
			<span
				className={`absolute left-[20%] top-2/3 z-10 -translate-x-1/2 -translate-y-1/2 transform text-5xl transition-colors duration-1000 ${
					activeIndex === 1 ? "text-brand-red" : "text-white/20"
				}`}
			>
				타하
			</span>
			<span
				className={`absolute left-[80%] top-[30%] z-10 -translate-x-1/2 -translate-y-1/2 transform text-5xl transition-colors duration-1000 ${
					activeIndex === 2 ? "text-brand-red" : "text-white/20"
				}`}
			>
				ⵟⴰⵀⴰ
			</span>
			<span
				className={`absolute left-[12%] top-[40%] z-10 -translate-x-1/2 -translate-y-1/2 transform text-5xl transition-colors duration-1000 ${
					activeIndex === 3 ? "text-brand-red" : "text-white/20"
				}`}
			>
				Τάχα
			</span>
			<span
				className={`absolute left-[80%] top-[70%] z-10 -translate-x-1/2 -translate-y-1/2 transform text-5xl tracking-wider transition-colors duration-1000 ${
					activeIndex === 4 ? "text-brand-red" : "text-white/20"
				}`}
			>
				طه
			</span>
			<span
				className={`absolute left-1/2 top-[70%] z-10 -translate-x-1/2 -translate-y-1/2 transform text-5xl transition-colors duration-1000 ${
					activeIndex === 5 ? "text-brand-red" : "text-white/20"
				}`}
			>
				塔哈
			</span>
			<div
				className="pointer-events-none absolute inset-0 z-30"
				style={{
					background:
						"radial-gradient(circle, transparent 10%, rgba(0, 0, 0, 3.6%) 80%)",
				}}
			></div>
		</div>
	)
}
