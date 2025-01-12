import React from "react"
import MaxWidthWrapper from "@/shared/rules/MaxWidthWrapper"

import { Globe, Home, User, Settings } from "lucide-react"
import Image from "next/image"

function TwoColSection() {
	const items = [
		{
			icon: Globe,
			title: "Global Reach",
			description: "Expand your product's reach globally with our platform.",
		},
		{
			icon: Home,
			title: "Home Base",
			description: "Manage everything from a centralized home base.",
		},
		{
			icon: User,
			title: "User Friendly",
			description: "Easy to use with a focus on user experience.",
		},
		{
			icon: Settings,
			title: "Customizable",
			description: "Highly customizable to meet your needs.",
		},
		{
			icon: User,
			title: "User Friendly",
			description: "Easy to use with a focus on user experience.",
		},
		{
			icon: Settings,
			title: "Customizable",
			description: "Highly customizable to meet your needs.",
		},
	]
	return (
		<MaxWidthWrapper className="py-24">
			<div className="relative grid grid-cols-12 items-center">
				<div className="-mx-outer-gutter before:from-marketing-surface-base after:from-marketing-surface-base relative order-2 col-span-full translate-x-12 select-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-1/6 before:min-h-28 before:bg-gradient-to-b after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1/6 after:min-h-28 after:bg-gradient-to-t sm:col-start-3 lg:order-last lg:col-span-6 lg:mx-0 lg:w-[calc(50vw-(var(--inner-gutter)/2))]">
					<Image
						src="/_backgrounds/TempImage.png"
						alt="Product screenshot"
						className="w-[48rem] max-w-none rounded-xl shadow-2xl ring-1 ring-gray-400/10 sm:w-[57rem]"
						width={2400}
						height={1800}
					/>
				</div>

				<div className="order-1 col-span-12 mr-4 flex flex-col justify-center gap-10 pb-8 lg:col-span-6">
					<div className="text-center lg:text-left">
						<p className="mx-auto mb-3 max-w-2xl bg-gradient-to-r from-[#46e995] from-[40%] via-[#43bdff] via-[70%] to-[#46C9E9] to-[80%] bg-clip-text text-sm font-semibold uppercase text-transparent sm:mt-4">
							[ label that attracts ]
						</p>
						<h2 className="relative mx-auto max-w-md px-[2%] text-3xl font-bold tracking-tight text-foreground sm:max-w-xl md:px-0 md:text-5xl lg:mx-0 lg:max-w-2xl xl:max-w-3xl">
							Here goes our beautiful heading
						</h2>
						<p className="text-marketing-subtler mx-auto mt-3 max-w-md px-[2vw] text-foreground-light sm:mt-4 sm:max-w-lg sm:px-0 lg:mx-0 lg:max-w-xl xl:max-w-2xl">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
							nulla vel voluptatum quae, assumenda natus dolore hic provident
							facere culpa vero, rem recusandae impedit repudiandae. Ullam quas
							distinctio aut corporis.
						</p>
					</div>
					<ul className="grid grid-cols-2 gap-6 lg:gap-8">
						{items.map((item, index) => (
							<li key={index} className="flex flex-col gap-3">
								<item.icon className="text-brand-alt h-8 w-8" />
								<h3 className="mb-1 flex items-center gap-2">{item.title}</h3>
								<p className="text-sm text-zinc-400">{item.description}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</MaxWidthWrapper>
	)
}

export default TwoColSection
