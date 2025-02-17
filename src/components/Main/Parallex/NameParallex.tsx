"use client"
import Image from "next/image"
// import styles from './page.module.css'
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

export default function Home() {
	const firstText = useRef(null)
	const secondText = useRef(null)
	const slider = useRef(null)
	let xPercent = 0
	let direction = -1

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: 0.25,
				start: 0,
				end: window.innerHeight,
				onUpdate: (e) => (direction = e.direction * -1),
			},
			x: "-500px",
		})
		requestAnimationFrame(animate)
	}, [])

	const animate = () => {
		if (xPercent < -100) {
			xPercent = 0
		} else if (xPercent > 0) {
			xPercent = -100
		}
		gsap.set(firstText.current, { xPercent: xPercent })
		gsap.set(secondText.current, { xPercent: xPercent })
		requestAnimationFrame(animate)
		xPercent += 0.1 * direction
	}

	return (
		<main className="flex h-[10vh] items-center justify-center overflow-hidden border-y-4 border-dashed border-brand">
			{/* <Image src="/images/background.jpg" fill={true} alt="background" /> */}

			<div className="my-auto gap-0 text-brand">
				<div
					ref={slider}
					className="slider font-inter my-auto text-4xl font-bold opacity-10"
				>
					<p ref={firstText} className="">
						Taha - タハ - ⵟⴰⵀⴰ - 타하 - Τάχα - Таха - 塔哈 - Taha - タハ - ⵟⴰⵀⴰ
						- 타하 - Τάχα - Таха - 塔哈 -
					</p>
					<p ref={secondText}>
						Taha - タハ - ⵟⴰⵀⴰ - 타하 - Τάχα - Таха - 塔哈 - Taha - タハ - ⵟⴰⵀⴰ
						- 타하 - Τάχα - Таха - 塔哈 -
					</p>
				</div>
			</div>
			{/* <div className="bg-red-300"></div> */}
		</main>
	)
}
