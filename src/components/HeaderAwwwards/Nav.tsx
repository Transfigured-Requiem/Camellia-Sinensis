import React, { useState } from "react"
import styles from "./nav.module.css"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { menuSlide } from "./animation"
import CustomLink from "./Link"

const navItems = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Work",
		href: "/work",
	},
	{
		title: "About",
		href: "/about",
	},
	{
		title: "Contact",
		href: "/contact",
	},
]

export default function Nav() {
	const pathname = usePathname()
	const [selectedIndicator, setSelectedIndicator] = useState(pathname)

	return (
		<motion.div
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className={styles.menu}
		>
			<div className={styles.body}>
				<div
					onMouseLeave={() => {
						setSelectedIndicator(pathname)
					}}
					className={styles.nav}
				>
					<div className={styles.header}>
						<p>Navigation</p>
					</div>
					{navItems.map((data, index) => {
						return (
							<CustomLink
								key={index}
								data={{ ...data, index }}
								isActive={selectedIndicator == data.href}
								setSelectedIndicator={setSelectedIndicator}
							></CustomLink>
						)
					})}
				</div>
				<div className={styles.footer}>
					<a>Awwwards</a>
					<a>Instagram</a>
					<a>Dribble</a>
					<a>LinkedIn</a>
				</div>
			</div>
		</motion.div>
	)
}
