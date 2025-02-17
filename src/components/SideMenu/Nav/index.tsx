import styles from "./style.module.scss"
import { motion } from "framer-motion"
import { links, footerLinks } from "./data"
import { perspective, slideIn } from "./anim"
import ShuffleText from "@/components/Header/ShuffleText"
import { ArrowUpRight } from "lucide-react"

export default function Index() {
	return (
		<div className={styles.nav}>
			<div className={styles.body}>
				{links.map((link, i) => {
					const { title, href } = link

					return (
						<div className="">
							<div key={`b_${i}`} className={styles.linkContainer}>
								<motion.div
									href={href}
									custom={i}
									variants={perspective}
									initial="initial"
									animate="enter"
									exit="exit"
								>
									<a>
										<ShuffleText text={title} />
										<div className={styles.bgHover}></div>
										{/* </ShuffleText> */}
									</a>
								</motion.div>
							</div>
						</div>
					)
				})}
			</div>
			<motion.div className={styles.footer}>
				{footerLinks.map((link, i) => {
					const { title, href } = link
					return (
						<motion.a
							variants={slideIn}
							custom={i}
							initial="initial"
							animate="enter"
							exit="exit"
							key={`f_${i}`}
							href={href}
						>
							<div className="flex flex-row items-center">
								<ArrowUpRight className="size-5 text-brand-red" />
								<ShuffleText text={title} />
							</div>
						</motion.a>
					)
				})}
			</motion.div>
		</div>
	)
}
