"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Noise } from "@/shared/CardNoise"

export const ThemeImage = ({ src, ...props }: any) => {
	const { resolvedTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<span className="next-image--dynamic-fill">
			{/* <Noise /> */}

			<Image
				sizes="(max-width: 768px) 120vw, (max-width: 1200px) 100vw, 2000px"
				{...props}
				className={props.className}
				alt=""
				src={
					typeof src === "string"
						? src
						: mounted && resolvedTheme?.includes("dark")
							? src.dark
							: src.light
				}
			/>
		</span>
	)
}
