import { ServicesMenuIDProps } from "@/types"
import SectionContainer from "../../../shared/rules/SectionContainer"
import TwitterSocialProof from "./TwitterSocialProof"

const TwitterSocialSection = ({ id }: ServicesMenuIDProps) => {
	return (
		<div className="relative" id={id}>
			<div className="section-container pb-0">
				<div className="overflow-x-hidden">
					<SectionContainer className="mb-0 pb-8">
						<TwitterSocialProof />
					</SectionContainer>
				</div>
			</div>
		</div>
	)
}

export default TwitterSocialSection
