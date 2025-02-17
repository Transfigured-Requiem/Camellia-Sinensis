import Image from "next/image"

import UnderlineSVG from "../../../shared/UnderlineSVG"
import CTAButton from "../../CTAButton"
import HeroAnalytics from "./HeroAnalytics"

function HeroSectionTwoCols() {
	return (
		// <section >
		<section className="overflow-x-hidden pb-20">
			<div className="relative mx-4 max-w-6xl px-0 md:mx-24">
				{/* <section className="  pb-8  md:pb-12 md:pt-10 lg:py-28"> */}
				<div className="space-y-10 pb-8 pt-4 md:pb-12 md:pt-10 lg:py-16">
					<div>
						<div className="absolute left-1/2 top-0 flex aspect-square w-1/3 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
							<div className="translate-z-0 bg-white-500 absolute inset-0 -z-30 rounded-full opacity-10 blur-[200px]" />
						</div>
						{/* Section content */}
						<div className="flex max-w-4xl flex-col space-y-8 space-y-reverse md:max-w-none md:flex-row md:space-x-8 md:space-y-0 lg:space-x-16 xl:space-x-20">
							{/* Content */}
							<div
								className="lg:w-3/2 order-1 mb-10 space-y-8 max-md:text-center md:order-none md:w-7/12"
								data-aos="fade-down"
							>
								{/* Content #1 */}
								{/* <h2 className="font-medium  text-brand-accent text-md md:text-xl lg:text-2xl">
									BRAND it RIGHT
								</h2> */}
								{/* <div className={dmserif.className}> */}
								<h1
									className="font-whyte bg-gradient-to-t from-zinc-700/35 from-[2%] via-foreground to-zinc-400 to-[98%] bg-clip-text pt-4 text-5xl font-semibold text-transparent lg:text-7xl"
									// style={{ animationDelay: "0.60s", animationFillMode: "both" }}
								>
									Professional Video Editor{" "}
									<span className="relative inline-flex">
										<span className="font-chillax z-10 bg-gradient-to-br from-[#e6195a] from-[50%] to-[#5210f9] bg-clip-text">
											algorithm
										</span>
										{/* 
										<span className="-z-10 opacity-45">
											<UnderlineSVG />
										</span> */}
									</span>{" "}
									game
								</h1>
								{/* </div> */}

								<p className="max-w-[42rem] leading-normal text-foreground-lighter sm:text-xl sm:leading-8">
									Automate your emails, generate leads, aquire more clients and
									more
								</p>
								{/* Moving text gradient works for this component only */}
								{/* <GradientSubText /> */}

								<HeroAnalytics />

								{/* <HeroCTA /> */}
								<CTAButton />
							</div>

							<div className="order-2 mx-32 mt-32 flex max-w-2xl -translate-x-32 sm:mt-24 md:w-5/12 md:translate-x-16 lg:ml-20 lg:mr-0 lg:mt-0 lg:w-1/3 lg:max-w-none lg:flex-none xl:ml-32">
								<div className="-z-10 max-w-3xl flex-none sm:max-w-4xl lg:max-w-5xl">
									<Image
										// src="/_static/landing/analytics.webp"
										src="/_temp/edit.jpg"
										alt="App screenshot"
										width={1440}
										height={798}
										// width={2432}
										// height={1442}
										className="z-10 w-[76rem] rounded-xl border border-white/10"
									/>
								</div>
							</div>
							{/* <div className="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial from-indigo-200 right-0 top-0"></div>
							<div className="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial from-purple-200 right-56 top-10"></div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSectionTwoCols
