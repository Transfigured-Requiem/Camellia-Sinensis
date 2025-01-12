"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { useWindowSize } from "react-use"

// import { Announcement, Button, cn, LW11CountdownBanner } from 'ui'
import { cn } from "@/lib/utils"

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { buttonVariants, Button } from "@/components/ui/button"

import HamburgerButton from "./HamburgerMenu"
import MobileMenu from "./MobileMenu"
import MenuItem from "./MenuItem"
import { menu } from "@/data/nav"

import * as supabaseLogoWordmarkDark from "/public/_static/png/supabase-logo-wordmark--dark.png"
import * as supabaseLogoWordmarkLight from "/public/_static/png/supabase-logo-wordmark--light.png"
import * as birLogoDark from "/public/_static/png/bir_logo_first.png"
import * as birLogo from "/public/_static/png/bir_logo6.png"

import { ChevronRightIcon, ArrowRight } from "lucide-react"

// import HeroCTA from "@/components/Hero/HeroCTA"
import HeroButtons from "@/components/Main/Hero/HeroButtons"
import { siteConfig } from "@/config/site"
import CustomButton from "@/shared/CustomButton"
import InteractiveHoverButton from "@/components/Buttons/IntBut"

interface Props {
	hideNavbar?: boolean
}

const Nav = (props: Props) => {
	const { resolvedTheme } = useTheme()
	const router = useRouter()
	const { width } = useWindowSize()
	const [open, setOpen] = useState(false)

	React.useEffect(() => {
		if (open) {
			// Prevent scrolling on mount
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "auto"
		}
	}, [open])

	// Close mobile menu when desktop
	React.useEffect(() => {
		if (width >= 1024) setOpen(false)
	}, [width])

	if (props.hideNavbar) {
		return null
	}

	const showDarkLogo = resolvedTheme?.includes("dark")!
	// isLaunchWeekPage ||  || isHomePage

	return (
		<>
			{/* <Announcement>
				<LW11CountdownBanner />
			</Announcement> */}
			<div
				className={cn(
					"sticky top-0 z-40 mx-auto max-w-6xl transform rounded-full border-red-500 pt-2",
					// isLaunchWeekXPage && "relative"
				)}
				style={{ transform: "translate3d(0,0,999px)" }}
			>
				<div
					className={cn(
						"absolute inset-0 flex h-full max-w-5xl justify-center rounded-full border border-red-400 bg-background pt-2 opacity-0",
					)}
				/>
				<nav
					className={cn(
						"border-default relative z-40 mt-2 rounded-full border border-brand bg-black/50 backdrop-blur-sm transition-opacity",
					)}
				>
					<div className="relative mx-auto flex h-16 items-center justify-between lg:container lg:px-16 xl:px-20">
						{/* Left: Logo/Link */}
						<div className="flex items-center">
							<Link
								href="/"
								className="focus-visible:ring-offset-background-alternative block h-auto focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground-lighter focus-visible:ring-offset-4"
							>
								<p className="font-chillax flex items-center text-3xl font-semibold">
									taha<span className="text-brand">.</span>
								</p>
							</Link>
						</div>

						{/* Center: Navigation Menu */}
						<NavigationMenu
							delayDuration={0}
							className="flex h-16 items-center justify-center space-x-4"
						>
							<NavigationMenuList>
								{menu.primaryNav.map((menuItem) =>
									menuItem.hasDropdown ? (
										<NavigationMenuItem
											className="text-xl font-thin"
											key={menuItem.title}
										>
											<NavigationMenuTrigger className="data-[state=open]:!text-brand-link font-chillax h-auto bg-transparent p-2 text-lg font-semibold text-foreground hover:text-foreground data-[radix-collection-item]:focus-visible:text-foreground data-[radix-collection-item]:focus-visible:ring-2 data-[radix-collection-item]:focus-visible:ring-foreground-lighter">
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
											className="text-xl font-semibold"
											key={menuItem.title}
										>
											<NavigationMenuLink asChild>
												<MenuItem
													href={menuItem.url}
													title={menuItem.title}
													className="text-chillax text-lg text-foreground focus-visible:text-brand group-hover:bg-transparent"
													hoverColor="white"
												/>
											</NavigationMenuLink>
										</NavigationMenuItem>
									),
								)}
							</NavigationMenuList>
						</NavigationMenu>

						{/* Right: Placeholder for Button */}
						<div className="hidden md:flex">
							{/* <Button
								variant="outline"
								onClick={() => console.log("Button clicked!")}
							>
								Button Placeholder
							</Button> */}
							<InteractiveHoverButton
								text="Contact me"
								className="font-chillax"
							/>
						</div>
					</div>
				</nav>

				{/* <ScrollProgress /> */}
			</div>
		</>
	)
}

export default Nav
