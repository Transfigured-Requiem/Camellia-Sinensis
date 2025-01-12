"use client"
import React from "react"
import StaggeredTextReveal from "./StaggeredTextReveal"

function Hero() {
	return (
		<div className="font-chillax -my-20 flex justify-center overflow-hidden py-0 text-[28rem] font-semibold text-amber-50">
			<StaggeredTextReveal inView={true}>
				taha
				<span className="text-brand">.</span>
			</StaggeredTextReveal>
		</div>
	)
}

export default Hero
