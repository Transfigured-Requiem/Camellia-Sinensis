import { HighlighterItem, HighlightGroup } from "./Highlighter"
import Link from "next/link"
import { Particles } from "./Particles"
import { ArrowRight, Check } from "lucide-react"
import { useCallback, useId, useMemo } from "react"
import { cn } from "@/lib/utils"
import HeadingCentered from "../../../shared/HeadingCentered"
import { Button } from "../../ui/button"
import { Badge } from "../../ui/badge"

import CustomButton from "@/shared/CustomButton"
import { link } from "fs"
import { siteConfig } from "@/config/site"

const tiers = [
	{
		name: "Free",
		price: 0,
		// pricedec: ".00",
		description:
			"Ideal for users who want to test out the services before committing",
		features: [
			"No credit card required",
			"2-week free trial period ",
			"Access to limited samples and templates",
			"Standard Support",
		],
		cta: "Get Started for Free",
		link: siteConfig.links.instagram,
	},
	{
		name: "Pro",
		start: "*Starts from",
		price: 99,
		// pricedec: ".99",
		description:
			"This plan caters to businesses that require a comprehensive digital marketing and web development solution without the need for custom pricing.",
		features: [
			"Full access to any one of the 6 main services (per service)",
			"Dedicated account manager for support",
			"Monthly performance reports",
			"Optimization recommendations",
			"Priority support",
			"Ability to scale services based on demand",
		],
		cta: "Go Pro now",
		link: siteConfig.links.instagram,
	},
	{
		name: "Enterprise",
		price: "Get quote",
		description:
			"The Custom Plan is ideal for larger businesses or enterprises that require a more personalized approach.",
		features: [
			"Tailored solutions based on the client's specific needs",
			"Priority support with 24/7 access",
			"Custom feature development and integrations",
			"Dedicated project manager and team of experts",
			"Ongoing strategy and optimization sessions",
		],
		cta: "Scale Up",
		link: siteConfig.links.instagram,
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

export const PricingGrids: React.FC = () => {
	return (
		<HighlightGroup className="group grid h-full gap-6 md:grid-cols-12">
			{/* Box #1 */}

			{tiers.map((tier, i) => (
				<div
					key={tier.name}
					className="group/item h-full md:col-span-6 lg:col-span-4"
					data-aos="fade-down"
				>
					<HighlighterItem>
						<div className="relative z-20 h-full min-h-[500px] overflow-hidden rounded-[inherit] bg-zinc-950">
							<Particles
								className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
								quantity={(i + 1) ** 2 * 10}
								color={["#fde68a", "#0bf982", "#d4d4d4"][i]}
								vy={-0.2}
							/>
							<div className="flex flex-col">
								{/* Radial gradient */}
								<div
									className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
									aria-hidden="true"
								>
									<div className="translate-z-0 absolute inset-0 rounded-full bg-zinc-800 blur-[80px]" />
								</div>
								{/* Text */}

								<div className="p-8">
									<h3
										id={tier.name}
										className="text-lg font-semibold leading-8"
									>
										{tier.name}
										{tier.name === "Pro" && (
											<Badge
												className="mb-2 ml-4 bg-emerald-600/40 text-xs text-brand"
												variant="ghost"
											>
												Most Popular
											</Badge>
										)}
										{tier.name === "Free" && (
											<Badge
												className="mb-2 ml-4 bg-amber-600/40 text-xs text-amber-400"
												variant="ghost"
											>
												Free Trial
											</Badge>
										)}
									</h3>

									<h3 className="mt-6 inline-flex items-baseline bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60 bg-clip-text pb-1 font-bold text-transparent">
										<span className="text-4xl">
											{typeof tier.price === "number"
												? `$${tier.price}`
												: "Get A Quote"}
											{tier.pricedec && (
												<span className="text-sm">{tier.pricedec}</span>
											)}
										</span>
										<span className="text-lg">
											{typeof tier.price === "number" ? "/ month" : ""}
										</span>
									</h3>
									<div className="">
										<span>
											{tier.start && (
												<span className="text-xs text-foreground-lighter">
													{tier.start}
												</span>
											)}
										</span>
									</div>
									<p className="mt-4 text-xs leading-6 text-zinc-400">
										{tier.description}
									</p>
									<ul
										role="list"
										className="mt-8 space-y-3 text-sm leading-6 text-zinc-300"
									>
										{tier.features.map((feature) => (
											<li key={feature} className="flex gap-x-3">
												<Check
													className={cn("h-6 w-5 flex-none", {
														"text-amber-400": i === 0,
														"text-brand": i === 1,
														"text-neutral-300": i === 2,
													})}
													aria-hidden="true"
												/>
												{feature}
											</li>
										))}
									</ul>
									{/* <div className="mt-16 w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"> */}
									{/* Get Started{" "} */}
									{/* <Button
										variant="ghoster"
										className="w-full justify-center flex"
									> */}
									<CustomButton
										appearance="sec"
										text={tier.cta}
										href={tier.link}
										arrow
										className="mx-auto mt-12 flex min-w-[220px]"
									/>
									{/* <Link
										className="mt-12 mx-auto  flex  w-[190px] items-center font-semibold text-foreground shadow-sm gap-1.5 relative overflow-hidden rounded-full p-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
										href="https://www.google.com"
										rel="noopener noreferrer"
										// onClick={handleClick}
									>
										<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#292d2e_0%,#3f4546_50%,#292d2e_100%)]" />
										<div className="inline-flex h-10 w-full px-4 py-2 cursor-pointer items-center justify-center rounded-full bg-black/85 group-hover:bg-transparent/50 transition-all duration-500  text-sm font-medium text-foreground backdrop-blur-3xl">
											Learn more
											{/* <ArrowRight className="size-4 ml-1  transition-all group-hover:translate-x-1/4" /> */}
									{/* <div className="">
												
											</div> */}
									{/* <ArrowRight className="w-3 h-3 tracking-normal text-brand group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
										</div>
									</Link>  */}

									{/* </Button> */}
									{/* <ArrowRight className="w-3 h-3 tracking-normal text-red-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" /> */}
									{/* </div> */}
								</div>
							</div>
						</div>
					</HighlighterItem>
				</div>
			))}
			{/* <div
				className="h-full md:col-span-6 lg:col-span-12  group/item"
				data-aos="fade-down"
			>
				<HighlighterItem>
					<div className="relative h-full bg-zinc-950 rounded-[inherit] z-20 overflow-hidden">
						<Particles
							className="absolute inset-0 -z-10 opacity-10 group-hover/item:opacity-100 transition-opacity duration-1000 ease-in-out"
							quantity={200}
						/>
						<div className="flex flex-col"> */}
			{/* Radial gradient */}
			{/* <div
								className="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
								aria-hidden="true"
							>
								<div className="absolute inset-0 translate-z-0 bg-zinc-900 rounded-full blur-[80px]" />
							</div> */}
			{/* Text */}

			{/* <div className="p-8">
								<h3 className="text-lg font-semibold leading-8">Self Hosted</h3>

								<p className="mt-4 text-sm leading-6 text-zinc-400">
									Self host and maintain Highstorm on your own servers
								</p>
								<div className="mt-16 ">
									<Link
										className="font-medium  whitespace-nowrap transition duration-150 ease-in-out text-zinc-100 hover:text-white group"
										href="https://github.com/chronark/highstorm"
									>
										Deploy your own
									</Link>
								</div>
							</div>
						</div>
					</div>
				</HighlighterItem>
			</div> */}
		</HighlightGroup>
	)
}
