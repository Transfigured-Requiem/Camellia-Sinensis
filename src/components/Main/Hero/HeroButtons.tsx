import Link from "next/link"
import React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../../ui/button"
import { ChevronRightIcon } from "@radix-ui/react-icons"

function HeroButtons() {
	return (
		<div className="space-x-4">
			<Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
				Get Started
			</Link>
			<Link
				href={siteConfig.links.github}
				target="_blank"
				rel="noreferrer"
				className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
			>
				Learn more
				<ChevronRightIcon className="ml-1 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5" />
			</Link>
		</div>
	)
}

export default HeroButtons
