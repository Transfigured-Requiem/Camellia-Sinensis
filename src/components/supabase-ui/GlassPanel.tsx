import { useTheme } from "next-themes"
import Image from "next/image"
import * as React from "react"
import { cn } from "@/lib/utils"

interface Props {
	title: string
	span?: string
	icon?: string | React.ReactNode
	children?: React.ReactNode
	header?: string
	background?: boolean
	className?: string
	logo?: string
	logoInverse?: string
	hasLightIcon?: boolean
	showLink?: boolean
	showIconBg?: boolean
}

export const GlassPanel = ({
	title,
	span,
	icon,
	children,
	header,
	background = true,
	logo,
	logoInverse,
	hasLightIcon,
	showLink = false,
	showIconBg = false,
	className,
}: Props) => {
	const { resolvedTheme } = useTheme()
	const showLogoInverse = logoInverse && resolvedTheme?.includes("dark")
	const showLogo = !showLogoInverse && logo

	const IconBackground: React.FC<React.PropsWithChildren> = (props) => (
		<div
			className={cn(
				"shrink-0",
				showIconBg
					? "bg-red-200 dark:bg-red-400 border border-red-300 dark:border-red-400 w-8 h-8 flex items-center justify-center rounded"
					: ""
			)}
		>
			{props.children}
		</div>
	)

	const LogoComponent = ({
		logoImage,
		className,
	}: {
		logoImage: string
		className?: string
	}) => (
		<div className="relative box-content p-8 pb-0">
			<div className="relative h-[33px] w-auto max-w-[145px]">
				<Image
					src={logoImage}
					alt="logo isn't rendered properly"
					fill
					className={cn("object-contain object-left", className)}
				/>
			</div>
		</div>
	)

	return (
		<div
			className={cn(
				"relative",
				"h-full",
				"group",
				"cursor-pointer",
				"overflow-hidden",
				"border rounded-lg",
				"text-left",
				background
					? "hover:border-strong bg-blue-400"
					: "border-muted hover:border-red-500 bg-transparent",
				"transition",
				className
			)}
		>
			{showLogoInverse && (
				<LogoComponent logoImage={logoInverse} className="opacity-50" />
			)}
			{showLogo && <LogoComponent logoImage={logo} className="opacity-100" />}

			{header && (
				<Image
					src={`${header}`}
					alt={title}
					className="transition-all left-0 -top-64 w-full duration-700 ease-out"
				/>
			)}
			{/* Blur circle effect on hover top left corner */}
			<div
				className="absolute left-0 top-0 w-[250px] h-[150px] transform scale-100 opacity-50 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700 ease-out"
				style={{
					background: `radial-gradient(100% 100% at 0% 0%, #06e0c318, transparent)`,
				}}
			/>
			<div
				className={cn(
					"px-8 pb-8 relative",
					"flex flex-col h-full",
					icon ? "gap-6" : "gap-2",
					!header ? "pt-8" : ""
				)}
			>
				{/* Choosing light theme icon - doesn't work! */}
				<div className="flex items-center gap-3">
					{icon && typeof icon === "string" ? (
						<IconBackground>
							<Image
								className="w-5"
								alt={title}
								src={`${icon}${
									hasLightIcon && !resolvedTheme?.includes("dark")
										? "-light"
										: ""
								}.svg`}
							/>
						</IconBackground>
					) : (
						icon && <IconBackground>{icon}</IconBackground>
					)}
					<p className="text-sm text-foreground-light">{title}</p>
				</div>

				{children && (
					<span className="text-sm text-foreground-light flex-grow">
						{children}
					</span>
				)}
				{showLink && (
					<span className="text-brand-accent justify-end text-sm">
						Learn more
					</span>
				)}
			</div>
		</div>
	)
}
