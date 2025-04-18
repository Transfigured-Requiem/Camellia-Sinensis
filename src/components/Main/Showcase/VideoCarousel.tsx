"use client"
import { Carousel, CarouselContent, CarouselItem } from "@/shared/Carousel"
import { TextEffect } from "@/shared/TextEffect"
import { TextShimmer } from "@/shared/TextShimmer"
import { useState } from "react"

const ITEMS = new Array(6).fill(null).map((_, index) => index + 1)
const VIDEO_URLS = [
	"https://www.youtube.com/embed/hXVy3y3AIvY",
	"https://www.youtube.com/embed/DqZhP-Vuxgs",
	"https://www.youtube.com/embed/CKggUbaqCVU",
	"https://www.youtube.com/embed/5rAXzvqk2F4",
	"https://www.youtube.com/embed/wXhTHyIgQ_U",
	"https://www.youtube.com/embed/g64BkZjSNBM", // Keep the original video as the 6th item
]

// Dummy descriptions for each video
const DESCRIPTIONS = [
	"Description for video 1: A stunning showcase of creativity and precision.",
	"Description for video 2: Exploring the depths of innovation and design.",
	"Description for video 3: A journey through the art of storytelling.",
	"Description for video 4: Capturing moments that inspire and captivate.",
	"Description for video 5: Pushing the boundaries of visual excellence.",
	"Description for video 6: A masterpiece of editing and imagination.",
]

export function VideoCarousel() {
	const [index, setIndex] = useState(0)

	return (
		<div className="relative mx-auto flex min-h-screen w-full flex-row items-start justify-center gap-8 px-24 py-8">
			{/* Left Column: Title and Description */}
			<div className="flex w-1/3 flex-col space-y-4">
				{/* Title */}
				<h1 className="font-whyte text-4xl font-bold">
					Previously Edited<span className="text-brand-red">.</span>
				</h1>

				{/* Video Number */}
				<h2 className="font-rx100 text-lg font-semibold uppercase text-zinc-600 dark:text-zinc-400">
					<TextShimmer>
						Video:/[
						<span className="text-brand-red">
							{String(index + 1).padStart(3, "0")}
						</span>
						]
					</TextShimmer>
				</h2>

				{/* Description */}
				<p className="text-lg text-zinc-600 dark:text-zinc-400">
					{DESCRIPTIONS[index]} {/* Dynamic description based on index */}
				</p>
			</div>

			{/* Right Column: Carousel */}
			<div className="w-2/3">
				<Carousel index={index} onIndexChange={setIndex}>
					<CarouselContent className="relative">
						{ITEMS.map((item) => {
							return (
								<CarouselItem key={item} className="p-4">
									<div className="flex aspect-video items-center justify-center rounded-2xl border border-zinc-200 dark:border-brand-red">
										<iframe
											className="h-full w-full rounded-2xl"
											src={VIDEO_URLS[item - 1]} // Use the corresponding video URL
											title="YouTube video player"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										/>
									</div>
								</CarouselItem>
							)
						})}
					</CarouselContent>
				</Carousel>

				{/* Navigation Buttons */}
				<div className="font-rx100 flex w-full justify-center space-x-3 px-4">
					{ITEMS.map((item) => {
						const isSelected = index === item - 1 // Check if the button is selected
						return (
							<button
								key={item}
								type="button"
								aria-label={`Go to slide ${item}`}
								onClick={() => setIndex(item - 1)}
								className={`h-10 w-10 rounded-bl-xl rounded-tr-xl border ${
									isSelected
										? "border-brand-red bg-brand-red text-background"
										: "border-zinc-200 dark:border-zinc-800"
								}`}
							>
								{item}
							</button>
						)
					})}
				</div>
			</div>
		</div>
	)
}
