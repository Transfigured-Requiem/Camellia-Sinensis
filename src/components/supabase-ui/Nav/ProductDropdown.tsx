import React from "react"
import Image from "next/image"
// import { useRouter } from "next/navigation"
import Link from "next/link"

import { useBreakpoint } from "@/lib/useBreakpoint"
// import { ChevronRight, TextLink } from 'ui'
import { ChevronRight } from "lucide-react"
import TextLink from "../TextLink"

// import { NavigationMenuLink } from 'ui/src/components/shadcn/ui/navigation-menu'
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import MenuItem from "./MenuItem"

import ComparisonsData from "@/data/Comparisons"
import CustomersData from "@/data/CustomerStories"
import SolutionsData from "@/data/Solutions"

import { AtSign } from "lucide-react"

const ProductDropdown = () => {
	// const { basePath } = useRouter()
	const isTablet = useBreakpoint(1279)

	return (
		<div className="flex flex-col xl:flex-row">
			<ul className="grid w-[700px] grid-cols-2 gap-2 bg-background px-6 py-6 xl:w-[360px] xl:grid-cols-1">
				{Object.values(SolutionsData).map((component) => (
					<NavigationMenuLink key={component.name} asChild>
						<MenuItem
							title={component.name}
							href={component.url}
							description={component.description_short}
							icon={component.icon}
							className="h-fit"
							hasChevron
						/>
					</NavigationMenuLink>
				))}
			</ul>
			<div className="bg-overlay grid w-full grid-cols-5 gap-8 border-t px-10 py-8 xl:flex xl:w-[500px] xl:flex-col xl:border-l xl:border-t-0">
				<div className="col-span-3 xl:w-auto">
					<Link
						href="/#tweets"
						className="group mb-6 flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-foreground-lighter hover:text-foreground focus-visible:rounded-sm focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground-lighter focus-visible:ring-offset-4 focus-visible:ring-offset-blue-400"
					>
						Customer Testemonials
						<ChevronRight className="h-3 w-3 -translate-x-1 transition-transform will-change-transform group-hover:translate-x-0" />
					</Link>
					<ul className="flex flex-col gap-2">
						{CustomersData.slice(0, isTablet ? 2 : 3).map((customer) => (
							<li key={customer.organization}>
								<Link
									// href={customer.url}
									href="/#tweets"
									className="group flex items-center gap-3 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground-lighter focus-visible:ring-offset-4 focus-visible:ring-offset-red-400"
								>
									<div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-auto rounded-md border bg-gradient-to-br from-[#10F98425] from-[10%] to-[#107AF925] group-hover:border-green-400">
										<AtSign className="z-100 mx-auto h-8 w-8 text-white/45" />
										{/* <Image
											src={`${basePath}/${customer.imgUrl}`}
											alt={customer.title}
											fill
											className="!p-4 object-contain brightness-70 contrast-[.35] filter"
										/> */}
									</div>
									<div className="flex flex-col">
										<h4 className="text-light text-normal mb-0 text-sm group-hover:text-foreground group-focus-visible:text-foreground">
											{customer.title}
										</h4>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="col-span-2">
					<p className="mb-6 font-mono text-xs uppercase tracking-widest text-foreground-lighter">
						{ComparisonsData.label}
					</p>
					<ul className="flex flex-col gap-2">
						{ComparisonsData.comparisons.map((link) => (
							<li key={link.text}>
								<TextLink
									chevronAnimation="fadeIn"
									url={link.url}
									label={link.text}
									className="mt-0 hover:text-foreground focus-visible:text-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-yellow-400"
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ProductDropdown
