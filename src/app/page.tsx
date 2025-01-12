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
import TwitterSocialSection from "@/components/Main/Testimonials/TwitterSocialSelection"
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
			<AnimatePresence mode="wait">
				{isLoading && <Preloader />}
			</AnimatePresence>
			{/* <HeroGsap /> */}
			<KPRHome />
			<NameParallex />

			<Hero />
			<div className="custom-div"></div>

			<TextParallex />
			<HeroSectionTwoCols />
			<Footer />
		</div>
	)
}
