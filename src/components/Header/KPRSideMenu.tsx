"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"
import { X, Filter } from "lucide-react"

import styles from "./styles.module.css"
import initMenuScript2 from "./script"
import ShuffleText from "./ShuffleText"

const initialPages = [
	{ spanText: "Page 001", linkText: "Up", href: "/#", isActive: false },
	{ spanText: "Page 002", linkText: "Down", href: "/#", isActive: false },
	{ spanText: "Page 003", linkText: "Charm", href: "/#", isActive: false },
	{ spanText: "Page 004", linkText: "Strange", href: "/#", isActive: false },
	{ spanText: "Page 005", linkText: "Top", href: "/#", isActive: false },
	{ spanText: "Page 006", linkText: "Bottom", href: "/#", isActive: false },
]

const menuBottomItems = [
	{
		title: "Connect",
		content: [
			{ text: "Discord", href: "/discord" },
			{ text: "Matrix", href: "/matrix" },
		],
	},
	{ title: "Find me on", content: "Upwork", href: "/upwork" },
	{ title: "US-EN", content: "2025", href: "#" },
]

function KPRSideMenu() {
	const [pages, setPages] = useState(initialPages)

	useEffect(() => {
		initMenuScript2()
	}, [])

	const handlePageClick = (index) => {
		const updatedPages = pages.map((page, i) => ({
			...page,
			isActive: i === index,
		}))
		setPages(updatedPages)
	}

	return (
		<div className={styles.container}>
			<nav className={styles.nav}>
				<div className={styles.menuToggle}>
					<p>Menu</p>
				</div>
				<p>Collection</p>
			</nav>
			<div className={styles.container}>
				<div className={styles.menuContainer}>
					<div className={styles.menu}>
						<div className={styles.menuMain}>
							<div className={styles.menuTop}>
								<div className={styles.menuTopTitle}>
									<p>Discover</p>
								</div>

								<div className={styles.menuTopContent}>
									<div className={styles.menuItem}>
										<div className={styles.menuItemLink}>
											<div className={styles.bgHover}></div>
											<a href="#">Story</a>
										</div>
										<span>Page 001</span>
									</div>

									<div className={styles.menuItem}>
										<div className={styles.menuItemLink}>
											<div className={styles.bgHover}></div>
											<a href="#">Story</a>
										</div>
										<span>Page 002</span>
									</div>

									<div className={styles.menuItem}>
										<div className={styles.menuItemLink}>
											<div className={styles.bgHover}></div>
											<a href="#">Story</a>
										</div>
										<span>Page 003</span>
									</div>

									<div className={styles.menuItem}>
										<div className={styles.menuItemLink}>
											<div className={styles.bgHover}></div>
											<a href="#">Story</a>
										</div>
										<span>Page 004</span>
									</div>

									<div className={styles.menuItem}>
										<div className={styles.menuItemLink}>
											<div className={styles.bgHover}></div>
											<a href="#">Story</a>
										</div>
										<span>Page 005</span>
									</div>

									<div className={styles.menuItem}>
										<div className={styles.menuItemLink}>
											<div className={styles.bgHover}></div>
											<a href="#">Story</a>
										</div>
										<span>Page 006</span>
									</div>
									{/* {pages.map((page, index) => (
										<div
											className={`${styles.menuItem} ${page.isActive ? styles.active : ""}`}
											key={index}
											id={page.isActive ? "active" : undefined}
										>
											<div className={styles.menuItemLink}>
												<div className={styles.bgHover}></div>
												<Link
													href={page.href}
													onClick={() => handlePageClick(index)}
												>
													<ShuffleText text=/>
													{page.linkText}
												</Link>
											</div>
											<span className={styles.spanText}>{page.spanText}</span>
										</div>
									))} */}
								</div>
							</div>
							<div className={styles.menuBottom}>
								{menuBottomItems.map((item, index) => (
									<div className={styles.menuSubItem} key={index}>
										<div className={styles.menuTitle}>
											<p>{item.title}</p>
										</div>
										<div className={styles.menuContent}>
											{Array.isArray(item.content) ? (
												item.content.map((contentItem, i) => (
													<Link
														href={contentItem.href}
														key={i}
														className={styles.menuLink}
													>
														{contentItem.text}
													</Link>
												))
											) : (
												<Link href={item.href} className={styles.menuLink}>
													{item.content}
												</Link>
											)}
										</div>
									</div>
								))}
							</div>
						</div>
						<div className={styles.menuSidebar}>
							<div className={styles.closeBtn}>
								<X className={styles.closeSharp} />
							</div>
							<div className={styles.logo}>
								<Filter className={styles.funnelSharp} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default KPRSideMenu
