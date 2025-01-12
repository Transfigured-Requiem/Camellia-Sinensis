import { FooterItem } from "@/types"

const links = {
	twitter: "https://twitter.com/branditrightpro",
	// github: "https://github.com/Transfigured-Requiem/",
	// githubAccount: "https://github.com/Transfigured-Requiem/",
	discord: "https://discord.com/users/branditright",
	calDotCom: "https://cal.com/tahak-bir",
	instagram: "https://www.instagram.com/tahak.bir/",
}

export const siteConfig = {
	name: "Brand it Right",
	url: "https://www.branditright.pro",
	ogImage: "",
	description: "Branding done right, the professional way!",
	links,
	footerNav: [
		{
			title: "Services",
			items: [
				{
					title: "Brand Development & Promotion",
					href: "/services#brand-dev",
					external: true,
				},
				{
					title: "Copywriting",
					href: "/services#copywriting",
					external: true,
				},
				{
					title: "Website Development & SEO",
					href: "/services#web-dev",
					external: true,
				},
				{
					title: "Digital Marketing",
					href: "/services#marketing",
					external: true,
				},
				{
					title: "Content Creation",
					href: "/services#content-creation",
					external: true,
				},
				{
					title: "Consulting & Strategy",
					href: "/services#consulting",
					external: true,
				},
			],
		},
		{
			title: "Company",
			items: [
				{
					title: "X (Twitter)",
					href: links.twitter,
					external: true,
				},
				{
					title: "Instagram",
					href: links.instagram,
					external: true,
				},
				{
					title: "Discord",
					href: links.discord,
					external: true,
				},
				{
					title: "cal.com",
					href: links.calDotCom,
					external: true,
				},
			],
		},

		{
			title: "Support",
			items: [
				{
					title: "About",
					href: "/info/about",
					external: true,
				},
				// {
				// 	title: "About",
				// 	href: "/about/about",
				// 	external: false,
				// },
				{
					title: "Contact",
					href: "/book",
					external: false,
				},

				{
					title: "FAQ",
					href: "/#faq",
					external: false,
				},
				// {
				// 	title: "Changelog",
				// 	href: "/privacy",
				// 	external: false,
				// },
				// {
				// 	title: "Roadmap",
				// 	href: "/privacy",
				// 	external: false,
				// },
			],
		},
		{
			title: "Legal",
			items: [
				{
					title: "Terms",
					href: "/legal/terms",
					external: true,
				},
				{
					title: "Privacy",
					href: "/legal/privacy",
					external: true,
				},
				// {
				// 	title: "Sitemap",
				// 	href: "https://www.youtube.com/watch?v=rwionZbOryo",
				// 	external: true,
				// },
			],
		},
	] satisfies FooterItem[],
}

export type SiteConfig = typeof siteConfig
