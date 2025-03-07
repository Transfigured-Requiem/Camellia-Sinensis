import React from "react"
import Link from "next/link"
// import { IconChevronsRight } from "@tabler/icons-react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const MenuItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a"> & {
		description?: string
		icon?: string
		hasChevron?: boolean
		hoverColor?: "foreground" | "brand"
	}
>(
	(
		{
			className,
			title,
			href = "",
			description,
			icon,
			hasChevron,
			children,
			hoverColor = "foreground",
			...props
		},
		ref,
	) => {
		return (
			<Link
				href={href}
				ref={ref}
				className={cn(
					"group/menu-item flex select-none items-center gap-3 rounded-md p-2 text-sm leading-none text-foreground-light no-underline outline-none hover:text-foreground focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-foreground-lighter",
					description && "items-center",
					className,
				)}
				{...props}
			>
				{children ?? (
					<>
						{icon && (
							<div className="flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-lg bg-surface-200">
								<svg
									className="h-5 w-5 group-hover/menu-item:text-foreground group-focus-visible/menu-item:text-foreground"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										d={icon}
										stroke="hsl(var(--brand))"
									/>
								</svg>
							</div>
						)}
						<div className="flex flex-col justify-center">
							<div className="flex items-center gap-1">
								<p
									className={cn(
										"leading-snug text-foreground",
										hoverColor === "brand" &&
											"group-hover/menu-item:text-brand",
									)}
								>
									{title}
								</p>
								{hasChevron && (
									<ChevronRight
										strokeWidth={2}
										className="w-3 -translate-x-1 text-foreground opacity-0 transition-all will-change-transform group-hover/menu-item:translate-x-0 group-hover/menu-item:opacity-100"
									/>
								)}
							</div>
							{description && (
								<p className="-mb-1 line-clamp-1 leading-relaxed text-foreground-lighter group-hover/menu-item:text-foreground-light group-focus-visible/menu-item:text-foreground-light">
									{description}
								</p>
							)}
						</div>
					</>
				)}
			</Link>
		)
	},
)

MenuItem.displayName = "MenuItem"

export default MenuItem
