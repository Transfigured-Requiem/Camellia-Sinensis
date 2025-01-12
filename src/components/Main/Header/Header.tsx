"use client"
import { useState } from "react"

export default function HeaderMenu() {
	const [isActive, setIsActive] = useState(false)

	return (
		<>
			<div
				onClick={() => setIsActive(!isActive)}
				className="fixed right-0 top-0 z-10 m-5 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-brand"
			>
				<div className={`relative w-full ${isActive ? "burger-active" : ""}`}>
					<div
						className="absolute left-1/2 top-1/2 h-[4px] w-2/5 -translate-x-1/2 -translate-y-1/2 bg-background transition-transform duration-300"
						style={{
							transform: isActive
								? "translate(-50%, -50%) rotate(45deg)"
								: "translate(-50%, calc(-50% - 5px))",
						}}
					/>
					<div
						className="absolute left-1/2 top-1/2 h-[4px] w-2/5 -translate-x-1/2 -translate-y-1/2 bg-background transition-transform duration-300"
						style={{
							transform: isActive
								? "translate(-50%, -50%) rotate(-45deg)"
								: "translate(-50%, calc(-50% + 5px))",
						}}
					/>
				</div>
			</div>
		</>
	)
}
