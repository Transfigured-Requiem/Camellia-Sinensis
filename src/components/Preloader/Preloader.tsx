"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { opacity, slideUp } from "./animation"

const words = [
	"Hello", // English
	"Bonjour", // French
	"Hola", // Spanish
	"Ciao", // Italian
	"Olà", // Portuguese
	"こんにちは", // Japanese
	"你好", // Chinese
	"ⴰⵣⵓⵍ", // Amazigh
	"Hallå", // Swedish
	"Guten tag", // German
	"Hallo", // Dutch
	"مرحبا", // Arabic
]

export default function Preloader() {
	const [index, setIndex] = useState(0)
	const [dimension, setDimension] = useState({ width: 0, height: 0 })

	useEffect(() => {
		setDimension({ width: window.innerWidth, height: window.innerHeight })
	}, [])

	useEffect(() => {
		if (index === words.length - 1) return
		setTimeout(
			() => {
				setIndex(index + 1)
			},
			index === 0 ? 1000 : 150,
		)
	}, [index])

	const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
	const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`

	const curve = {
		initial: {
			d: initialPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			d: targetPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
		},
	}

	return (
		<motion.div
			variants={slideUp}
			initial="initial"
			exit="exit"
			className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-[#141516]"
		>
			{dimension.width > 0 && (
				<>
					<motion.p
						variants={opacity}
						initial="initial"
						animate="enter"
						className="absolute z-10 flex items-center text-7xl font-semibold text-background"
					>
						<span className="mr-2.5 block h-5 w-5 rounded-full bg-background"></span>
						{words[index]}
					</motion.p>
					<svg className="absolute top-0 h-[calc(100%+300px)] w-full">
						<motion.path
							variants={curve}
							initial="initial"
							exit="exit"
							className="fill-brand-red"
						></motion.path>
					</svg>
				</>
			)}
		</motion.div>
	)
}
