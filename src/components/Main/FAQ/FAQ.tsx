"use client"
import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"

const FAQ_DATA = [
	{
		question: "What is your return policy?",
		answer: "Our return policy allows returns within 30 days of purchase.",
	},
	{
		question: "How do I track my order?",
		answer:
			"You can track your order using the tracking number provided in your confirmation email.",
	},
	{
		question: "Do you offer international shipping?",
		answer: "Yes, we offer international shipping to most countries.",
	},
	{
		question: "What payment methods do you accept?",
		answer: "We accept credit cards, PayPal, and Apple Pay.",
	},
	{
		question: "How can I contact customer support?",
		answer:
			"You can contact us via email at support@example.com or call us at +123-456-7890.",
	},
	{
		question: "Do you have a physical store?",
		answer:
			"Yes, our physical store is located at 123 Main Street, City, Country.",
	},
	{
		question: "Can I cancel my order?",
		answer: "You can cancel your order within 24 hours of placing it.",
	},
	{
		question: "What is your warranty policy?",
		answer: "We offer a 1-year warranty on all products.",
	},
]

export default function FAQSection() {
	const containerRef = useRef<HTMLDivElement>(null)
	const itemsRef = useRef<HTMLDivElement[]>([])

	useEffect(() => {
		const container = containerRef.current
		const items = itemsRef.current

		if (!container || items.length === 0) return

		const radius = 150 // Radius of the cylinder
		const angleStep = 360 / items.length
		let currentAngle = 0

		// Position items in a cylinder
		items.forEach((item, index) => {
			const angle = index * angleStep
			gsap.set(item, {
				rotationX: -angle,
				y: radius * Math.sin((angle * Math.PI) / 180),
				z: radius * Math.cos((angle * Math.PI) / 180),
				opacity: 0.5,
				transformOrigin: "50% 50% -150px",
			})
		})

		// Handle scroll within container
		const handleScroll = (e: WheelEvent) => {
			e.preventDefault()
			e.stopPropagation()

			if (e.deltaY > 0) {
				currentAngle -= angleStep
			} else {
				currentAngle += angleStep
			}

			gsap.to(items, {
				rotationX: (i) => -currentAngle - i * angleStep,
				y: (i) =>
					radius * Math.sin(((currentAngle + i * angleStep) * Math.PI) / 180),
				z: (i) =>
					radius * Math.cos(((currentAngle + i * angleStep) * Math.PI) / 180),
				opacity: (i) =>
					Math.cos(((currentAngle + i * angleStep) * Math.PI) / 180) * 0.5 +
					0.5,
				duration: 0.5,
			})
		}

		container.addEventListener("wheel", handleScroll, { passive: false })

		return () => {
			container.removeEventListener("wheel", handleScroll)
		}
	}, [])

	return (
		<div className="flex h-screen w-full">
			{/* Left Side: FAQ Title */}
			<div className="flex w-1/3 items-center justify-center bg-background">
				<h1 className="text-7xl font-bold">FAQ</h1>
			</div>

			{/* Right Side: Rotating FAQ */}
			<div
				ref={containerRef}
				className="perspective-1000 sticky top-0 flex h-screen w-2/3 items-center justify-center overflow-hidden bg-brand-red"
			>
				<div className="relative h-[400px] w-full">
					{FAQ_DATA.map((faq, index) => (
						<div
							key={index}
							ref={(el) => (itemsRef.current[index] = el!)}
							className="absolute left-0 right-0 mx-auto w-3/4 transform space-y-4 rounded-lg bg-background p-6 shadow-lg transition-all duration-300"
						>
							<h2 className="text-xl font-bold">{faq.question}</h2>
							<p className="text-gray-600">{faq.answer}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
