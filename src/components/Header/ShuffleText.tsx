import React, { useRef, useEffect } from "react"
import styles from "@/components/SideMenu/style.module.scss"

const ShuffleText = ({ text, children }) => {
	const h1Ref = useRef(null)
	const originalTextRef = useRef(text) // Store the original text
	const shuffleIntervalRef = useRef(null) // Store the interval ID

	const shuffleText = () => {
		const element = h1Ref.current
		const originalText = originalTextRef.current
		const chars = "ABCDEFGHJKLMNOPQRSTUVWXYZ"
		let shuffleCount = 0

		// Clear any existing interval
		if (shuffleIntervalRef.current) {
			clearInterval(shuffleIntervalRef.current)
		}

		shuffleIntervalRef.current = setInterval(() => {
			const shuffledText = originalText
				.split("")
				.map((char, index) => {
					if (index < shuffleCount) {
						return originalText[index] // Restore original characters progressively
					}
					return chars[Math.floor(Math.random() * chars.length)] // Random character
				})
				.join("")

			element.innerText = shuffledText

			shuffleCount++

			// Stop the interval and restore the original text when done
			if (shuffleCount > originalText.length) {
				clearInterval(shuffleIntervalRef.current)
				element.innerText = originalText
			}
		}, 50)
	}

	const handleMouseEnter = () => {
		shuffleText()
	}

	const handleMouseLeave = () => {
		// Clear the interval and restore the original text immediately
		if (shuffleIntervalRef.current) {
			clearInterval(shuffleIntervalRef.current)
			h1Ref.current.innerText = originalTextRef.current
		}
	}

	// Cleanup the interval on component unmount
	useEffect(() => {
		return () => {
			if (shuffleIntervalRef.current) {
				clearInterval(shuffleIntervalRef.current)
			}
		}
	}, [])

	return (
		<span
			ref={h1Ref}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{ cursor: "pointer" }}
			// className="font-whyte font-bold"
		>
			{text}
			{/* <div </div> */}
			{/* {children} Render children (e.g., .bgHover) */}
		</span>
	)
}

export default ShuffleText
