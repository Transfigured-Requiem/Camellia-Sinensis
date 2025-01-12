// from:
// https://github.com/formbricks/formbricks/blob/main/packages/ui/OptionCard/index.tsx#L21

import React from "react"

import { LoadingSpinner } from "./LoadingSpinner"

import { OptionCardProps } from "@/types"

// interface PathwayOptionProps {
// 	size: "sm" | "md" | "lg"
// 	title: string
// 	description: string
// 	loading?: boolean
// 	onSelect: () => void
// 	cssId?: string
// 	children?: React.ReactNode
//  icon?: LucideIcon
// }

const sizeClasses = {
	sm: "rounded-lg border border-slate-200 shadow-card-sm transition-all duration-150",
	md: "rounded-xl border border-slate-200 shadow-card-md transition-all duration-300",
	lg: "rounded-2xl border border-slate-200 shadow-card-lg transition-all duration-500",
}

export const OptionCard = ({
	size,
	title,
	description,
	children,
	onSelect,
	loading,
	cssId,
	icon: Icon,
}: OptionCardProps) => (
	<div className="relative max-w-[400px] pb-8">
		<div
			id={cssId}
			className={`flex cursor-pointer flex-col items-center justify-center border-2 border-slate-300/10 bg-neutral-600/15 p-4 hover:-translate-y-[5%] hover:border-brand ${sizeClasses[size]}`}
			onClick={onSelect}
			role="button"
			tabIndex={0}
		>
			<div className="space-y-4">
				{children}
				<div className="space-y-4">
					<div className="flex justify-center gap-2">
						{Icon && <Icon className="h-6 w-6 translate-y-[10%]" />}
						<p className="text-xl font-medium text-foreground">{title}</p>
					</div>

					<p className="text-sm text-foreground-light">{description}</p>
				</div>
			</div>
		</div>
		{loading && (
			<div className="absolute inset-0 flex h-full w-full items-center justify-center bg-slate-100 opacity-50">
				<LoadingSpinner />
			</div>
		)}
	</div>
)
