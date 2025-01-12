import Image from "next/image"

export default function BentoGrid2() {
	return (
		<main className="flex min-h-screen w-full items-center justify-center bg-background p-4 font-[family-name:var(--font-dm-sans)] lg:pb-[64px] lg:pt-[84px]">
			<div className="bento-grid grid h-full gap-8 md:grid-cols-2 lg:grid-cols-[minmax(0,250px)_repeat(2,minmax(0,260px))_minmax(0,250px)] lg:grid-rows-[minmax(0,320px)_minmax(0,70px)_minmax(0,140px)_minmax(0,80px)_minmax(0,140px)]">
				<div className="box7 flex flex-col rounded-xl bg-[#faeee2] p-5 md:items-center md:p-8 md:pb-1 lg:col-span-1 lg:row-span-2">
					<p className="pb-5 text-3xl font-medium tracking-tight text-background md:text-[2rem] md:tracking-tighter lg:pt-10 lg:text-4xl">
						Create and schedule content{" "}
						<span className="italic text-[#7651dc]">quicker.</span>
					</p>
					<Image
						src="/assets/illustration-create-post.webp"
						alt="Illustration of a button to create a new post"
						width={230}
						height={100}
						className="max-w-48"
					/>
				</div>
				<div className="box1 flex flex-col items-center justify-center gap-6 rounded-xl bg-[#7651dc] px-6 py-10 md:p-4 lg:col-span-2 lg:row-span-1">
					<h1 className="text-center text-5xl font-medium leading-[2.5rem] tracking-tighter text-white md:text-[3.5rem] md:leading-none md:tracking-normal">
						Social Media <span className="text-[#fdcb6a]">10x </span>
						<span className="italic">Faster </span>
						with AI
					</h1>
					<div className="flex flex-col items-center gap-2">
						<Image
							src="/assets/illustration-five-stars.webp"
							alt="Five stars representing customer satisfaction"
							width={200}
							height={100}
							aria-hidden="true"
						/>
						<p className="text-bacgkround text-lg text-white">
							Over 4,000 5-star reviews
						</p>
					</div>
				</div>

				<div className="box4 relative flex flex-col justify-between gap-6 overflow-hidden rounded-xl bg-[#dcd1fc] px-4 py-8 md:gap-4 md:px-6 md:py-12 lg:col-span-1 lg:row-span-3 lg:gap-0">
					<h2 className="text-center text-2xl font-medium tracking-tight md:text-3xl md:tracking-tighter lg:text-left lg:leading-tight">
						Schedule to social media.
					</h2>
					<Image
						src="/assets/illustration-schedule-posts.webp"
						alt="Illustration of a weekly schedule showing the best times to post"
						width={250}
						height={100}
						className="mx-auto w-96 lg:absolute lg:bottom-[35%] lg:left-[5rem] lg:scale-[1.4] lg:scale-y-[1.35]"
					/>
					<p className="text-center text-xl leading-[1em] tracking-tighter text-background lg:text-left">
						Optimize post timings to publish content at the perfect time for
						your audience.
					</p>
				</div>

				<div className="box8 flex flex-col justify-between gap-4 rounded-xl bg-[#ffcc69] p-5 md:p-6 lg:col-span-1 lg:row-span-3 lg:row-start-3">
					<p className="text-3xl font-medium tracking-tight text-background md:text-4xl md:tracking-tighter">
						Write your content using AI.
					</p>
					<Image
						src="/assets/illustration-ai-content.webp"
						alt="Illustration representing AI content generation"
						width={300}
						height={100}
						className="mb-3 max-w-52 md:mx-auto lg:scale-[1.05]"
					/>
				</div>

				<div className="box2 relative overflow-hidden rounded-xl bg-[#fff] p-4 lg:col-span-1 lg:row-span-2">
					<Image
						src="/assets/illustration-multiple-platforms.webp"
						alt="Illustration of multiple social media platforms"
						width={300}
						height={100}
						className="lg:absolute lg:left-[3.5rem] lg:top-8 lg:scale-125"
					/>
					<p className="pt-5 text-2xl font-medium leading-[.9em] tracking-tight text-background md:pt-8 md:text-[2rem] md:tracking-tighter lg:p-0 lg:pl-2 lg:pt-[3.0em]">
						Manage multiple accounts and platforms.
					</p>
				</div>

				<div className="box3 relative flex flex-col overflow-hidden rounded-xl bg-[#ffcc69] px-6 lg:col-span-1 lg:row-span-2">
					<p className="py-4 text-2xl font-medium leading-[.9em] tracking-tight text-background md:text-[2rem] md:tracking-tighter lg:pt-6">
						Maintain a consistent posting schedule.
					</p>
					<Image
						src="/assets/illustration-consistent-schedule.webp"
						alt="Illustration of a weekly posting schedule"
						width={210}
						height={100}
						className="md:w-18 lg:w-54 md:mt-auto lg:absolute lg:bottom-[-4.5em] lg:left-1/2 lg:-translate-x-1/2"
					/>
				</div>

				<div className="box6 flex flex-col justify-between rounded-xl bg-[#fff] p-6 lg:col-span-1 lg:row-span-2">
					<p className="pb-4 text-lg text-background md:pb-0">
						<span className="lg:pb- block pb-2 text-5xl font-medium tracking-tighter md:text-[4rem]">
							&gt;56%
						</span>
						faster audience growth
					</p>
					<Image
						src="/assets/illustration-audience-growth.webp"
						alt="Avatars symbolizing audience growth"
						width={180}
						height={100}
					/>
				</div>

				<div className="box5 flex flex-col items-center justify-center gap-10 rounded-xl bg-[#7651dc] p-6 md:gap-4 lg:col-span-2 lg:row-span-2 lg:flex-row">
					<Image
						src="/assets/illustration-grow-followers.webp"
						alt="Graph showing follower growth"
						width={220}
						height={100}
					/>
					<p className="px-6 text-center text-3xl font-medium leading-none tracking-tighter text-background text-white md:px-0 md:text-left md:text-[2.4rem]">
						Grow followers with non-stop content.
					</p>
				</div>
			</div>
		</main>
	)
}
