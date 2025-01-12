import { stickScrollFeatures } from "@/data/StickyScrollFeatures"
import MaxWidthWrapper from "@/shared/rules/MaxWidthWrapper"
import { StickyScrollTitle } from "./StickyScrollTitles"
import { Badge } from "@/components/ui/badge"
import {
	borderColorPalettes,
	backgroundColorPalettes,
} from "@/data/ColorPalletes"

function StickyScrollSection() {
	return (
		<MaxWidthWrapper className="hidden lg:flex">
			<div className="flex w-full items-start gap-10">
				<div className="w-full bg-slate-700/0 py-[40vh]">
					<ul>
						{stickScrollFeatures.map((feature) => (
							<li key={feature.id}>
								<div className="pb-60">
									<StickyScrollTitle id={feature.id}>
										{feature.title}
									</StickyScrollTitle>
									{/* Map through each description */}
									<div className="mx-auto mt-3 max-w-3xl text-zinc-400 sm:mt-4">
										{feature.description.map((desc, index) => {
											const borderColors = borderColorPalettes[feature.id]
											const borderColor =
												borderColors[index % borderColors.length] // Rotate through shades

											const bgColors = backgroundColorPalettes[feature.id]
											const bgColor = bgColors[index % bgColors.length] // Rotate through shades
											return (
												<Badge
													key={index}
													className={`${bgColor} border-2 ${borderColor} mb-2 mr-2 text-sm text-foreground`}
													variant="ghost"
												>
													{desc}
												</Badge>
											)
										})}
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
				<div className="sticky top-0 flex h-screen w-full items-center bg-neutral-700/0">
					<div className="relative top-0 aspect-square w-full rounded-2xl">
						{stickScrollFeatures.map((feature) => (
							<feature.card id={feature.id} key={feature.id} />
						))}
					</div>
				</div>
			</div>
		</MaxWidthWrapper>
	)
}

export default StickyScrollSection
