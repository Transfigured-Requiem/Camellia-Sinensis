interface Props {
	teaser?: string
	heading?: React.ReactNode
	subheading?: string
}

export default function HeadingCentered({
	teaser,
	heading,
	subheading,
}: Props) {
	return (
		<div className="mb-12 text-center">
			<p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#46e995] from-[40%]  via-[#43bdff] via-[70%] to-[#46C9E9] to-[80%] mx-auto mb-3 max-w-2xl font-semibold uppercase sm:mt-4">
				[ {teaser} ]
			</p>
			<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
				{heading}
			</h2>
			<h4 className="mx-auto mt-3 max-w-3xl text-md text-zinc-400 sm:mt-4 ">
				{subheading}
			</h4>
		</div>
	)
}
