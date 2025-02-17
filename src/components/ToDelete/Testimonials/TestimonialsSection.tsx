import { featuredTestimonial, testimonials } from "@/data/Testimonials"
import clsx from "clsx"
import Image from "next/image"

import HeadingCentered from "../../../shared/HeadingCentered"

export function Testimonials() {
	return (
		<div className="relative isolate bg-background pb-20 pt-24 sm:pt-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<HeadingCentered
					teaser="Featured testimonials"
					heading="Our clients are always happy"
					subheading="See individual feedback and comments about us, and our work."
				/>
				{/* <div className="mx-auto max-w-xl text-center">
					<h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">
						Inbox Zero Love
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Clean inbox, happy life.
					</p>
				</div> */}
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-100 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
					<figure className="rounded-2xl bg-background-lighter shadow-lg border-slate-100/0 hover:border-brand border-2 transition-all duration-500 sm:col-span-2 xl:col-start-2 xl:row-end-1">
						<blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-foreground sm:p-12 sm:text-xl sm:leading-8">
							<p>{`“${featuredTestimonial.body}”`}</p>
						</blockquote>
						<figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-100/10 px-6 py-4 sm:flex-nowrap">
							<Image
								className="h-10 w-10 flex-none rounded-full bg-gray-50"
								src={featuredTestimonial.author.imageUrl}
								alt=""
								width={40}
								height={40}
							/>
							<div className="flex-auto">
								<div className="font-semibold">
									{featuredTestimonial.author.name}
								</div>
								<div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
							</div>
							<Image
								className="h-8 w-auto flex-none"
								src={featuredTestimonial.author.logoUrl}
								alt=""
								height={32}
								width={98}
								unoptimized
							/>
						</figcaption>
					</figure>
					{testimonials.map((columnGroup, columnGroupIdx) => (
						<div
							key={columnGroupIdx}
							className="space-y-8 xl:contents xl:space-y-0"
						>
							{columnGroup.map((column, columnIdx) => (
								<div
									key={columnIdx}
									className={clsx(
										(columnGroupIdx === 0 && columnIdx === 0) ||
											(columnGroupIdx === testimonials.length - 1 &&
												columnIdx === columnGroup.length - 1)
											? "xl:row-span-2"
											: "xl:row-start-1",
										"space-y-8"
									)}
								>
									{column.map((testimonial) => (
										<figure
											key={testimonial.author.handle}
											className="rounded-2xl bg-background-lighter p-6 shadow-lg border-slate-100/0 hover:border-brand border-2 transition-all duration-500"
										>
											<blockquote className="text-foreground">
												<p>{`“${testimonial.body}”`}</p>
											</blockquote>
											<figcaption className="mt-6 flex items-center gap-x-4">
												<Image
													className="h-10 w-10 rounded-full bg-red-500"
													src={testimonial.author.imageUrl}
													alt=""
													width={40}
													height={40}
												/>
												<div>
													<div className="font-semibold">
														{testimonial.author.name}
													</div>
													{testimonial.author.handle ? (
														<div className="text-foreground-muted">
															@{testimonial.author.handle}
														</div>
													) : undefined}
												</div>
											</figcaption>
										</figure>
									))}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
