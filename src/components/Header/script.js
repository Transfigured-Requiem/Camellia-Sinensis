import SplitType from "split-type"

export default function initMenuScript2() {
	document.addEventListener("DOMContentLoaded", function () {
		const menuToggle = document.querySelector(".menuToggle") // Target class directly
		const closeBtn = document.querySelector(".closeBtn") // Target class directly
		const menuContainer = document.querySelector(".menuContainer") // Target class directly
		const menuItems = document.querySelectorAll(".menuItem") // Target class directly

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
		const link = new SplitType(".menuItem a", {
			types: "words, chars",
		})
		const span = new SplitType(".menuItem span", {
			types: "words, chars",
		})
		const menuTitle = new SplitType(".menuTitle p", {
			types: "words, chars",
		})
		const menuContent = new SplitType(".menuContent p", {
			types: "words, chars",
		})

		const links = document.querySelectorAll(
			".menuItem, .menuSubItem .menuTitle, .menuSubItem .menuContent",
		)

		// Add hover effects to menu items
		document.querySelectorAll(".menuItem").forEach((item) => {
			const linkElement = item.querySelector(".menuItemLink a") // Target class directly
			if (linkElement) {
				const width = linkElement.offsetWidth
				item.querySelector(".menuItemLink .bgHover").style.width =
					width + 30 + "px" // Target class directly
				const spanElement = item.querySelector("span")
				if (spanElement) {
					spanElement.style.left = width + 40 + "px"
				}
			}

			// Access .char elements
			const chars = item.querySelectorAll("span .char")
			// console.log("Chars:", chars) // Debugging: Check if chars are found

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

		links.forEach((link) => {
			link.addEventListener("mouseenter", (even) => {
				const targetElement = event.currentTarget.querySelector(
					".menuItemLink a, .menuTitle p, .menuContent p",
				)
				if (targetElement) {
					addShuffleEffect(targetElement)
				}
				const spanElement = link.querySelector("span")
				if (spanElement) {
					addShuffleEffect(spanElement)
				}
			})
		})

		function shuffleAll() {
			links.forEach((link) => {
				const targetElement = link.querySelector(
					".menuItemLink a, menuTitle p, .menuContent p",
				)
				if (targetElement) {
					addShuffleEffect(targetElement)
				}
			})
		}

		function addShuffleEffect(element) {
			const chars = element.querySelector(".char")
			const originalText = [...chars].map((char) => char.textContent)
			const shuffleInterval = 10
			const resetDelay = 75
			const additionalDelay = 150

			chars.forEach((char, index) => {
				setTimeout(() => {
					const interval = setInterval(() => {
						char.textContent = String.fromCharCode(
							97 + Math.floor(Math.random() * 26),
						)
					}, shuffleInterval)

					setTimeout(
						() => {
							clearInterval(interval)
							char.textContent = originalText[index]
						},
						resetDelay + index * additionalDalay,
					)
				}, index * shuffleInterval)
			})
		}
	})
}
