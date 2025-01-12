// components/useGsapAnimation.tsx
import { useEffect } from "react"
import { gsap } from "gsap"
import { CustomEase } from "gsap/CustomEase"

gsap.registerPlugin(CustomEase)

CustomEase.create(
	"hop",
	"MO,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1",
)

interface GsapAnimationProps {
	counterRef: React.RefObject<HTMLParagraphElement>
	headerRef: React.RefObject<HTMLHeadingElement>
	heroRef: React.RefObject<HTMLDivElement>
	overlayRef: React.RefObject<HTMLDivElement>
	heroImgRef: React.RefObject<HTMLDivElement>
}

export const useGsapAnimation = ({
	counterRef,
	headerRef,
	heroRef,
	overlayRef,
	heroImgRef,
}: GsapAnimationProps) => {
	const animateCounter = () => {
		if (!counterRef.current) return

		let currentValue: number = 0
		const updateInterval = 300
		const maxDuration = 2000
		const endValue = 100
		const startTime = Date.now()

		function updateCounter() {
			const elapsedTime = Date.now() - startTime
			if (elapsedTime < maxDuration) {
				currentValue = Math.min(
					currentValue + Math.floor(Math.random() * 30) + 5,
					endValue,
				)
				counterRef.current.textContent = currentValue.toString()
				setTimeout(updateCounter, updateInterval)
			} else {
				counterRef.current.textContent = endValue.toString()
				setTimeout(() => {
					gsap.to(counterRef.current, {
						y: -20,
						duration: 1,
						ease: "power3.inOut",
						onStart: () => {
							revealLandingPage()
						},
					})
				}, -500)
			}
		}

		updateCounter()
	}

	const revealLandingPage = () => {
		if (!heroRef.current || !overlayRef.current || !heroImgRef.current) return

		gsap.to(heroRef.current, {
			clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
			duration: 2,
			ease: "hop",
			onStart: () => {
				gsap.to(heroRef.current, {
					transform: "translate(-50%, -50%) scale(1)",
					duration: 2.25,
					ease: "power3.inOut",
					delay: 0.25,
				})

				gsap.to(overlayRef.current, {
					clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
					duration: 2,
					delay: 0.5,
					ease: "hop",
				})

				gsap.to(heroImgRef.current, {
					transform: "scale(1)",
					duration: 2.25,
					ease: "power3.inOut",
					delay: 0.25,
				})

				if (headerRef.current) {
					gsap.to(headerRef.current.querySelectorAll("span"), {
						y: 1,
						stagger: 0.1,
						duration: 2,
						ease: "power4.inOut",
						delay: 0.75,
					})
				}
			},
		})
	}

	const splitTextIntoSpans = (element: HTMLElement | null) => {
		if (!element) return
		const text = element.innerText
		const splitText = text
			.split("")
			.map((char) => `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`)
			.join("")
		element.innerHTML = splitText
	}

	return { animateCounter, revealLandingPage, splitTextIntoSpans }
}
