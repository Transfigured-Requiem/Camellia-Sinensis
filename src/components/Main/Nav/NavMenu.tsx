import React from "react"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import classNames from "classnames"
// import { ArrowDownRight } from "@radix-ui/react-icons"
import { ArrowDownRight } from "lucide-react"

const NavigationMenuDemo = () => {
	return (
		<NavigationMenu.Root className="relative z-10 flex w-screen justify-center">
			<NavigationMenu.List className="center shadow-blackA4 m-0 flex list-none rounded-md p-1 shadow-[0_2px_10px]">
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
						Learn{" "}
						<ArrowDownRight
							className="text-violet10 duration-[250] relative top-px transition-transform ease-in group-data-[state=open]:-rotate-90"
							aria-hidden
						/>
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft absolute left-0 top-0 w-full sm:w-auto">
						<ul className="one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
							<li className="row-span-3 grid">
								<NavigationMenu.Link asChild>
									<a
										className="from-purple9 to-indigo9 focus:shadow-violet7 flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
										href="/"
									>
										<svg
											aria-hidden
											width="38"
											height="38"
											viewBox="0 0 25 25"
											fill="white"
										>
											<path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
											<path d="M12 0H4V8H12V0Z"></path>
											<path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
										</svg>
										<div className="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-white">
											Radix Primitives
										</div>
										<p className="text-mauve4 text-[14px] leading-[1.3]">
											Unstyled, accessible components for React.
										</p>
									</a>
								</NavigationMenu.Link>
							</li>

							<ListItem href="https://stitches.dev/" title="Stitches">
								CSS-in-JS with best-in-class developer experience.
							</ListItem>
							<ListItem href="/colors" title="Colors">
								Beautiful, thought-out palettes with auto dark mode.
							</ListItem>
							<ListItem href="https://icons.radix-ui.com/" title="Icons">
								A crisp set of 15x15 icons, balanced and consistent.
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
						Overview{" "}
						<ArrowDownRight
							className="text-violet10 duration-[250] relative top-px transition-transform ease-in group-data-[state=open]:-rotate-90"
							aria-hidden
						/>
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto">
						<ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
							<ListItem
								title="Introduction"
								href="/primitives/docs/overview/introduction"
							>
								Build high-quality, accessible design systems and web apps.
							</ListItem>
							<ListItem
								title="Getting started"
								href="/primitives/docs/overview/getting-started"
							>
								A quick tutorial to get you up and running with Radix
								Primitives.
							</ListItem>
							<ListItem title="Styling" href="/primitives/docs/guides/styling">
								Unstyled and compatible with any styling solution.
							</ListItem>
							<ListItem
								title="Animation"
								href="/primitives/docs/guides/animation"
							>
								Use CSS keyframes or any animation library of your choice.
							</ListItem>
							<ListItem
								title="Accessibility"
								href="/primitives/docs/overview/accessibility"
							>
								Tested in a range of browsers and assistive technologies.
							</ListItem>
							<ListItem
								title="Releases"
								href="/primitives/docs/overview/releases"
							>
								Radix Primitives releases and their changelogs.
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Link
						className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
						href="https://github.com/radix-ui"
					>
						Github
					</NavigationMenu.Link>
				</NavigationMenu.Item>

				<NavigationMenu.Indicator className="data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
					<div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-brand" />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>

			<div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
				<NavigationMenu.Viewport className="data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-zinc-900/40 transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
			</div>
		</NavigationMenu.Root>
	)
}

const ListItem = React.forwardRef(
	({ className, children, title, ...props }, forwardedRef) => (
		<li>
			<NavigationMenu.Link asChild>
				<a
					className={classNames(
						"hover:bg-mauve3 focus:shadow-violet7 block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors focus:shadow-[0_0_0_2px]",
						className,
					)}
					{...props}
					ref={forwardedRef}
				>
					<div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
						{title}
					</div>
					<p className="text-mauve11 leading-[1.4]">{children}</p>
				</a>
			</NavigationMenu.Link>
		</li>
	),
)

export default NavigationMenuDemo
