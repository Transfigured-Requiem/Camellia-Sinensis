import React from "react"

import { InfiniteSlider } from "@/shared/InfiniteSlider"

const names = ["Taha", "タハ", "ⵟⴰⵀⴰ", "타하", "Τάχα", "Таха", "塔哈", "طه"]

export default function NameScroll() {
	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="relative z-0 h-[70px] w-[500px] border border-red-600/30 text-3xl">
				<InfiniteSlider
					gap={20}
					// durationOnHover={40}
					duration={20}
					// className="h-full"
				>
					{names.map((name, index) => (
						<h1
							key={index}
							className="text-4xl font-bold text-brand-red"
							// style={{ writingMode: "horizontal-tb", textOrientation: "mixed" }}
						>
							{name}
						</h1>
					))}
					{/* <h1 className="my-auto font-bold text-brand-red">Taha</h1>
					<h1 className="my-auto font-bold text-brand-red">タハ</h1>
					<h1 className="my-auto font-bold text-brand-red">ⵟⴰⵀⴰ</h1>
					<h1 className="my-auto font-bold text-brand-red">타하</h1>
					<h1 className="my-auto font-bold text-brand-red">Τάχα</h1>
					<h1 className="my-auto font-bold text-brand-red">Таха</h1>
					<h1 className="font-bold text-brand-red">塔哈</h1>
					<h1 className="my-auto font-bold text-brand-red">طه</h1> */}
				</InfiniteSlider>
				{/* <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div> */}
			</div>
		</div>
	)
}
