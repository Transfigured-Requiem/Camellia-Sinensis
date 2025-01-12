import Image from "next/image"

import UnderlineSVG from "../../../shared/UnderlineSVG"
import CTAButton from "../../CTAButton"
import HeroAnalytics from "./HeroAnalytics"
import { Copyright } from "lucide-react"
import { Particles } from "./HeroParticles"
import RippleButton from "@/components/Buttons/RippleButton"
import InteractiveHoverButton from "@/components/Buttons/IntBut"
import Ripple from "@/components/Buttons/Ripple"
import MaxWidthWrapper from "@/shared/rules/MaxWidthWrapper"
import { TextAnimate } from "@/shared/TextAnimate"

export function HeroSection() {
	return (
		<section className="overflow-x-hidden pb-20">
			{/* Particles animation */}
			<MaxWidthWrapper>
				{/* <Particles className="absolute inset-0 -z-10" /> */}
			</MaxWidthWrapper>
			<div className="relative mx-auto max-w-6xl px-4 md:px-24">
				<div className="flex flex-col items-center justify-center space-y-10 pb-8 pt-4 md:pb-12 md:pt-10 lg:py-16">
					<div className="flex flex-col items-center justify-center space-y-8 max-md:text-center">
						<h1
							className="bg-gradient-to-t from-zinc-700/35 from-[2%] via-foreground to-zinc-400 to-[67%] bg-clip-text pt-4 text-center text-5xl font-bold uppercase text-transparent lg:text-8xl"
							data-aos="fade-down"
						>
							{/* <TextAnimate animation="slideUp" by="word"> */}
							Make your own {/* </TextAnimate> */}
							<span className="relative inline-flex">
								<span className="z-10 bg-gradient-to-br from-[#10F984] from-[50%] to-[#107AF9] bg-clip-text">
									brand
								</span>
								<span className="-z-10 opacity-45">
									<UnderlineSVG />
								</span>
							</span>{" "}
							stand out from the rest
							<span className="m-2 bg-gradient-to-r from-[#46e995] from-[40%] via-[#43bdff] via-[70%] to-[#46C9E9] to-[80%] bg-clip-text text-7xl font-bold text-transparent">
								✨
							</span>
						</h1>{" "}
						<p className="max-w-[42rem] text-center font-semibold leading-normal text-foreground-lighter sm:text-xl sm:leading-8">
							<span className="bg-gradient-to-r from-[#46e995] from-[40%] via-[#43bdff] via-[70%] to-[#46C9E9] to-[80%] bg-clip-text font-bold text-transparent">
								Brand it Right
								{/* <Copyright className="mb-3 ml-1 inline size-3 font-bold text-[#46C9E9]" /> */}
							</span>{" "}
							is the best place for your{" "}
							<span className="bg-gradient-to-r from-[#46e995] from-[40%] via-[#43bdff] via-[70%] to-[#46C9E9] to-[80%] bg-clip-text font-bold text-transparent">
								business
							</span>{" "}
							to launch it from <br /> just a{" "}
							<span className="bg-gradient-to-r from-[#46e995] from-[40%] via-[#43bdff] via-[70%] to-[#46C9E9] to-[80%] bg-clip-text font-bold text-transparent">
								simple idea
							</span>{" "}
							to a well{" "}
							<span className="bg-gradient-to-r from-[#46e995] from-[40%] via-[#43bdff] via-[70%] to-[#46C9E9] to-[80%] bg-clip-text font-bold text-transparent">
								renowned brand
							</span>{" "}
							in no time
						</p>
						{/* <HeroAnalytics /> */}
						<CTAButton />
						<InteractiveHoverButton />
						<RippleButton rippleColor="#ADD8E6">Click me</RippleButton>
					</div>

					<div className="borer relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-white/5 bg-background md:shadow-xl">
						<p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
							Find me on{" "}
							<span className="font-bold">
								Up<span className="text-brand">Work</span>
							</span>
						</p>
						<Ripple />
					</div>
				</div>
			</div>
		</section>
	)
}

// export default HeroSection
