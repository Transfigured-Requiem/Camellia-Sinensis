"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
// import Telemetry from "~/lib/telemetry"
// import gaEvents from "~/lib/gaEvents"
// import { IconCheck } from "ui"
import { Check } from "lucide-react"
// import { useTelemetryProps } from "common/hooks/useTelemetryProps"
// import { PRODUCT_SHORTNAMES } from "shared-data/products"

import SectionContainer from "../../shared/rules/SectionContainer"
import ProductCard from "./ProductCard"
// import AuthVisual from "./AuthVisual"
import DatabaseVisual from "./DatabaseVisual"
// import FunctionsVisual from "./FunctionsVisual"
// import RealtimeVisual from "./RealtimeVisual"
// import StorageVisual from "./StorageVisual"
// import VectorVisual from "./VectorVisual"
import solutions from "@/data/Solutions"
const Products = (props: any) => {
	// const jjs = solutions.database.description
	return (
		<SectionContainer className="!pt-0 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4 xl:gap-3 2xl:gap-6 md:grid-cols-12">
			<ProductCard
				className="col-span-6 lg:col-span-12 xl:col-span-6"
				alignLeft
				url={solutions["database"].url}
				icon={solutions["database"].icon}
				title={solutions["database"].name}
				subtitle={solutions["database"].description}
				highlights={
					<ul className="flex flex-col gap-1 text-sm">
						<li>
							<Check className="inline h-4 w-4" /> 100% portable
						</li>
						<li>
							<Check className="inline h-4 w-4" /> Built-in Auth with RLS
						</li>
						<li>
							<Check className="inline h-4 w-4" /> Easy to extend
						</li>
					</ul>
				}
				// onClick={() => sendTelemetryEvent(PRODUCT_SHORTNAMES.DATABASE)}
				image={<DatabaseVisual />}
				// <Image>
			/>
			<ProductCard
				className="col-span-6 xl:col-span-3"
				url={solutions["database"].url}
				icon={solutions["database"].icon}
				title={solutions["database"].name}
				// subtitle={solutions["database"].description}
				subtitle={
					<>
						Add user sign ups and logins,
						<br className="inline-block sm:hidden lg:inline-block" /> securing
						your data with Row Level Security.
					</>
				}
				// image={<AuthVisual />}
				// onClick={() => sendTelemetryEvent(PRODUCT_SHORTNAMES.AUTHENTICATION)}
			/>
			<ProductCard
				className="col-span-6 xl:col-span-3"
				url={solutions["database"].url}
				icon={solutions["database"].icon}
				title={solutions["database"].name}
				// subtitle={solutions["database"].description}
				subtitle={
					<>
						Add user sign ups and logins,
						<br className="inline-block sm:hidden lg:inline-block" /> securing
						your data with Row Level Security.
					</>
				}
				// image={<AuthVisual />}
				// onClick={() => sendTelemetryEvent(PRODUCT_SHORTNAMES.AUTHENTICATION)}
			/>
		</SectionContainer>
	)
}

export default Products
