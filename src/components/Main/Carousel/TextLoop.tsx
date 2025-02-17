import { TextLoop } from "@/shared/TextLoop"

export function SkillsTextLoop() {
	return (
		<div className="fixed bottom-4 left-4 p-2">
			<p className="font-whyte inline-flex whitespace-pre-wrap text-lg">
				<span className="pr-1 text-brand-red">&ldquo;</span>{" "}
				<TextLoop
					className="overflow-y-clip"
					transition={{
						type: "spring",
						stiffness: 900,
						damping: 80,
						mass: 10,
					}}
					variants={{
						initial: {
							y: 20,
							rotateX: 90,
							opacity: 0,
							filter: "blur(4px)",
						},
						animate: {
							y: 0,
							rotateX: 0,
							opacity: 1,
							filter: "blur(0px)",
						},
						exit: {
							y: -20,
							rotateX: -90,
							opacity: 0,
							filter: "blur(4px)",
						},
					}}
				>
					<span>Davinci Resolve</span>
					<span>Premiere Pro</span>
					<span>After Effects</span>
					<span>Illustrator</span>
					<span>Photoshop</span>
					<span>Lightroom</span>
					<span>Blender</span>
				</TextLoop>
				<span className="pl-1 text-brand-red">&rdquo;</span>
			</p>
		</div>
	)
}
