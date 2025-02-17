import React, { useEffect, useRef, cloneElement, useState } from "react"
import { gsap } from "gsap"

const StaggeredTextReveal = ({
	children,
	delay = 0,
	inView = false,
	preloaderFinished = false,
}) => {
	const textRef = useRef(null)
	const [startAnimation, setStartAnimation] = useState(false)

	const triggerAnimation = () => {
		const letters = textRef.current.querySelectorAll(".letter")

		// GSAP timeline for staggered animations
		const timeline = gsap.timeline()

		// Step 1: Staggered baseline reveal for individual letters
		timeline.fromTo(
			letters,
			{ y: "30%", opacity: 0 }, // Start below the baseline
			{
				y: "0%", // End at the baseline
				opacity: 1,
				stagger: 0.2, // Delay between letters
				duration: 0.8,
				ease: "power3.out",
			},
		)

		// Step 2: Scale animation for the entire word
		timeline.fromTo(
			textRef.current,
			{ scale: 0.8 }, // Start smaller
			{ scale: 1, duration: 0.5, ease: "power2.out" },
			"+=0.1", // Small delay after staggered animation
		)
	}

	useEffect(() => {
		let observer

		// Ensure preloader has finished
		if (preloaderFinished) {
			// Option 1: Start animation after a delay
			if (!inView && delay > 0) {
				const timeout = setTimeout(() => setStartAnimation(true), delay)
				return () => clearTimeout(timeout)
			}

			// Option 2: Start animation when in view
			if (inView) {
				observer = new IntersectionObserver(
					([entry]) => {
						if (entry.isIntersecting) {
							setStartAnimation(true)
							observer.disconnect()
						}
					},
					{ threshold: 0.1 },
				)

				if (textRef.current) observer.observe(textRef.current)
			}
		}

		return () => observer?.disconnect()
	}, [delay, inView, preloaderFinished])

	useEffect(() => {
		if (startAnimation) {
			triggerAnimation()
		}
	}, [startAnimation])

	const wrapWithSpan = (child, key) => {
		if (typeof child === "string") {
			return Array.from(child).map((char, index) => (
				<span
					key={`${key}-${index}`}
					className="letter-wrapper"
					style={{
						display: "inline-block",
						overflow: "hidden",
						verticalAlign: "bottom",
					}}
				>
					<span
						className="letter"
						style={{
							display: "inline-block",
							transformOrigin: "center bottom",
							opacity: startAnimation ? 1 : 0, // Hide initially
							y: startAnimation ? "0%" : "30%", // Start below the baseline
						}}
					>
						{char === " " ? "\u00A0" : char}
					</span>
				</span>
			))
		}
		return (
			<span
				key={key}
				className="letter-wrapper"
				style={{
					display: "inline-block",
					overflow: "hidden",
					verticalAlign: "bottom",
				}}
			>
				{cloneElement(child, {
					className: `${child.props.className || ""} letter`,
					style: {
						...child.props.style,
						display: "inline-block",
						transformOrigin: "center bottom",
						opacity: startAnimation ? 1 : 0, // Hide initially
						y: startAnimation ? "0%" : "30%", // Start below the baseline
					},
				})}
			</span>
		)
	}

	return (
		<h1
			ref={textRef}
			style={{
				display: "inline-block",
				transformOrigin: "center",
				opacity: startAnimation ? 1 : 0, // Hide initially
			}}
		>
			{React.Children.map(children, (child, index) =>
				wrapWithSpan(child, index),
			)}
		</h1>
	)
}

export default StaggeredTextReveal
