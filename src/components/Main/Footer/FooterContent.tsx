"use client"

import ShuffleText from "@/components/Header/ShuffleText"
import React from "react"

import { getCurrentYear } from "@/lib/year"

export default function Content() {
	return (
		<div className="flex h-full w-full flex-col justify-between overflow-y-hidden bg-[hsl(240,34%,9%)] px-12 py-8">
			<Section1 />
			<Section2 />
		</div>
	)
}

const Section1 = () => {
	return (
		<div>
			<Nav />
		</div>
	)
}

const Section2 = () => {
	return (
		<div className="flex items-end justify-between">
			<h1 className="font-aktura mt-10 text-[20vw] leading-[0.8] text-white">
				Taha<span className="text-brand">.</span>
			</h1>
			<p>&#169; {getCurrentYear()} All rights reserved.</p>
		</div>
	)
}

const Nav = () => {
	return (
		<div className="nav-container font-chillax pt-20 text-xl">
			<div className="nav-section z-50">
				<h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
				<p className="shuffle-text-wrapper">
					<ShuffleText text="Home" />
				</p>
				<p className="shuffle-text-wrapper">
					<ShuffleText text="Projects" />
				</p>
				<p className="shuffle-text-wrapper">
					<ShuffleText text="Our Mission" />
				</p>
				<p className="shuffle-text-wrapper">
					<ShuffleText text="Contact Us" />
				</p>
			</div>
			<div className="nav-section z-100">
				<h3 className="mb-2 uppercase text-[#ffffff80]">Education</h3>
				<p className="shuffle-text-wrapper">
					<ShuffleText text="News" />
				</p>
				<p className="shuffle-text-wrapper">
					<ShuffleText text="Learn" />
				</p>
				<p className="shuffle-text-wrapper">
					<ShuffleText text="Certification" />
				</p>
				<p className="shuffle-text-wrapper">
					<ShuffleText text="Publications" />
				</p>
			</div>
		</div>
	)
}
