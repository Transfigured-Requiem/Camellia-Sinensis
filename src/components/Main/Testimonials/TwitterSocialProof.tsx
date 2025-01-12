"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { buttonVariants, Button } from "@/components/ui/button"
// import { Button, IconMessageCircle } from "ui" // Button Big Problemo Amigo
import Tweets from "@/data/tweets/tweets.json"
import Link from "next/link"
import { TweetCard } from "@/components/Main/Testimonials/TweetCard"
import HeadingCentered from "@/shared/HeadingCentered"
import { ArrowDown, ArrowRight, ChevronDown } from "lucide-react"

function TwitterSocialProof() {
	// base path for images
	// const { basePath } = useRouter()

	const [tweets, setTweets] = useState(Tweets.slice(0, 10))
	const [showButton, setShowButton] = useState(true)

	const handleShowMore = () => {
		setTweets((prevTweets) => [
			...prevTweets,
			...Tweets.slice(prevTweets.length, prevTweets.length + 10),
		])

		if (tweets.length >= Tweets.length) {
			setShowButton(false)
		}
	}

	return (
		<>
			<div
				className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
				aria-hidden="true"
			>
				<div className="absolute left-1/2 top-0 flex aspect-square w-1/3 -translate-x-1/2 translate-y-1/4 items-center justify-center opacity-30">
					<div className="translate-z-0 absolute inset-0 rounded-full bg-brand opacity-30 blur-[70px]" />
				</div>
			</div>
			<div className="grid grid-cols-12">
				<div className="col-span-12 space-y-4 text-center">
					<HeadingCentered
						teaser="Clients testimonials"
						heading="Our clients are always happy"
						subheading="See clients' feedback and comments about us, and our work."
					/>
				</div>
			</div>

			<div className="mt-6">
				<div
					className={`relative columns-1 gap-4 overflow-hidden transition-all sm:columns-2 lg:columns-3 xl:columns-4`}
				>
					{showButton && (
						<div
							className={`absolute bottom-0 left-0 z-10 h-[800px] w-full bg-gradient-to-b from-gray-900/0 from-0% to-background to-90%`}
						/>
					)}
					{tweets.map((tweet: any, i: number) => (
						<div className="z-0 mb-4 break-inside-avoid-column" key={i}>
							{/* <Link href={tweet.url} target="_blank"> */}
							<TweetCard
								quote={tweet.text}
								img_url={`${tweet.img_url}`}
								user_name={tweet.user_name}
								handle={`${tweet.handle}`}
							/>
							{/* </Link> */}
						</div>
					))}
					{showButton && (
						<div className="absolute bottom-0 left-0 right-0 z-20 mb-10 flex justify-center">
							{/* <Button
								// type="default"
								// size="small"
								onClick={() => handleShowMore()}
							>
								Show More
							</Button> */}

							<Button
								variant="ghoster"
								// className="flex group min-w-[120px] items-center font-semibold text-foreground shadow-sm gap-1.5 relative overflow-hidden rounded-full p-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
								onClick={() => handleShowMore()}
							>
								<div className="group relative flex min-w-[120px] items-center gap-1.5 overflow-hidden rounded-full p-[2px] font-semibold text-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
									<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10F984_0%,#10d6f9_50%,#10F984_100%)]" />
									<div className="inline-flex h-10 cursor-pointer items-center justify-center rounded-full bg-black/85 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-500 group-hover:bg-transparent/70">
										Show more
										<ChevronDown className="ml-1 size-4 transition-all duration-200 group-hover:translate-y-[10%]" />
										{/* <div className="">
												
											</div> */}
									</div>
								</div>
							</Button>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default TwitterSocialProof
