import React, { useState } from "react"
import { motion } from "framer-motion"
import { disperse } from "./animation"

export default function TextDisperse({ children, setBackground }) {
	const [isAnimated, setIsAnimated] = useState(false)

	const getChars = (element) => {
		let chars = []

		const processChild = (child) => {
			if (typeof child === "string") {
				// Split strings into individual characters
				child.split("").forEach((char, i) => {
					chars.push(
						<motion.span
							custom={chars.length + i}
							variants={disperse}
							animate={isAnimated ? "open" : "closed"}
							key={char + chars.length + i}
							style={{
								display: "inline-block",
								verticalAlign: "middle",
								lineHeight: 1, // Ensure consistent line height
							}}
						>
							{char}
						</motion.span>,
					)
				})
			} else if (React.isValidElement(child)) {
				// Wrap icons or other JSX elements in motion.span
				chars.push(
					<motion.span
						custom={chars.length}
						variants={disperse}
						animate={isAnimated ? "open" : "closed"}
						key={chars.length}
						style={{
							display: "inline-flex",
							verticalAlign: "middle",
							lineHeight: 1, // Match line height with text
							fontSize: "inherit", // Inherit font size for proper scaling
						}}
					>
						{child}
					</motion.span>,
				)
			}
		}

		React.Children.forEach(element.props.children, processChild)

		return chars
	}

	const manageMouseEnter = () => {
		setBackground(true)

		setIsAnimated(true)
	}

	const manageMouseLeave = () => {
		setBackground(false)

		setIsAnimated(false)
	}

	return (
		<div
			style={{ cursor: "pointer" }}
			onMouseEnter={manageMouseEnter}
			onMouseLeave={manageMouseLeave}
			className="introLine"
		>
			{getChars(children)}
		</div>
	)
}
