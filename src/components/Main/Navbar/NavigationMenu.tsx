import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import MenuItem from "@/components/supabase-ui/Nav/MenuItem"
import { menu } from "@/data/nav"
import { cn } from "@/lib/utils"

export default function NavMenu() {
	return (
		// <div>
		<NavigationMenu
			delayDuration={0}
			className="flex h-16 items-center justify-center space-x-4"
		>
			<NavigationMenuList>
				{menu.primaryNav.map((menuItem) =>
					menuItem.hasDropdown ? (
						<NavigationMenuItem
							className="text-md font-medium"
							key={menuItem.title}
						>
							<NavigationMenuTrigger className="data-[state=open]:!text-brand-link font-whyte text-md h-auto bg-transparent p-2 font-medium uppercase text-foreground hover:text-foreground data-[radix-collection-item]:focus-visible:text-foreground data-[radix-collection-item]:focus-visible:ring-2 data-[radix-collection-item]:focus-visible:ring-foreground-lighter">
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
							className="font-whyte font-medium uppercase"
							key={menuItem.title}
						>
							<NavigationMenuLink asChild>
								<MenuItem
									href={menuItem.url}
									title={menuItem.title}
									className="text-md text-foreground focus-visible:text-brand group-hover:bg-transparent"
									hoverColor="brand"
								/>
							</NavigationMenuLink>
						</NavigationMenuItem>
					),
				)}
			</NavigationMenuList>
		</NavigationMenu>
		// </div>
	)
}
