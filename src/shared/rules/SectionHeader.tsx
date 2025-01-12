const SectionHeader = (props: any) => {
	return (
		<div className={props.className}>
			<div className="space-y-4">
				<span className="text-brand-accent block font-mono text-xs uppercase tracking-widest">
					{"[ " + props.subtitle + " ]"}
				</span>
				{/* <span
					className="inline-flex md:ml-1 animate-text-gradient font-medium bg-clip-text text-transparent bg-[linear-gradient(90deg,#D6009A_0%,#8a56cc_50%,#D6009A_100%)] dark:bg-[linear-gradient(90deg,#FFEBF9_0%,#8a56cc_50%,#FFEBF9_100%)]"
					style={{
						fontSize: "inherit",
						backgroundSize: "200%",
						backgroundClip: "text",
						WebkitBackgroundClip: "text",
						color: "transparent",
					}}
				>
					Ship faster with beautiful components
				</span> */}
				<h3 className="text-3xl font-semibold">
					<span>{props.title}</span>

					{props.title_alt && (
						<span className="text-foreground-lighter inline">
							{props.title_alt}
						</span>
					)}
				</h3>
			</div>
			{props.paragraph && (
				<p className="text-foreground-lighter opacity-90 max-w-3xl text-sm sm:mt-4">
					{props.paragraph}
				</p>
			)}
		</div>
	)
}

export default SectionHeader
