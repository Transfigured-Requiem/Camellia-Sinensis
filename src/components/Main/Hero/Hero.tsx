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
import { TextEffect } from "@/shared/TextEffect"
import { TextShimmer } from "@/shared/TextShimmer"

function Hero() {
	const [preloaderFinished, setPreloaderFinished] = useState(false)

	useEffect(() => {
		// Simulate preloader completion
		const timeout = setTimeout(() => setPreloaderFinished(true), 4000) // Adjust the time as needed
		return () => clearTimeout(timeout)
	}, [])

	const [showTextEffect, setShowTextEffect] = useState(true)

	useEffect(() => {
		// Hide TextEffect and show TextShimmer after 6 seconds
		const timer = setTimeout(() => {
			setShowTextEffect(false)
		}, 8000) // 6000 milliseconds = 6 seconds

		// Cleanup the timer to avoid memory leaks
		return () => clearTimeout(timer)
	}, [])

	return (
		<div className="pt-16">
			<div className="font-aktura -mt-14 flex w-full items-center justify-center text-[28rem]">
				{/* <h1 className="font-aktura text-[28rem] text-brand">.</h1> */}
				<div className="z-20">
					<StaggeredTextReveal
						delay={1000}
						inView={true}
						preloaderFinished={preloaderFinished}
					>
						<span className="pr-4 text-amber-50">Taha</span>
						<span className="pr-4 text-brand-red">.</span>
					</StaggeredTextReveal>
					<Ripple />
				</div>
				{/* Floating names positioned relative to the div */}
				<FloatingNames />
			</div>
			{/* <div className="font-aktura z-20 -mt-20 flex justify-center pt-6 text-[28rem] font-semibold text-brand-red">
				<div className="z-20">
					Taha.
					<StaggeredTextReveal
						delay={1000}
						inView={true}
						preloaderFinished={preloaderFinished}
					>
						<span className="font-aktura text-amber-50">Ta.ha</span>
						<span className="font-aktura text-[20rem]">.</span>
					</StaggeredTextReveal>
					<Ripple />
				</div>
				Floating names positioned relative to the div
				<FloatingNames />
			</div> */}

			<div className="font-whyte text-md -mt-24 flex items-center justify-center pb-14 font-bold uppercase text-white/25">
				<span className="pr-2 text-brand-red">
					{" "}
					<TextEffect per="word" preset="slide" delay={5}>
						&ldquo;
					</TextEffect>
				</span>

				<TextEffect
					className="m-0 border-red-400 p-0 text-lg font-bold"
					shimmerDuration={3}
					per="char"
					delay={5.5}
				>
					+7 years of experience with industry standard software
				</TextEffect>
				{/* {showTextEffect ? () : (
					<TextShimmer
						className="border-red-400 text-lg font-bold"
						duration={4}
					>
						+7 years of experience with industry standard software
					</TextShimmer>
				)} */}

				<span className="pl-2 text-brand-red">
					<TextEffect per="word" preset="slide" delay={7}>
						&rdquo;
					</TextEffect>
				</span>
			</div>
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
			<div className="relative mx-auto my-auto -mt-12 mb-24 flex w-[520px] items-center justify-center rounded-full py-2 backdrop-blur-lg dark:bg-grid-small-red-500/[0.5]">
				{/* Outer div with border */}
				<div className="absolute inset-0 rounded-full border-2 border-white/0"></div>

				{/* SVG Reveal Component */}
				<div className="relative -z-20">
					<SvgReveal />
				</div>

				{/* Border Beam */}
				<div className="absolute inset-0 z-10 overflow-hidden rounded-full">
					<BorderBeam
						delay={10}
						duration={8}
						size={120}
						className="from-transparent via-brand-red to-transparent"
					/>
				</div>
				{/* Mask Div */}
				<div className="pointer-events-none absolute inset-1 -z-10 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			</div>
			<Clock />
			<SkillsTextLoop />
			{/* </div> */}
		</div>
	)
}

export default Hero
