"use client"
import { SlidingNumber } from "./SlidingNumber"
import { useEffect, useState } from "react"

export function Clock() {
	const [hours, setHours] = useState(new Date().getHours())
	const [minutes, setMinutes] = useState(new Date().getMinutes())
	const [seconds, setSeconds] = useState(new Date().getSeconds())

	useEffect(() => {
		const interval = setInterval(() => {
			setHours(new Date().getHours())
			setMinutes(new Date().getMinutes())
			setSeconds(new Date().getSeconds())
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className="font-rx100 fixed bottom-4 right-4 z-40 flex items-center gap-0.5 rounded-lg bg-black/50 p-2 font-mono text-lg shadow-lg">
			<SlidingNumber value={hours} padStart={true} />
			<span className="text-brand-red">:</span>
			<SlidingNumber value={minutes} padStart={true} />
			<span className="text-brand-red">:</span>
			<SlidingNumber value={seconds} padStart={true} />
		</div>
	)
}
