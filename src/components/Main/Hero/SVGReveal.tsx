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

const SVGReveal = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (containerRef.current) {
			const svgs = Array.from(containerRef.current.querySelectorAll("svg"))

			// Set initial properties
			gsap.set(svgs, { y: 50, rotate: 20, opacity: 0 })

			// Apply the animation with delay
			gsap.to(svgs, {
				y: 0,
				rotate: 0,
				opacity: 1,
				stagger: 0.2, // Stagger each element's animation
				duration: 1, // Duration for each animation
				ease: "power2.out",
				delay: 4, // Delay the entire sequence by 3.7 seconds
			})
		}
	}, [])

	return (
		<div className="relative flex w-full flex-col items-center">
			{/* Logos */}
			<div ref={containerRef} className="mt-2 flex gap-4">
				<AfterEffectsLogo className="logo-responsive logo-dim" />
				<PremiereProLogo className="logo-responsive logo-dim" />
				<IllustratorLogo className="logo-responsive logo-dim" />
				<PhotoshopLogo className="logo-responsive logo-dim" />
				<LightroomLogo className="logo-responsive logo-dim" />
				{/* <BlenderLogo className="logo-responsive" /> */}
			</div>
		</div>
	)
}

export default SVGReveal
