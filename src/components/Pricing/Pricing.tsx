import { HighlighterItem, HighlightGroup } from "./Highlighter"
import Link from "next/link"
import { Particles } from "./Particles"
import { ArrowRight, Check } from "lucide-react"
import { useCallback, useId, useMemo } from "react"
import { cn } from "@/lib/utils"
import HeadingCentered from "../../shared/HeadingCentered"
import { PricingGrids } from "./GlowingGrids"

const tiers = [
	{
		name: "Free Trial",
		price: 0,
		description: "Free work samples",
		features: ["10k Events per month", "1 Alert"],
		cta: "Get Started for Free",
	},
	{
		name: "Pro",
		price: 99,
		description: "For larger teams with higher demand",
		features: ["50k Events per month", "10 Alerts"],
		cta: "Try Pro for 14 days",
	},
	{
		name: "Enterprise",
		price: "Get a quote",
		description: "For businesses with custom needs",
		features: ["500k Events per month", "Unlimited Alerts"],
		cta: "Scale Up",
	},
]

const _useColor = (hash: string): [number, number, number] => {
	return useMemo(
		() => [
			Math.floor(Math.random() * 256),
			Math.floor(Math.random() * 256),
			Math.floor(Math.random() * 256),
		],
		[],
	)
}

export const Pricing: React.FC = () => {
	return (
		<section className="relative">
			{/* Radial gradient */}
			<div
				className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
				aria-hidden="true"
			>
				<div className="absolute left-1/2 top-0 flex aspect-square w-1/3 -translate-x-1/2 translate-y-1/4 items-center justify-center opacity-30">
					<div className="translate-z-0 absolute inset-0 rounded-full bg-brand opacity-30 blur-[70px]" />
				</div>
			</div>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="py-12 md:py-20">
					{/* Content */}
					<HeadingCentered
						teaser="Pricing plans"
						heading="Simple and transparent"
						subheading="Currently Brand it Right offers 100% free service test, no credit card required!"
					/>
					{/* <HeadingCentered
						// teaser="Pricing plans"
						// heading="Simple and transparent"
						subheading="Currently Brand it Right offers 100% free service test, no credit card required!"
					/> */}

					<PricingGrids />
				</div>
			</div>
		</section>
	)
}
