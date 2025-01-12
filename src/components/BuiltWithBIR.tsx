import { Button, buttonVariants } from "./ui/button"
import Link from "next/link"
// import Button from "./supabase-ui/Button"
import SectionContainer from "@/shared/rules/SectionContainer"
import ExampleCard from "./ExampleCard"
import { LinkedInLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons"
import ExampleArr from "@/data/Examples"
import HeadingCentered from "@/shared/HeadingCentered"

const BuiltExamples = () => {
	return (
		<SectionContainer id="examples" className="xl:pt-32">
			<HeadingCentered
				teaser="Professional copy that works for your business"
				heading="All Copywriting Rrameworks & Styles"
				subheading="Currently Brand it Right offers 100% free service test, no credit card required!"
			/>
			<div className="mt-16 grid grid-cols-12 gap-5">
				{ExampleArr.slice(0, 9).map((example, i) => {
					return (
						<div
							className={`col-span-12 lg:col-span-6 xl:col-span-4 ${
								i > 2 && `sm:hidden lg:block`
							}`}
							key={i}
						>
							<ExampleCard {...example} showProducts />
						</div>
					)
				})}
			</div>
		</SectionContainer>
	)
}

export default BuiltExamples
