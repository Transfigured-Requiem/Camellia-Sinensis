"use client"

import { Picture1, Picture2, Picture3, Picture4 } from "public/_temp"
import { AfterEffectsLogo } from "public/_brands/BrandLogos"

import Lenis from "lenis"
import Image from "next/image"

import { useEffect, useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"

export function TextParallex() {
	useEffect(() => {
		const lenis = new Lenis()

		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])

	const container = useRef()

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	})

	const roles = [
		"Video Editing",
		"Motion Graphics",
		"Visual Effects",
		"Photo Editing",
	]

	return (
		<main className="overflow-hidden">
			<div className="h-[100vh]" />

			<Slide
				src={Picture1}
				role={roles[0]}
				left={"-20%"}
				direction={"left"}
				progress={scrollYProgress}
			/>

			<Slide
				src={Picture2}
				role={roles[1]}
				left={"-40%"}
				direction={"right"}
				progress={scrollYProgress}
			/>

			<Slide
				src={Picture3}
				role={roles[2]}
				left={"-60%"}
				direction={"left"}
				progress={scrollYProgress}
			/>

			<Slide
				src={Picture4}
				role={roles[3]}
				left={"-80%"}
				direction={"right"}
				progress={scrollYProgress}
			/>

			<div className="h-[100vh]" />
		</main>
	)
}

const Slide = ({ src, role, left, direction, progress }) => {
	const translateX = useTransform(
		progress,
		[0, 1],
		[
			350 * (direction === "left" ? -1 : 1),
			-350 * (direction === "left" ? -1 : 1),
		],
	)

	return (
		<motion.div
			style={{ x: translateX, left }}
			className="relative flex whitespace-nowrap"
		>
			<Phrase src={src} role={role} />
			<Phrase src={src} role={role} />
			<Phrase src={src} role={role} />
			<Phrase src={src} role={role} />
		</motion.div>
	)
}

const Phrase = ({ src, role }) => {
	return (
		<div className="font-rx100 flex items-center gap-5 px-5 font-semibold">
			<p className="text-[7.5vw]">{role}</p>
			<span className="relative aspect-[4/2] h-[7.5vw] overflow-hidden rounded-full">
				<Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
			</span>
		</div>
	)
}
