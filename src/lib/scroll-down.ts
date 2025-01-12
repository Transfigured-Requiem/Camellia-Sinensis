export const handleScrollDownHalf = () => {
	window.scrollBy({
		top: window.innerHeight * 0.6, // Scroll by `size` times the viewport height
		behavior: "smooth", // Optional: smooth scroll animation
	})
}

export const handleScrollDownFull = () => {
	window.scrollBy({
		top: window.innerHeight * 1, // Scroll by `size` times the viewport height
		behavior: "smooth", // Optional: smooth scroll animation
	})
}
