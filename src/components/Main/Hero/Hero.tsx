"use client"

import React, { useEffect, useState } from "react"

import StaggeredTextReveal from "./StaggeredTextReveal"

import {
	AfterEffectsLogo,
	PremiereProLogo,
	PhotoshopLogo,
	IllustratorLogo,
	LightroomLogo,
	BlenderLogo,
} from "public/_brands/BrandLogos"
import SvgReveal from "./SVGReveal"
import { Asterisk } from "lucide-react"

import { Timeline } from "public/_backgrounds"
import Image from "next/image"
import Ripple from "@/components/Buttons/Ripple"
import { BorderBeam } from "@/shared/BorderBeam"
import { Clock } from "@/shared/TimeDisplay"
import { SkillsTextLoop } from "../Carousel/TextLoop"
import { FloatingNames } from "./FloatingNames"

function Hero() {
	const [preloaderFinished, setPreloaderFinished] = useState(false)

	useEffect(() => {
		// Simulate preloader completion
		const timeout = setTimeout(() => setPreloaderFinished(true), 4000) // Adjust the time as needed
		return () => clearTimeout(timeout)
	}, [])
	return (
		<div className="pt-16">
			<div className="font-dirty -mt-20 flex justify-center overflow-hidden pt-6 text-[28rem] font-semibold text-amber-50">
				<div className="z-20">
					<StaggeredTextReveal
						delay={1000}
						inView={true}
						preloaderFinished={preloaderFinished}
					>
						<span className="font-aktura">Taha</span>
						<span className="text-brand-red">.</span>
					</StaggeredTextReveal>
					<Ripple />
				</div>
				{/* Floating names positioned relative to the div */}
				<FloatingNames />
			</div>

			{/* <div className="font-whyte flex items-center justify-center text-3xl font-bold uppercase text-brand-red">
				Video & Photo Editor <Asterisk className="text-brand" /> +7 years of exp{" "}
				<Asterisk className="text-brand" /> Artist{" "}
			</div> */}
			{/* <div className="flex items-center justify-center">
				<Image src={Timeline} alt="dsda" />
			</div> */}
			{/* <div className="mx-20 grid h-[30vh] grid-cols-6 items-center gap-4 pb-2"> */}
			{/* Text on the left */}
			{/* <div className="font-whyte col-span-2 text-2xl font-bold uppercase text-foreground">
					<span className="text-brand">+</span>
					<span className="text-5xl text-brand">7</span> years of experience
					with industry standard software<span className="text-brand">.</span>
				</div> */}

			{/* Logos on the right */}
			<div className="mx-auto -mt-12 mb-24 flex w-[500px] items-center justify-center rounded-full border border-white/5 py-2 backdrop-blur-lg dark:bg-dot-white/[0.7]">
				<SvgReveal />
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
				<BorderBeam
					delay={10}
					duration={8}
					size={150}
					className="from-transparent via-brand-red to-transparent"
				/>
			</div>
			<Clock />
			<SkillsTextLoop />
			{/* </div> */}
		</div>
	)
}

export default Hero
