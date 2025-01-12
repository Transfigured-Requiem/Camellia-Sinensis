import Link from "next/link"
// import Button from "./Button"
import { buttonVariants, Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import HeadingCentered from "../../shared/HeadingCentered"
import UnderlineSVG from "@/shared/UnderlineSVG"

interface Props {
	className?: string
	darkerBg?: boolean
}

const CTABanner = ({ darkerBg, className }: Props) => {
	return (
		<div
			className={[
				`grid grid-cols-12 items-center gap-4 border-t bg-background px-16 py-32 text-center`,
				darkerBg && "bg-alternative",
				className,
			].join(" ")}
		>
			{/* <div className="col-span-12">
				<h2 className="text-3xl ">
					<span className="font-medium text-gray-500">Build in a weekend,</span>
					<span className="font-semibold font text-foreground block sm:inline">
						{" "}
						scale to millions
					</span>
				</h2>
			</div> */}
			<div className="col-span-12">
				<p className="mx-auto mb-3 max-w-2xl text-sm font-semibold uppercase text-brand sm:mt-4">
					[ limited time only ]
				</p>
				<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
					We launch you to{" "}
					<span className="bg-gradient-to-br from-[#10F984] from-[50%] to-[#107AF9] bg-clip-text text-transparent">
						millions!
					</span>
					{/* <UnderlineSVG /> */}
				</h2>
				<h4 className="text-md mx-auto mt-3 max-w-3xl text-zinc-400 sm:mt-4">
					It takes less than 2 minutes to reserve a free spot!
				</h4>
			</div>

			<div className="col-span-12 mt-6">
				{/* <a href="https://supabase.com/dashboard"> */}
				{/* <Button size="medium" className="text-white">
					Start your project
				</Button> */}
				{/* </a> */}
				<Button variant="ghoster">
					<Link
						className="group relative flex min-w-[120px] items-center gap-1.5 overflow-hidden rounded-full p-[2px] font-semibold text-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
						href="/book"
						rel="noopener noreferrer"
						// onClick={handleClick}
					>
						<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10F984_0%,#10d6f9_50%,#10F984_100%)]" />
						<div className="inline-flex h-10 cursor-pointer items-center justify-center rounded-full bg-black/85 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-500 group-hover:bg-transparent/70">
							Check availability in your area
							<ArrowRight className="ml-1 size-4 transition-all group-hover:translate-x-1/4" />
							{/* <div className="">
												
											</div> */}
						</div>
					</Link>
				</Button>
			</div>
		</div>
	)
}

export default CTABanner
