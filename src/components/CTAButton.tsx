"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

import CustomButton from "@/shared/CustomButton"

import { handleScrollDownFull } from "@/lib/scroll-down"
import { siteConfig } from "@/config/site"

function CTAButton() {
	return (
		<div className="flex flex-row justify-center gap-y-4 pt-6 md:justify-start">
			<CustomButton
				text="Learn more"
				appearance="sec"
				onClick={handleScrollDownFull}
			/>
			<CustomButton
				text="Get a spot for free"
				appearance="main"
				arrow
				href={siteConfig.links.instagram}
			/>
			{/* <Button variant="ghoster" className="px-0">
        <Link
          className="flex group min-w-[120px] items-center font-semibold text-foreground shadow-sm gap-1.5 relative overflow-hidden rounded-full p-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          href=""
          rel="noopener noreferrer"
        >
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#292D2E_0%,#3F4546_50%,#292D2E_100%)]" />
          <div className="inline-flex h-10 w-full px-4 py-2 cursor-pointer items-center justify-center rounded-full bg-black/85 group-hover:bg-transparent/50 transition-all duration-500  text-sm font-medium text-foreground backdrop-blur-3xl">
            Learn more
          </div>
        </Link>
      </Button>
      <Button variant="ghoster">
        <Link
          className="flex group min-w-[120px] items-center font-semibold text-foreground shadow-sm gap-1.5 relative overflow-hidden rounded-full p-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          href="/book"
          rel="noopener noreferrer"
        >
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10F984_0%,#10d6f9_50%,#10F984_100%)]" />
          <div className="inline-flex h-10 px-4 py-2 cursor-pointer items-center justify-center rounded-full bg-black/85 group-hover:bg-transparent/70 transition-all duration-500  text-sm font-medium text-white backdrop-blur-3xl">
            Get free consultation
            <ArrowRight className="size-4 ml-1  transition-all group-hover:translate-x-1/4" />
          </div>
        </Link>
      </Button> */}
		</div>
	)
}

export default CTAButton
