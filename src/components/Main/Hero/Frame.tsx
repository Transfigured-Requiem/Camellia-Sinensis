import { ChevronsRight } from "lucide-react"

import { ModeToggle } from "@/components/mode-toggle"

function Frame({ children }) {
	return (
		<div className="m-5 grid h-[calc(100vh-4rem)] grid-cols-[3.5rem_1fr] grid-rows-[3.5rem_1fr] gap-0 overflow-x-hidden rounded-lg border border-gray-700 dark:border-zinc-100/20">
			{/* Top-left small box */}
			<div className="col-span-1 row-span-1 flex items-center justify-center rounded-tl-lg transition-all duration-500 hover:border hover:border-brand">
				<ChevronsRight className="text-brand-50 hover:text-brand" />
			</div>

			{/* Top-right horizontal box */}
			<div className="col-span-1 row-span-1 flex items-center justify-center border-l border-gray-700 dark:border-zinc-100/20"></div>

			{/* Left vertical box */}
			<div className="col-span-1 row-span-1 flex flex-col content-center items-center border-t border-gray-700 dark:border-zinc-100/20">
				<div className="col-span-1 row-span-10 flex w-full items-center justify-center rounded-bl-lg border border-zinc-100/20 border-opacity-0 transition-all duration-500 hover:border hover:border-brand">
					<ModeToggle />
				</div>
			</div>

			{/* Main content area */}
			<div className="col-span-1 row-span-1 flex justify-between border-l border-t border-gray-700 dark:border-zinc-100/20">
				{children}
			</div>
		</div>
	)
}

export default Frame
