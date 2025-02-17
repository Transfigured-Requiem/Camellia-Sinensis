import { motion } from "framer-motion"
import styles from "./style.module.scss"

import { X, ChevronRight } from "lucide-react"

export default function Button({ isActive, toggleMenu }) {
	return (
		<div className={styles.button}>
			<motion.div
				className={styles.slider}
				animate={{ top: isActive ? "-100%" : "0%" }}
				transition={{ duration: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }}
			>
				<div
					className={styles.el}
					onClick={() => {
						toggleMenu()
					}}
				>
					<PerspectiveText label={<ChevronRight className="size-8" />} />
				</div>
				<div
					className={styles.el}
					onClick={() => {
						toggleMenu()
					}}
				>
					<PerspectiveText label={<X />} />
				</div>
			</motion.div>
		</div>
	)
}

function PerspectiveText({ label }) {
	return (
		<div className={styles.perspectiveText}>
			<p>{label}</p>
			{/* <p>{label}</p> */}
		</div>
	)
}
