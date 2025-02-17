"use client"

import React, { useEffect, useState } from "react"
import StaggeredTextReveal from "./StaggeredTextReveal"
import { ChevronsRight } from "lucide-react"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { cn } from "@/lib/utils"
import MenuItem from "@/components/supabase-ui/Nav/MenuItem"
import { menu } from "@/data/nav"
import NavigationMenuDemo from "../Nav/NavMenu"
import { ModeToggle } from "@/components/mode-toggle"
import AboutDisperse from "./AboutDisperse"

function KPRHome() {
	const [preloaderFinished, setPreloaderFinished] = useState(false)

	useEffect(() => {
		// Simulate preloader completion
		const timeout = setTimeout(() => setPreloaderFinished(true), 3000) // Adjust the time as needed
		return () => clearTimeout(timeout)
	}, [])
	return (
		<div className="m-5 grid h-[calc(100vh-4rem)] grid-cols-[3.5rem_1fr] grid-rows-[3.5rem_1fr] gap-0 overflow-x-hidden rounded-lg border border-gray-700 dark:border-zinc-100/20">
			{/* Top-left small box */}
			<div className="col-span-1 row-span-1 flex items-center justify-center rounded-tl-lg transition-all duration-500 hover:border hover:border-brand">
				<ChevronsRight className="text-brand-50 hover:text-brand" />
			</div>

			{/* Top-right horizontal box */}
			<div className="col-span-1 row-span-1 flex items-center justify-center border-l border-gray-700 dark:border-zinc-100/20">
				{/* Center: Navigation Menu */}
				{/* <NavigationMenuDemo /> */}
				<NavigationMenu
					delayDuration={0}
					className="flex h-16 items-center justify-center space-x-4"
				>
					<NavigationMenuList>
						{menu.primaryNav.map((menuItem) =>
							menuItem.hasDropdown ? (
								<NavigationMenuItem
									className="text-sm font-bold"
									key={menuItem.title}
								>
									<NavigationMenuTrigger className="data-[state=open]:!text-brand-link font-rx100 h-auto bg-transparent p-2 text-sm font-semibold uppercase text-foreground hover:text-foreground data-[radix-collection-item]:focus-visible:text-foreground data-[radix-collection-item]:focus-visible:ring-2 data-[radix-collection-item]:focus-visible:ring-foreground-lighter">
										{menuItem.title}
									</NavigationMenuTrigger>
									<NavigationMenuContent
										className={cn(
											"absolute left-1/2 mt-2 -translate-x-1/2 rounded-xl",
											menuItem.dropdownContainerClassName,
										)}
									>
										{menuItem.dropdown}
									</NavigationMenuContent>
								</NavigationMenuItem>
							) : (
								<NavigationMenuItem
									className="font-rx100 text-sm font-semibold uppercase"
									key={menuItem.title}
								>
									<NavigationMenuLink asChild>
										<MenuItem
											href={menuItem.url}
											title={menuItem.title}
											className="font-rx100 text-sm text-foreground focus-visible:text-brand group-hover:bg-transparent"
											hoverColor="brand"
										/>
									</NavigationMenuLink>
								</NavigationMenuItem>
							),
						)}
					</NavigationMenuList>
				</NavigationMenu>
			</div>

			{/* Left vertical box */}
			<div className="col-span-1 row-span-1 flex flex-col content-center items-center border-t border-gray-700 dark:border-zinc-100/20">
				{/* <div className="flex h-full items-center justify-center"> */}
				<h1 className="font-yuji z-10 flex h-full w-full items-center justify-center border border-zinc-100/20 border-opacity-0 bg-red-400/0 text-5xl opacity-20 transition-all duration-500 hover:border hover:border-brand-red hover:text-brand-red hover:opacity-100">
					タ<br />ハ
				</h1>
				{/* </div> */}
				<div className="col-span-1 row-span-10 flex w-full items-center justify-center rounded-bl-lg border border-zinc-100/20 border-opacity-0 transition-all duration-500 hover:border hover:border-brand">
					<ModeToggle />
				</div>
			</div>

			{/* Main content area */}
			<div className="col-span-1 row-span-1 flex justify-between border-l border-t border-gray-700 dark:border-zinc-100/20">
				{/* <div className="">
					<AboutDisperse />
				</div> */}
				<div className="font-aktura relative bottom-0 right-0 mr-4 mt-auto w-full text-right text-[20rem] font-semibold text-foreground dark:text-amber-50">
					<div className="">
						<StaggeredTextReveal
							delay={700}
							inView={true}
							preloaderFinished={preloaderFinished}
						>
							Taha
							<span className="text-brand">.</span>
						</StaggeredTextReveal>
					</div>
				</div>
			</div>
		</div>
	)
}

export default KPRHome
