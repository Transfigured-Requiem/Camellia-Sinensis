import DevelopersDropdown from "@/components/supabase-ui/Nav/DeveloperDropdown"
import ProductDropdown from "@/components/supabase-ui/Nav/ProductDropdown"

import { data as DevelopersData } from "@/data/Developers"
import SolutionsData from "@/data/Solutions"
import { url } from "inspector"
import { title } from "process"

export const menu = {
	primaryNav: [
		{
			title: "Services",
			hasDropdown: true,
			dropdown: <ProductDropdown />,
			dropdownContainerClassName: "rounded-2xl",
			subMenu: SolutionsData,
		},
		{
			title: "Bundles",
			hasDropdown: true,
			dropdown: <DevelopersDropdown />,
			dropdownContainerClassName: "rounded-2xl",
			subMenu: DevelopersData,
		},
		{
			title: "Testimonials",
			url: "/#tweets",
		},
		{
			title: "About",
			url: "/About",
		},
		{ title: "FAQ", url: "/#faq" },
		// {
		// 	title: "About",
		// 	url: "/info/about",
		// },
	],
}
