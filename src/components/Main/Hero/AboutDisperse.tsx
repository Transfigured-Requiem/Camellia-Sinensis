"use client"

import TextDisperse from "@/shared/TextDisperse/TextDisperseEffect"
import { ArrowUpRight, Instagram, Twitter } from "lucide-react"
import { useRef } from "react"
import gsap from "gsap"
// import styles from "./page.module.css"

export default function AboutDisperse() {
	const background = useRef(null)
	const setBackground = (isActive) => {
		gsap.to(background.current, { opacity: isActive ? 0.9 : 0 })
	}
	return (
		<main className="font-yuji ml-2 flex items-center justify-center uppercase leading-6">
			<div className="text-white">
				<div className="introLine">
					<p>taha.</p>
					<p>Video</p>
					<p>&</p>
				</div>

				<div className="introLine"></div>

				<div className="introLine">
					<p>Photo</p>
					<p>Editing</p>
				</div>
				{/* <TextDisperse setBackground={setBackground}>
					<p>タハ</p>
				</TextDisperse> */}
				{/* <TextDisperse setBackground={setBackground}>
					<p>タハ</p>
				</TextDisperse>
				<TextDisperse setBackground={setBackground}>
					<p>ⵟⴰⵀⴰ</p>
				</TextDisperse>
				<TextDisperse setBackground={setBackground}>
					<p>타하</p>
				</TextDisperse>
				<TextDisperse setBackground={setBackground}>
					<p>Τάχα</p>
				</TextDisperse> */}

				{/* <br /> */}

				<TextDisperse setBackground={setBackground}>
					<p>
						+7 years of experience
						<Instagram className="size-[2rem] text-brand-red" />
					</p>
				</TextDisperse>
				<TextDisperse setBackground={setBackground}>
					<p>
						Twitter
						<Twitter className="size-[2rem] text-blue-300" />
					</p>
				</TextDisperse>
				<TextDisperse setBackground={setBackground}>
					<p>
						UpWork <ArrowUpRight className="size-[2rem] text-brand-green" />
					</p>
				</TextDisperse>

				<TextDisperse setBackground={setBackground}>
					<p>
						Email <ArrowUpRight className="size-[2rem] text-brand" />
					</p>
				</TextDisperse>
			</div>
			<div
				ref={background}
				className="pointer-events-none absolute bottom-0 right-0 h-full w-full bg-black opacity-0"
			></div>
		</main>
	)
}
