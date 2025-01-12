import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
// import { JoinNewsletterForm } from "@/components/forms/join-newsletter-form"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/layouts/mode-toggle"
import { Shell } from "@/shared/shells/shell"
import { getCurrentYear } from "@/lib/year"
import Image from "next/image"
import * as birLogo from "/public/_static/png/bir_logo6.png"
// import { IconBrandX } from "@tabler/icons-react"

export function SiteFooter() {
	return (
		<footer className="w-full border-t bg-background">
			<Shell>
				<section
					id="footer-content"
					aria-labelledby="footer-content-heading"
					className="flex flex-col gap-10 lg:flex-row lg:gap-20"
				>
					<section
						id="footer-branding"
						aria-labelledby="footer-branding-heading"
					>
						{/* <Link href="/" className="flex w-fit items-center space-x-2">
							<Icons.logo className="size-6" aria-hidden="true" />
							<span className="font-bold">{siteConfig.name}</span>
							<span className="sr-only">Home</span>
						</Link> */}
						<Link href="/">
							<Image
								src={birLogo}
								width={124}
								height={24}
								alt="Supabase Logo"
								className="hidden dark:block"
								priority
							/>
						</Link>
					</section>
					<section
						id="footer-links"
						aria-labelledby="footer-links-heading"
						className="xxs:grid-cols-2 grid flex-1 grid-cols-1 gap-10 sm:grid-cols-4"
					>
						{siteConfig.footerNav.map((item) => (
							<div key={item.title} className="space-y-3">
								<h4 className="text-base font-medium">{item.title}</h4>
								<ul className="space-y-2.5">
									{item.items.map((link) => (
										<li key={link.title}>
											<Link
												href={link.href}
												target={link?.external ? "_blank" : undefined}
												rel={link?.external ? "noreferrer" : undefined}
												className="text-sm text-muted-foreground transition-colors hover:text-foreground"
											>
												{link.title}
												<span className="sr-only">{link.title}</span>
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</section>
					{/* <section
						id="newsletter"
						aria-labelledby="newsletter-heading"
						className="space-y-3"
					>
						<h4 className="text-base font-medium">
							Subscribe to our newsletter
						</h4>
						<JoinNewsletterForm />
					</section> */}
				</section>
				<section
					id="footer-bottom"
					aria-labelledby="footer-bottom-heading"
					className="flex items-center space-x-4"
				>
					<div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
						&#169; {getCurrentYear()}{" "}
						<Link
							href={siteConfig.links.instagram}
							target="_blank"
							rel="noreferrer"
							className="font-semibold transition-colors hover:text-foreground"
						>
							Brand It Right. All rights reserved
							<span className="sr-only">
								Brand It Right. All rights reserved
							</span>
						</Link>
						.
					</div>
					<div className="flex items-center space-x-1">
						<Link
							href={siteConfig.links.twitter}
							target="_blank"
							rel="noreferrer"
							className={cn(
								buttonVariants({
									size: "icon",
									variant: "ghoster",
								}),
							)}
						>
							<Icons.twitter
								className="size-4 fill-current"
								aria-hidden="true"
							/>
							<span className="sr-only">Twitter</span>
						</Link>
						<Link
							href={siteConfig.links.instagram}
							target="_blank"
							rel="noreferrer"
							className={cn(
								buttonVariants({
									size: "icon",
									variant: "ghoster",
								}),
							)}
						>
							<Icons.instagram
								className="size-5 fill-current"
								aria-hidden="true"
							/>
							<span className="sr-only">Instagram</span>
						</Link>
						{/* <Link
							href={siteConfig.links.discord}
							target="_blank"
							rel="noreferrer"
							className={cn(
								buttonVariants({
									size: "icon",
									variant: "ghoster",
								}),
							)}
						>
							<Icons.discord
								className="size-6 fill-current"
								aria-hidden="true"
							/>
							<span className="sr-only">Discord</span>
						</Link>
						<ModeToggle /> */}
					</div>
				</section>
			</Shell>
		</footer>
	)
}
