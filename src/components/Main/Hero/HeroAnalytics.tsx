import React from "react"
import { Separator } from "../../ui/separator"
import { LucideProps, Star, UserRoundCheck, TrendingUp } from "lucide-react"

interface HeroAnalytic {
	quantity: string
	icon: React.ComponentType<LucideProps>
	description: string
}

function HeroAnalyticMaker({
	quantity,
	icon: Icon,
	description,
}: HeroAnalytic) {
	return (
		<div>
			{/* <div className=" pb-0"> */}
			<span className="text-xl font-bold text-brand">{quantity}</span>{" "}
			{/* </div> */}
			<br />
			<div className="pt-2">
				<Icon className="inline-block size-4 -translate-y-[15%]" />{" "}
				{description}
			</div>
		</div>
	)
}

function HeroAnalytics() {
	const heroAnalytics: HeroAnalytic[] = [
		{
			quantity: "112",
			icon: UserRoundCheck,
			description: "Satisfied customers",
		},
		{
			quantity: "20",
			icon: Star,
			description: "Unique services",
		},
		{
			quantity: "+$1M",
			icon: TrendingUp,
			description: "Client Growth",
		},
	]

	return (
		<div className="flex h-5 flex-row items-center gap-y-2 space-x-4 pb-20 pt-10 align-baseline text-xs font-medium text-foreground md:pb-0">
			{heroAnalytics.map((analytic, index) => (
				<React.Fragment key={index}>
					<HeroAnalyticMaker {...analytic} />
					{index < heroAnalytics.length - 1 && (
						<Separator
							orientation="vertical"
							className="inline-flex h-10 bg-brand"
						/>
					)}
				</React.Fragment>
			))}
		</div>
	)
}

export default HeroAnalytics
