import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import {
	AfterEffectsLogo,
	PremiereProLogo,
	PhotoshopLogo,
	IllustratorLogo,
	LightroomLogo,
	BlenderLogo,
} from "public/_brands/BrandLogos"
import Image from "next/image"

const SVGReveal = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const imageRef = useRef<HTMLImageElement>(null)

	useEffect(() => {
		if (containerRef.current && imageRef.current) {
			const svgs = Array.from(containerRef.current.querySelectorAll("svg"))
			const image = imageRef.current

			// Set initial properties for SVGs and image
			gsap.set([...svgs, image], { y: 50, rotate: 20, opacity: 0 })

			// Create a timeline for precise control over animations
			const tl = gsap.timeline({ delay: 4 }) // Delay the entire sequence by 4 seconds

			// Animate each element in order
			tl.to(
				svgs[0],
				{ y: 0, rotate: 0, opacity: 1, duration: 1, ease: "power2.out" },
				0,
			) // 1st SVG
				.to(
					svgs[1],
					{ y: 0, rotate: 0, opacity: 1, duration: 1, ease: "power2.out" },
					0.2,
				) // 2nd SVG
				.to(
					svgs[2],
					{ y: 0, rotate: 0, opacity: 1, duration: 1, ease: "power2.out" },
					0.4,
				) // 3rd SVG
				.to(
					image,
					{ y: 0, rotate: 0, opacity: 1, duration: 1, ease: "power2.out" },
					0.6,
				) // 4th (Image)
				.to(
					svgs[3],
					{ y: 0, rotate: 0, opacity: 1, duration: 1, ease: "power2.out" },
					0.8,
				) // 5th SVG
				.to(
					svgs[4],
					{ y: 0, rotate: 0, opacity: 1, duration: 1, ease: "power2.out" },
					1.0,
				) // 6th SVG
				.to(
					svgs[5],
					{ y: 0, rotate: 0, opacity: 1, duration: 1, ease: "power2.out" },
					1.2,
				) // 7th SVG
		}
	}, [])

	return (
		<div className="relative flex w-full flex-col items-center">
			{/* Logos */}
			<div ref={containerRef} className="flex gap-4">
				<PhotoshopLogo className="logo-responsive logo-dim" />
				<PremiereProLogo className="logo-responsive logo-dim" />
				<AfterEffectsLogo className="logo-responsive logo-dim" />
				<Image
					ref={imageRef}
					src="/_brands/Davinci_Resolve_17_logo.svg.png"
					width={200}
					height={200}
					className="logo-responsive logo-dim-50"
					alt="DaVinci Resolve Logo"
				/>
				<IllustratorLogo className="logo-responsive logo-dim" />
				<LightroomLogo className="logo-responsive logo-dim" />
				<BlenderLogo className="logo-blender logo-dim" />
			</div>
		</div>
	)
}

export default SVGReveal
