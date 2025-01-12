// components/gsapAnimations.ts

import { gsap } from "gsap"
import { CustomEase } from "gsap/CustomEase"

// Register the CustomEase plugin
gsap.registerPlugin(CustomEase)

// Create a custom ease named "hop"
// export function createCustomEase() {
CustomEase.create(
	"hop",
	"MO,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1",
)
// }

// Function to split text into spans
export function splitTextIntoSpans(selector: string) {
	const elements = document.querySelectorAll<HTMLElement>(selector)
	elements.forEach((element) => {
		const text = element.innerText
		const splitText = text
			.split("")
			.map((char) => `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`)
			.join("")
		element.innerHTML = splitText
	})
}

// Function to animate counter
export function animateCounter() {
	const counterElement = document.querySelector<HTMLElement>(".counter p")
	if (!counterElement) {
		console.error("Counter element not found")
		return // Exit if null
	}

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
			counterElement.textContent = currentValue
			setTimeout(updateCounter, updateInterval)
		} else {
			counterElement.textContent = endValue.toString()
			setTimeout(() => {
				gsap.to(counterElement, {
					y: -20,
					duration: 1,
					ease: "power3.inOut",
					onStart: () => {
						revealLandingPage() // Ensure this function is defined elsewhere
					},
				})
			}, -500)
		}
	}

	updateCounter() // Start the counter animation
}

// Function to reveal landing page
export function revealLandingPage() {
	gsap.to(".hero", {
		clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
		duration: 2,
		ease: "hop",
		onStart: () => {
			gsap.to(".hero", {
				transform: "translate(-50%, -50%) scale(1)",
				duration: 2.25,
				ease: "power3.inOut",
				delay: 0.25,
			})

			gsap.to(".overlay", {
				clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
				duration: 2,
				delay: 0.5,
				ease: "hop",
			})

			gsap.to(".hero-img img", {
				transform: "scale(1)",
				duration: 2.25,
				ease: "power3.inOut",
				delay: 0.25,
			})

			gsap.to(".header h1 span", {
				y: 1,
				stagger: 0.1,
				duration: 2,
				ease: "power4.inOut",
				delay: 0.75,
			})
		},
	})
}
