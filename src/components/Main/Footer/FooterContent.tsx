import React from "react"

export default function Content() {
	return (
		<div className="flex h-full w-full flex-col justify-between overflow-y-hidden bg-[#08183b] px-12 py-8">
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
				Taha <span className="text-brand">.</span>
			</h1>
			<p>©copyright</p>
		</div>
	)
}

const Nav = () => {
	return (
		<div className="font-chillax flex shrink-0 gap-20 pt-20 text-xl">
			<div className="flex flex-col gap-2">
				<h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
				<p>Home</p>
				<p>Projects</p>
				<p>Our Mission</p>
				<p>Contact Us</p>
			</div>
			<div className="flex flex-col gap-2">
				<h3 className="mb-2 uppercase text-[#ffffff80]">Education</h3>
				<p>News</p>
				<p>Learn</p>
				<p>Certification</p>
				<p>Publications</p>
			</div>
		</div>
	)
}
