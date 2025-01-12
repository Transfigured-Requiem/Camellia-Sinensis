import Image from "next/image"
import React from "react"
import MaxWidthWrapper from "../../../../shared/rules/MaxWidthWrapper"
import HeadingCentered from "../../../../shared/HeadingCentered"
import { HighlighterItem } from "../../../Pricing/Highlighter"
function BentoGrid() {
	return (
		<MaxWidthWrapper className="mb-48">
			<HeadingCentered
				teaser="The effective solution for all your copywriting"
				heading="Create compelling copy that sells"
				subheading="What you say, where you say and when to say is crucial for the success of your brand and marketing campaigns. We at Brand it Right will write the best copy bespoke to your specific niche and clients."
			/>
			<div className="space-y-6">
				<div className="relative grid w-full grid-cols-1 gap-8 lg:grid-cols-8">
					{/* small card */}

					<div className="col-span-1 flex flex-col justify-between space-y-2 rounded-2xl border-2 border-neutral-100/10 bg-black/20 transition-all duration-700 hover:border-brand lg:col-span-3">
						<div className="p-10">
							<h3 className="mb-2 text-lg font-medium text-neutral-200 lg:text-3xl">
								Craft Your Unique{" "}
								<span className="font-semibold text-brand">Brand Identity</span>
							</h3>
							<p className="text-sm text-foreground-light">
								Develop a memorable brand that resonates with your audience
								through our comprehensive brand development services.
							</p>
						</div>
						{/* <HighlighterItem> */}
						<div className="mt-auto block pl-10">
							<Image
								className="-z-10 h-full w-full rounded-br-2xl object-cover object-bottom opacity-70 transition-all duration-200 hover:opacity-100"
								alt=""
								src="/_bento/brand.png"
								width={500}
								height={500}
							/>
						</div>
						{/* </HighlighterItem>  */}
					</div>

					{/* big card */}
					<div className="col-span-1 flex flex-col justify-between space-y-2 rounded-2xl border-2 border-neutral-100/10 bg-black/20 transition-all duration-700 hover:border-brand-alt lg:col-span-5">
						<div className="h-full w-full"></div>
						<div className="p-10">
							<h3 className="mb-2 text-lg font-medium text-neutral-200 lg:text-3xl">
								Build a{" "}
								<span className="font-semibold text-brand-alt"> Website</span>{" "}
								That Drives Results
							</h3>
							<p className="text-sm text-foreground-light">
								Create a website that resonates with your audience and drives
								conversions and sales.
							</p>
						</div>
						<div className="mt-auto block pl-10">
							<Image
								className="-tanslate-y-1/2 -z-10 h-full w-full rounded-br-2xl rounded-tl-2xl object-cover object-bottom opacity-40 transition-all duration-200 hover:opacity-70"
								alt=""
								src="/_bento/web-site.png"
								width={1000}
								height={1000}
							/>
						</div>
					</div>
				</div>

				{/* <div className="relative grid w-full grid-cols-1 gap-8 lg:grid-cols-8">
					small card

					<div className="col-span-1 flex flex-col justify-between space-y-2 rounded-2xl border-2 border-neutral-100/10 bg-black/20 transition-all duration-700 hover:border-brand lg:col-span-4">
						<div className="p-10">
							<h3 className="mb-2 text-lg font-medium text-neutral-200 lg:text-3xl">
								Tell Your Story Through{" "}
								<span className="font-semibold text-brand">
									Compelling Content
								</span>
							</h3>
							<p className="text-sm text-foreground-light">
								Develop a content strategy that engages your audience and drives
								results with our services.
							</p>
						</div>
						<div className="mt-auto block pl-10">
							<Image
								className="-z-10 h-full w-full rounded-br-2xl object-cover object-bottom"
								alt=""
								src="/_static/webp/home-page_thoughtful-customer-closer-dark.png"
								width={1000}
								height={1000}
							/>
						</div>
					</div>

					<div className="col-span-1 flex flex-col justify-between space-y-2 rounded-2xl border-2 border-neutral-100/10 bg-black/20 transition-all duration-700 hover:border-brand-alt lg:col-span-4">
						<div className="p-10">
							<h3 className="mb-2 text-lg font-medium text-neutral-200 lg:text-3xl">
								Write{" "}
								<span className="font-semibold text-brand-alt">
									Compelling Copy{" "}
								</span>{" "}
								That Drives Results
							</h3>
							<p className="text-sm text-foreground-light">
								Error-free, creative, original and clickable emails, that look
								and perform just like mega companies ones.
							</p>
						</div>
						<div className="mt-auto block pl-10">
							<Image
								className="-z-10 h-full w-full rounded-br-2xl object-cover object-bottom"
								alt=""
								src="/_static/webp/home-page_thoughtful-customer-closer-dark.png"
								width={1000}
								height={1000}
							/>
						</div>
					</div>
				</div> */}

				<div className="relative grid w-full grid-cols-1 gap-8 lg:grid-cols-6">
					{/* big card */}
					<div className="col-span-1 flex flex-col justify-between space-y-2 rounded-2xl border-2 border-neutral-100/10 bg-black/20 transition-all duration-700 hover:border-brand lg:col-span-3">
						{/* <div className=" w-full h-full"></div> */}
						<div className="p-10">
							<h3 className="mb-2 text-lg font-medium text-neutral-200 lg:text-3xl">
								Reach Your Target Audience with{" "}
								<span className="font-semibold text-brand">
									Effective Digital Marketing
								</span>
							</h3>
							<p className="text-sm text-foreground-light">
								Develop a comprehensive digital marketing strategy that connects
								you with your target audience.
							</p>
						</div>
						<div className="mt-auto block pl-10">
							<Image
								className="-z-10 h-full w-full object-cover object-bottom opacity-80 transition-all duration-200 hover:opacity-100"
								alt=""
								src="/_bento/stats.png"
								width={1000}
								height={1000}
							/>
						</div>
					</div>

					{/* small card */}
					<div className="relative col-span-1 flex flex-col rounded-2xl border-2 border-neutral-100/10 bg-black/20 transition-all duration-700 hover:border-brand-alt lg:col-span-3">
						{/* <div className="flex-grow-1"> */}
						<div className="p-10">
							<h3 className="text-md mb-2 font-medium text-neutral-200 lg:text-3xl">
								Unlock Your Dormant{" "}
								<span className="font-semibold text-brand-alt">
									Business Potential
								</span>{" "}
							</h3>
							<p className="text-sm text-foreground-light">
								Identify growth opportunities and create a customized strategy
								to achieve your business goals.
							</p>
						</div>
						{/* </div> */}
						<div className="mt-auto block">
							<Image
								className="h-full w-full rounded-2xl object-cover object-bottom pl-10 opacity-60 transition-all duration-200 hover:opacity-80"
								alt=""
								src="/_bento/audience.png"
								width={1000}
								height={1000}
							/>
						</div>
					</div>
				</div>
			</div>
		</MaxWidthWrapper>
	)
}

export default BentoGrid
