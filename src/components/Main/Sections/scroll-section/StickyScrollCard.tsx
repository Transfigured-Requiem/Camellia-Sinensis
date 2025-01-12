"use client"

import React from "react"
import Image from "next/image"

import { StickScrollCardGradientProps, StickyScrollCardProps } from "@/types"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import {
	AlanLogo,
	ArcLogo,
	OpenSeaLogo,
	PitchLogo,
} from "public/_customerlogos/CustomerLogos"
import { Noise } from "@/shared/CardNoise"

import { cn } from "@/lib/utils"
import { handleScrollDownHalf } from "@/lib/scroll-down"
import { useFeatureStore } from "@/lib/store"

import { servicesLinks } from "@/data/ServiceLinks"
import { stickScrollFeatures } from "@/data/StickyScrollFeatures"
import { stickScrollBadges } from "./StickyScrollCardBadges"
import MaxWidthWrapper from "@/shared/rules/MaxWidthWrapper"
import { StickyScrollTitle } from "./StickyScrollTitles"
import { Badge } from "@/components/ui/badge"
import {
	borderColorPalettes,
	backgroundColorPalettes,
} from "@/data/ColorPalletes"

import mail_1 from "/public/_static/sticky-scroll-section/mail-1.png"
import mail_3 from "/public/_static/sticky-scroll-section/mail-3.png"
import mail_4 from "/public/_static/landing/analytics.webp"
import BrandDevImage from "/public/_sticky/branddev.svg"
import WebDevImage from "/public/_sticky/webdev.svg"
import ConsultingImage from "/public/_sticky/consulting.svg"
import ContentCreationImage from "/public/_sticky/contentcreation.svg"
import MarketingImage from "/public/_sticky/market.svg"
import CopywritingImage from "/public/_sticky/copywriting.svg"
// import BrandDevImage from "/public/_sticky/webdev.svg"
import Link from "next/link"

import { BrandDevLogo } from "public/_sticky/StickyLogos"
const StickyScrollCard = ({
	gradient,
	children,
	id,
}: StickScrollCardGradientProps) => {
	const inViewFeature = useFeatureStore((state) => state.inViewFeature)
	return (
		<div
			className={cn(
				"absolute inset-0 h-full w-full overflow-x-hidden overflow-y-hidden rounded-3xl bg-gradient-to-br transition-opacity",
				gradient,
				inViewFeature === id ? "opacity-100" : "opacity-0",
			)}
		>
			{/* <Noise /> */}

			<Button
				variant="ghost"
				onClick={handleScrollDownHalf}
				className="-100 absolute bottom-4 right-4 rounded-3xl bg-black/40 px-4 py-2 text-white shadow-xl transition-all duration-300 hover:bg-black/80"
			>
				<ChevronDown className="size-4 transition-all duration-200 group-hover:translate-y-[10%]" />
			</Button>
			<Button
				variant="ghost"
				className="-100 absolute bottom-4 left-4 rounded-3xl bg-black/40 px-4 py-2 text-white shadow-xl transition-all duration-300 hover:bg-black/80"
			>
				<Link href={servicesLinks.main}>Discover more</Link>
			</Button>

			{children}
		</div>
	)
}

export const BrandDevCard = ({ id }: StickyScrollCardProps) => {
	return (
		<StickyScrollCard id={id} gradient="from-[#a4ffaa] to-[#43d64e]">
			{/* <AlanLogo className="absolute left-[5%] top-[10%] w-96" fill="#222" />

			<ArcLogo className="absolute left-[25%] top-[30%] w-80" />
			<OpenSeaLogo className="absolute left-[20%] top-[50%] w-64" />
			<PitchLogo className="absolute left-[30%] top-[70%] w-96" /> */}
			<Image
				src={BrandDevImage}
				className="absolute left-1/2 top-1/2 w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-xl"
				alt=""
			/>
			{/* <ul className="p-10">>
				{stickScrollBadges[1].map((feature) => (
					<div className="mx-auto mt-3 max-w-3xl text-zinc-400 sm:mt-4">
						{feature.description.map((desc, index) => {
							const borderColors = borderColorPalettes[feature.id]
							const borderColor = borderColors[index % borderColors.length] // Rotate through shades

							const bgColors = backgroundColorPalettes[feature.id]
							const bgColor = bgColors[index % bgColors.length] // Rotate through shades
							return (
								<Badge
									key={index}
									className={`${bgColor} border-2 ${borderColor} mb-2 mr-2 text-sm text-foreground`}
									variant="ghost"
								>
									{desc}
								</Badge>
							)
						})}
					</div>
				))}
			</ul> */}
		</StickyScrollCard>
	)
}

export const CopwritingCard = ({ id }: StickyScrollCardProps) => {
	return (
		<StickyScrollCard id={id} gradient="from-[#d9b3ff] to-[#9658e8]">
			{/* <Image
				src={mail_1}
				alt="screenshot"
				className="absolute left-[50%] top-[20%] w-[100%] rounded-xl border"
			/>
			<Image
				src={mail_4}
				alt="screenshot"
				className="absolute -left-[20%] top-[10%] w-[60%] rounded-xl border"
			/>
			<Image
				src={mail_3}
				alt="screenshot"
				className="absolute left-[10%] top-[70%] w-[50%] rounded-xl border"
			/> */}
			<Image
				src={CopywritingImage}
				className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-xl"
				alt=""
			/>
		</StickyScrollCard>
	)
}

export const MarketingCard = ({ id }: StickyScrollCardProps) => {
	return (
		<StickyScrollCard id={id} gradient="from-[#ffec99] to-[#ffcc00]">
			<Image
				src={MarketingImage}
				className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-xl"
				alt=""
			/>
		</StickyScrollCard>
	)
}

export const WebDevCard = ({ id }: StickyScrollCardProps) => {
	return (
		<StickyScrollCard id={id} gradient="from-[#c7eaff] to-[#5cc4ff]">
			<Image
				src={WebDevImage}
				className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-xl"
				alt=""
			/>
		</StickyScrollCard>
	)
}

export const ConsultingCard = ({ id }: StickyScrollCardProps) => {
	return (
		<StickyScrollCard id={id} gradient="from-[#c87a7a] to-[#ff2231]">
			<Image
				src={ConsultingImage}
				className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-xl"
				alt=""
			/>
		</StickyScrollCard>
	)
}

export const ContentCreationCard = ({ id }: StickyScrollCardProps) => {
	return (
		<StickyScrollCard id={id} gradient="from-[#ffcc80] to-[#ff8833]">
			<Image
				src={ContentCreationImage}
				className="absolute left-1/2 top-1/2 w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-xl"
				alt=""
			/>
		</StickyScrollCard>
	)
}

export const AnalyticsCard = ({ id }: StickyScrollCardProps) => {
	return (
		<StickyScrollCard
			id={id}
			gradient="from-[#ffcccc] to-[#ff4444]"
		></StickyScrollCard>
	)
}
