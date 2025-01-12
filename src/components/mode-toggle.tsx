"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Terminal, Sun, Moon } from "lucide-react"

export function ModeToggle() {
	const { setTheme } = useTheme()

	return (
		<div className="my-2">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="void" className="w-9 px-0">
						<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-brand transition-all dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-brand transition-all dark:rotate-0 dark:scale-100" />
						<span className="sr-only">Toggle theme</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem
						onClick={() => setTheme("light")}
						className="hover:text-brand"
					>
						<Sun className="mr-2 size-4" />
						light
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={() => setTheme("dark")}
						className="hover:text-brand"
					>
						<Moon className="mr-2 size-4" />
						dark
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={() => setTheme("system")}
						className="hover:text-brand"
					>
						<Terminal className="mr-2 size-4" />
						system
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
