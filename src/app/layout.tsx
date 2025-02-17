import "@/styles/globals.css"
import type { Metadata } from "next"
import { DM_Serif_Text, Inter } from "next/font/google"

import localFont from "next/font/local"

import { ThemeProvider } from "@/providers/theme-provider"
import HeaderMenu from "@/components/HeaderAwwwards/Header"
import KPRSideMenu from "@/components/Header/KPRSideMenu"
import Header from "@/components/SideMenu/Header"
import Footer from "@/components/Main/Footer/Footer"
import TimelineNavbar from "@/components/Main/Navbar/TimelineNavbar"
// import Button from "@/components/SideMenu/Button"

// Google Fonts
const dmSans = Inter({
	subsets: ["latin"],
	variable: "--font-dm-sans",
	display: "swap",
})

const dmSerif = DM_Serif_Text({
	subsets: ["latin"],
	variable: "--font-dm-serif",
	display: "swap",
	weight: "400",
})

// Local Fonts
const chillax = localFont({
	src: "../../public/fonts/Chillax-Variable.ttf",
	variable: "--font-chillax",
	display: "swap",
})

const stardom = localFont({
	src: "../../public/fonts/Stardom-Regular.otf",
	variable: "--font-stardom",
	display: "swap",
})

const kola = localFont({
	src: "../../public/fonts/Kola-Regular.otf",
	variable: "--font-kola",
	display: "swap",
})

const rx100 = localFont({
	src: "../../public/fonts/RX100-Regular.otf",
	variable: "--font-rx100",
	display: "swap",
})

const aktura = localFont({
	src: "../../public/fonts/Aktura-Regular.otf",
	variable: "--font-aktura",
	display: "swap",
})

const yuji = localFont({
	src: "../../public/fonts/YujiSyuku-Regular.ttf",
	variable: "--font-yuji",
	display: "swap",
})

const clash = localFont({
	src: "../../public/fonts/ClashGrotesk-Variable.ttf",
	variable: "--font-clash",
	display: "swap",
})

const whyte = localFont({
	src: "../../public/fonts/ABCWhyteInktrapVariable-Trial.ttf",
	variable: "--font-whyte",
	display: "swap",
})

const dirty = localFont({
	src: "../../public/fonts/Dirtyline36Daysoftype2022-Reg.ttf",
	variable: "--font-dirty",
	display: "swap",
})
// Meta data
export const metadata: Metadata = {
	title: "Taha Edits",
	description: "999",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="dark">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body
				className={`${dmSans.variable} ${dmSerif.variable} ${yuji.variable} ${chillax.variable} ${stardom.variable} ${kola.variable} ${rx100.variable} ${aktura.variable} ${clash.variable} ${whyte.variable} ${dirty.variable}`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{/* <Nav /> */}
					{/* <div className="absolute"></div> */}
					{/* <TimelineNavbar /> */}

					{/* <HeaderMenu /> */}
					{/* <Header /> */}
					{/* <KPRSideMenu /> */}
					{children}
					<Footer />

					{/* <SiteFooter /> */}
				</ThemeProvider>
			</body>
		</html>
	)
}
