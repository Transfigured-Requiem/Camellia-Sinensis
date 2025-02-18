"use client"

import React from "react"

import ShuffleText from "@/components/Header/ShuffleText"
import { Clock } from "@/shared/TimeDisplay"

function NotFound() {
	return (
		<div className="flex h-screen items-center justify-center text-7xl">
			<h1 className="font-whyte font-mono font-bold uppercase">
				Page Does{" "}
				<span className="text-brand-red">
					<ShuffleText text="Not" />
				</span>{" "}
				Exist<span className="text-brand-red">!</span>
			</h1>
			<Clock />
		</div>
	)
}

export default NotFound
