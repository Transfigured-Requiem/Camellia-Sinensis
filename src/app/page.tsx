"use client"

import BuiltExamples from "@/components/BuiltWithBIR"
import { Clients } from "@/components/Clients"
import HeroSectionTwoCols from "@/components/Main/Hero/HeroSectionTwoCols"
import CTABanner from "@/components/supabase-ui/CTABanner"
import CustomerStories from "@/components/supabase-ui/CustomerStories"
import {
	FeaturesAutomation,
	FeaturesColdEmailBlocker,
	// Features,
	FeaturesUnsubscribe,
} from "@/components/Main/Home/FeaturesSection"
import SurveyTypeSelection from "@/components/Main/Home/OptionSelection"
import BentoGrid from "@/components/Main/Sections/bento-grid/BentoGrid"
import TwitterSocialSection from "@/components/ToDelete/Testimonials/TwitterSocialSelection"
import StickyScrollSection from "@/components/Main/Sections/scroll-section/StickyScrollSection"

import { FAQ } from "@/components/Main/Sections/faq/FAQ"
import TwoColSection from "@/components/Main/Sections/two-col-section/TwoColSection"
import { HeroSection } from "@/components/Main/Hero/HeroSection"
import MaxWidthWrapper from "@/shared/rules/MaxWidthWrapper"
import BentoGrid2 from "@/components/Bento/BentoGrid"
import Hero from "@/components/Main/Hero/Hero"
import HeroGsap from "@/components/Main/Hero/HeroGsap"
import KPRHome from "@/components/Main/Hero/KPRHome"

import Footer from "@/components/Main/Footer/Footer"
import { useEffect, useState } from "react"
import Lenis from "lenis"
import { TextParallex } from "@/components/Main/Parallex/TextParallex"
import NameParallex from "@/components/Main/Parallex/NameParallex"
import { AnimatePresence } from "framer-motion"
import Preloader from "@/components/Preloader/Preloader"
import KPRSideMenu from "@/components/Header/KPRSideMenu"
import ShuffleText from "@/components/Header/ShuffleText"
import Header from "@/components/SideMenu/Header"
import { Carousel } from "@/components/Main/Carousel/Carousel"
import TimelineNavbar from "@/components/Main/Navbar/TimelineNavbar"
import { Clock } from "@/shared/TimeDisplay"
import { SkillsTextLoop } from "@/components/Main/Carousel/TextLoop"
import { TextEffect } from "@/shared/TextEffect"
import { TextShimmer } from "@/shared/TextShimmer"
import { VideoCarousel } from "@/components/Main/Showcase/VideoCarousel"
import NameScroll from "@/components/SideMenu/NameScroll"
import FAQSection from "@/components/Main/FAQ/FAQ"

export default function Home() {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		;(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default

			const locomotiveScroll = new LocomotiveScroll()

			setTimeout(() => {
				setIsLoading(false)

				document.body.style.cursor = "default"

				window.scrollTo(0, 0)
			}, 3000)
		})()
	}, [])
	// const TrustedBy = dynamic(() => import("@/components/marketing/trusted-by"))
	useEffect(() => {
		const lenis = new Lenis()

		function raf(time) {
			lenis.raf(time)

			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])
	return (
		<div className="min-h-screen">
			{/* <AnimatePresence mode="wait">
				{isLoading && <Preloader />}
			</AnimatePresence> */}

			<TimelineNavbar />

			{/* <div className="h-24"></div> */}
			{/* <KPRHome /> */}
			<Hero />

			<Carousel />
			{/* <NameParallex /> */}

			{/* <KPRSideMenu /> */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
					fontSize: "148px",
				}}
			>
				<span className="font-whyte font-black">hold'My</span>
				<TextEffect
					className="border border-red-400 text-lg font-bold"
					shimmerDuration={3}
					per="char"
					delay={5.5}
				>
					+7 years of experience with industry standard software
				</TextEffect>
				<TextShimmer
					className="border border-red-400 text-lg font-bold"
					duration={4}
				>
					+7 years of experience with industry standard software
				</TextShimmer>
			</div>
			<VideoCarousel />
			<NameScroll />
			<FAQSection />

			<TimelineNavbar />

			{/* <Hero /> */}
			{/* <Header /> */}
			{/* <div className="custom-div"></div> */}

			<TextParallex />
			{/* <HeroSectionTwoCols /> */}
			{/* <Footer /> */}
		</div>
	)
}
