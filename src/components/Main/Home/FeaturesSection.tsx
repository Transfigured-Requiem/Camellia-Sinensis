import {
	BarChart2Icon,
	EyeIcon,
	LineChart,
	// LucideIcon,
	MousePointer2Icon,
	Orbit,
	ShieldHalfIcon,
	Sparkles,
	SparklesIcon,
	TagIcon,
} from "lucide-react"
import Image from "next/image"
import { FeaturesWithImage } from "../../../shared/FeaturesWithImage"

const featuresAutomations = [
	{
		name: "Automate your replies",
		description:
			"Our AI agent will reply, forward, or archive emails based on the rules you provide it.",
		icon: Sparkles,
	},
	{
		name: "Planning mode",
		description:
			"Let our AI plan what to do for you. Accept or reject in a click. Turn on full automation once you're confident the AI can work on its own.",
		icon: Orbit,
	},
	{
		name: "Instruct in plain English",
		description:
			"It's as easy as talking to an assistant or sending a prompt to ChatGPT.",
		icon: LineChart,
	},
]

export function FeaturesAutomation() {
	return (
		<FeaturesWithImage
			imageSide="right"
			title="Automate your inbox"
			subtitle="Your AI assistant for email"
			description="Keep getting emails that require the same response? Let Inbox Zero handle it."
			image="/_static/features/ai-automation.png"
			features={featuresAutomations}
		/>
	)
}

const featuresColdEmailBlocker = [
	{
		name: "Block out the noise",
		description:
			"Automatically archive or label cold emails. Keep your inbox clean and focused on what matters.",
		icon: ShieldHalfIcon,
	},
	{
		name: "Adjust cold email prompt",
		description:
			"Tell Inbox Zero what constitutes a cold email for you. It will block them based on your instructions.",
		icon: SparklesIcon,
	},
	{
		name: "Label cold emails",
		description:
			"Automatically label cold emails so you can review them later. Keep your inbox clean and focused on what matters.",
		icon: TagIcon,
	},
]

export function FeaturesColdEmailBlocker() {
	return (
		<FeaturesWithImage
			imageSide="left"
			title="Cold Email Blocker"
			subtitle="Automatically block cold emails"
			description="Stop the spam. Automatically archive or label cold emails."
			image="/_static/features/cold-email-blocker.png"
			features={featuresColdEmailBlocker}
		/>
	)
}

const featuresStats = [
	{
		name: "Who emails you most",
		description:
			"Someone emailing you too much? Figure out a plan to handle this better.",
		icon: Sparkles,
	},
	{
		name: "Who you email most",
		description:
			"If there's one person you're constantly speaking to is there a better way for you to speak?",
		icon: Orbit,
	},
	{
		name: "What type of emails you get",
		description:
			"Getting a lot of newsletters or cold emails? Try automatically archiving and labelling them with our AI.",
		icon: LineChart,
	},
]

export function FeaturesStats() {
	return (
		<FeaturesWithImage
			imageSide="right"
			title="Inbox Analytics"
			subtitle="Understand your inbox"
			description="Understanding your inbox is the first step to dealing with it. Understand what is filling up your inbox. Then figure out an action plan to deal with it."
			image="/_static/features/analytics.png"
			features={featuresStats}
		/>
	)
}

const featuresUnsubscribe = [
	{
		name: "One-click unsubscribe",
		description:
			"Don't search for the unsubscribe button. Unsubscribe with a single click or auto archive emails instead.",
		icon: MousePointer2Icon,
	},
	{
		name: "See who emails you most",
		description:
			"See who's sending you the most marketing and newsletter emails to prioritise who to unsubscribe from.",
		icon: EyeIcon,
	},
	{
		name: "How often they email",
		description:
			"View analytic charts to see how often you get emails from certain senders to take action.",
		icon: BarChart2Icon,
	},
]

export function FeaturesUnsubscribe() {
	return (
		<FeaturesWithImage
			imageSide="left"
			title="Newsletter Cleaner"
			subtitle="Clean up your subscriptions"
			description="See all newsletter and marketing subscriptions in one place. Unsubscribe in a click."
			image="/_static/features/newsletters.png"
			features={featuresUnsubscribe}
		/>
	)
}
