"use client"
import React, { useEffect, useRef } from "react"
import { StickyScrollTitleProps } from "@/types"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { useFeatureStore } from "@/lib/store"

export const StickyScrollTitle = ({ children, id }: StickyScrollTitleProps) => {
	const ref = useRef<HTMLHeadingElement>(null)
	// const documentRef = useRef(document)

	const isInView = useInView(ref, {
		margin: "-20% 0px -20% 0px",
		// root: documentRef,
	})

	const setInViewFeature = useFeatureStore((state) => state.setInViewFeature)
	const inViewFeature = useFeatureStore((state) => state.inViewFeature)

	useEffect(() => {
		if (isInView) setInViewFeature(id)
		if (!isInView && inViewFeature === id) setInViewFeature(null)
	}, [isInView, id, setInViewFeature, inViewFeature])

	// console.log(isInView, children)
	return (
		<h1
			ref={ref}
			className={cn(
				"text-3xl font-bold tracking-tight sm:text-4xl transition-colors",
				isInView ? "text-foreground" : "text-zinc-200/15"
			)}
		>
			{children}
		</h1>
	)
}
