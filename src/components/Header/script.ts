import styles from "./styles.module.css"
import SplitType from "split-type"

export default function initMenuScript() {
	const menuToggle = document.querySelector(`.${styles.menuToggle}`)
	const closeBtn = document.querySelector(`.${styles.closeBtn}`)
	const menuContainer = document.querySelector(`.${styles.menuContainer}`)
	const menuItems = document.querySelectorAll(`.${styles.menuItem}`)

	// Error handling
	if (!menuToggle || !closeBtn || !menuContainer) {
		console.error("Required elements not found")
		return
	}

	menuToggle.addEventListener("click", () => {
		menuContainer.style.left = "0%"
		shuffleAll()
		animateMenuItems(menuItems, "in")
	})

	closeBtn.addEventListener("click", () => {
		menuContainer.style.left = "-50%"
		animateMenuItems(menuItems, "out")
	})

	function animateMenuItems(items, direction) {
		items.forEach((item, index) => {
			setTimeout(() => {
				item.style.left = direction === "in" ? "0px" : "-100px"
			}, index * 50)
		})
	}

	// Apply SplitType to text elements
	const link = new SplitType(`.${styles.menuItem} a`, {
		types: "chars",
	})
	const span = new SplitType(`.${styles.menuItem} span`, {
		types: "chars",
	})

	// Debugging: Log SplitType results
	console.log("SplitType Link:", link)
	console.log("SplitType Span:", span)

	// Add hover effects to menu items
	document.querySelectorAll(`.${styles.menuItem}`).forEach((item) => {
		const linkElement = item.querySelector(`.${styles.menuItemLink} a`)
		if (linkElement) {
			const width = linkElement.offsetWidth
			item.querySelector(
				`.${styles.menuItemLink} .${styles.bgHover}`,
			).style.width = width + 30 + "px"
			const spanElement = item.querySelector("span")
			if (spanElement) {
				spanElement.style.left = width + 40 + "px"
			}
		}

		// Access .char elements
		const chars = item.querySelectorAll("span .word .char")
		console.log("Chars:", chars) // Debugging: Check if chars are found

		function colorChars(chars) {
			chars.forEach((char, index) => {
				setTimeout(() => {
					char.classList.add("char-active") // Add class to each char
				}, index * 50)
			})
		}

		function clearColorChars(chars) {
			chars.forEach((char) => {
				char.classList.remove("char-active") // Remove class from each char
			})
		}

		linkElement.addEventListener("mouseenter", () => {
			colorChars(chars)
		})

		linkElement.addEventListener("mouseleave", () => {
			clearColorChars(chars)
		})
	})
}
