"use client"
import React, { useEffect } from "react"

import Link from "next/link"
import Image from "next/image"
import heroBg from "public/_backgrounds/hero-bg.jpg"

// import { splitTextIntoSpans, animateCounter } from "@/lib/gsap-hero-animation"
import { gsap } from "gsap"
import { CustomEase } from "gsap/CustomEase"

function HeroGsap() {
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
	function splitTextIntoSpans(selector: string) {
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
	function animateCounter() {
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
	function revealLandingPage() {
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

	return (
		<div className="container">
			<div className="counter">
				<p>0</p>
			</div>

			<section className="hero font-chillax">
				<div className="overlay">
					<nav>
						{/* //  className="absolute left-0 top-0 flex w-full p-4" */}
						<div className="nav-col">
							<div className="nav-items">
								<Link href="#">zayno</Link>
							</div>
							<div className="nav-items">
								<p>digital studio</p>
							</div>
						</div>
						<div className="nav-col">
							<div className="nav-items">
								<Link href="#">work</Link>
								<Link href="#">studio</Link>
								<Link href="#">contact</Link>
							</div>
							<div className="nav-items">
								{" "}
								<Link href="#">twitter</Link>
								<Link href="#">instagram</Link>
							</div>
							<div className="nav-items">
								<p>wakanda, africa</p>
							</div>
						</div>
					</nav>

					<div className="header">
						<h1 className="font-chillax py-10">zayno</h1>
					</div>
					<div className="hero-img">
						{/* <img src="../../public/_backgrounds/hero-bg.jpg" alt="sda" /> */}
						<Image
							src={heroBg}
							alt="temp-image"
							width={1920}
							height={1080}
							className="h-full w-full object-cover"
						/>
					</div>
				</div>
			</section>
		</div>
	)
}

export default HeroGsap
