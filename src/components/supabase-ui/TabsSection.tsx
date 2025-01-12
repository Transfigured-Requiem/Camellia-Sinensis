import React from "react"
import ImageCarousel from "./ImageCarousel"
import SectionContainer from "../../shared/rules/SectionContainer"

// fix this import
import AdminAccessData from "@/data/home/tabs.json"
// import customerStories from "@/data/CustomerStories"
const AdminAccess = () => {
	return (
		<SectionContainer>
			<div className="mb-16">
				<h2 className="h3">Build your app without leaving the dashboard</h2>
			</div>
			<ImageCarousel content={AdminAccessData} altTabView={true} />
		</SectionContainer>
	)
}

export default AdminAccess
