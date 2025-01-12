import clsx from "clsx"
import {
	BarChart2Icon,
	EyeIcon,
	LineChart,
	LucideIcon,
	MousePointer2Icon,
	Orbit,
	ShieldHalfIcon,
	Sparkles,
	SparklesIcon,
	TagIcon,
} from "lucide-react"
import Image from "next/image"

export function FeaturesWithImage(props: {
	imageSide: "left" | "right"
	title: string
	subtitle: string
	description: string
	image: string
	features: {
		name: string
		description: string
		icon: LucideIcon
	}[]
}) {
	return (
		<div className="overflow-hidden bg-background py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div
						className={clsx(
							"lg:pt-4",
							props.imageSide === "left"
								? "lg:ml-auto lg:pl-4"
								: "lg:mr-auto lg:pr-4"
						)}
					>
						<div className="lg:max-w-lg">
							<h2 className="font-cal text-base leading-7 text-brand">
								[ {props.title} ]
							</h2>
							<p className="mt-2 font-cal text-3xl text-white sm:text-4xl">
								{props.subtitle}
							</p>
							<p className="mt-6 text-lg leading-8 text-zinc-200">
								{props.description}
							</p>
							<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-foreground lg:max-w-none">
								{props.features.map((feature) => (
									<div key={feature.name} className="relative pl-9">
										<dt className="inline font-semibold text-brand">
											<feature.icon
												className="absolute left-1 top-1 h-5 w-5 text-brand"
												aria-hidden="true"
											/>
											{feature.name}
										</dt>{" "}
										<dd className="inline">{feature.description}</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
					<div
						className={clsx(
							"flex items-start",
							props.imageSide === "left"
								? "justify-end lg:order-first"
								: "justify-start lg:order-last"
						)}
					>
						<div className="rounded-xl bg-gray-500/15 p-2 border-2 border-gray-200/20 hover:border-brand hover:border-blur border-dashed  lg:rounded-2xl lg:p-4 cursor-pointer transition-all duration-500">
							<Image
								src={props.image}
								alt="Product screenshot"
								className="w-[48rem] max-w-none rounded-xl shadow-2xl ring-1 ring-gray-400/10 sm:w-[57rem]"
								width={2400}
								height={1800}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
