import React from "react"
import { LucideIcon } from "lucide-react"

export interface FooterItem {
	title: string
	items: {
		title: string
		href: string
		external?: boolean
	}[]
}

export interface RuledSectionProps {
	className?: string
	id?: string
	crosses?: boolean
	crossesOffset?: string
	customPaddings?: boolean
	children?: React.ReactNode
}

export interface ServicesMenuIDProps {
	id?: string
}

export interface StickyScrollTitleProps {
	children: React.ReactNode
	id: string
}

export interface StickScrollCardGradientProps extends StickyScrollCardProps {
	gradient: string
	children?: React.ReactNode
}
export interface FeaturesStore {
	inViewFeature: string | null
	setInViewFeature: (feature: string | null) => void
}

export interface StickyScrollCardProps {
	id?: string
}

export type SectionIDProps = {
	id?: string
}

export type OptionCardProps = {
	size: "sm" | "md" | "lg"
	title: string
	description: string
	loading?: boolean
	onSelect: () => void
	cssId?: string
	children?: React.ReactNode
	icon?: LucideIcon
}
