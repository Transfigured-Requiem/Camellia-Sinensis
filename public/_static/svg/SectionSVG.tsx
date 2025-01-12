import CrossSVG from "./CrossSVG"

const SectionSVG = ({ crossesOffset }: any) => {
	return (
		<>
			<CrossSVG
				className={`hidden absolute -top-[0.3125rem] left-[1.5625rem] ${
					crossesOffset && crossesOffset
				} pointer-events-none lg:block xl:left-[2.1875rem]`}
			/>

			<CrossSVG
				className={`hidden absolute  -top-[0.3125rem] right-[1.5625rem] ${
					crossesOffset && crossesOffset
				} pointer-events-none lg:block xl:right-[2.1875rem]`}
			/>
		</>
	)
}

export default SectionSVG
