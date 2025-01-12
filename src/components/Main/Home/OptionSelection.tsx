"use client"
import InappMockup from "/public/_websites/notion-website.png"
import LinkMockup from "/public/_emails/nike-mail.png"
import WebsiteMockup from "/public/_static/landing/survey-type-website.png"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { OptionCard } from "../Sections/option-cards/OptionCard"

import HeadingCentered from "@/shared/HeadingCentered"
import MaxWidthWrapper from "../../../shared/rules/MaxWidthWrapper"

import { Laptop, Mail, BadgeCheck } from "lucide-react"

export const SurveyTypeSelection: React.FC = () => {
	const router = useRouter()

	return (
		<div className="relative">
			<HeadingCentered
				teaser="The effective solution for all your copywriting"
				heading="Create compelling copy that sells"
				subheading="What you say, where you say and when to say is crucial for the success of your brand and marketing campaigns. We at Brand it Right will write the best copy bespoke to your specific niche and clients."
			/>

			<div className="flex flex-col items-center justify-center text-center lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-8 lg:gap-y-28">
				<OptionCard
					size="lg"
					title="Website Copywriting"
					description="Target specific visitors on your websites."
					icon={Laptop}
					onSelect={() => {
						router.push("/website-survey")
					}}
				>
					<Image src={WebsiteMockup} alt="" height={350} />
				</OptionCard>
				<OptionCard
					size="lg"
					title="Email Copywriting"
					description="Create on brand surveys, embedded in your emails."
					icon={Mail}
					onSelect={() => {
						router.push("/open-source-form-builder")
					}}
				>
					<Image src={LinkMockup} alt="" height={350} />
				</OptionCard>
				<OptionCard
					size="lg"
					title="Social Media Copywriting"
					description="Research any user cohort in your app."
					icon={BadgeCheck}
					onSelect={() => {
						router.push("/in-app-survey")
					}}
				>
					<Image src={InappMockup} alt="" height={350} />
				</OptionCard>
			</div>
		</div>
	)
}

export default SurveyTypeSelection
