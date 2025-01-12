import MaxWidthWrapper from "../shared/rules/MaxWidthWrapper"

import HeadingCentered from "../shared/HeadingCentered"
import {
	AlanLogo,
	ArcLogo,
	CashAppLogo,
	DescriptLogo,
	LoomLogo,
	MercuryLogo,
	OpenSeaLogo,
	PitchLogo,
	RampLogo,
	RaycastLogo,
	RetoolLogo,
	VercelLogo,
} from "public/_customerlogos/CustomerLogos"
import { cn } from "tailwind-variants"
import { StarsIllustration } from "./unused/stars"
import classNames from "classnames"

export const Clients = () => (
	<MaxWidthWrapper className="mb-48">
		<HeadingCentered
			teaser="THE WORLD'S BEST TEAMS"
			// heading="Just experimental bento grid"
			subheading="Even the cream of the crop uses services such as copywriting, brand identity and digital marketing"
		/>

		<div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
			{/* <RampLogo /> */}
			<LoomLogo className="hidden md:block" />
			<VercelLogo />
			<DescriptLogo className="hidden md:block" />
			{/* <CashAppLogo /> */}
			{/* <RaycastLogo /> */}
			<MercuryLogo />
			{/* <RetoolLogo /> */}
			{/* <AlanLogo className="hidden md:block" /> */}
			<ArcLogo className="hidden md:block" />
			<OpenSeaLogo className="hidden md:block" />
			{/* <PitchLogo className="hidden md:block" /> */}
		</div>
		{/* <p className="relative inline cursor-pointer text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
			Hover me
		</p> */}
		{/* <div
			className={classNames(
				"mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
				"[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
				"after:absolute after:top-1/3 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(255,255,255,0.4)] after:bg-background"
			)}
		>
			<StarsIllustration />
		</div> */}
	</MaxWidthWrapper>
)
