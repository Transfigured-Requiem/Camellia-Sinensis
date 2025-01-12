const featuredTestimonial = {
	body: "Loving it so far! Cleaned up my top cluttering newsletter and promotional email subscriptions in just a few minutes.",
	author: {
		name: "Jonni Lundy",
		handle: "jonnilundy",
		imageUrl:
			"https://pbs.twimg.com/profile_images/1651273413053542400/6ul40RRM_400x400.jpg",
		logoUrl: "/vercel.svg",
	},
}
const testimonials: {
	body: string
	author: {
		name: string
		handle: string
		imageUrl: string
	}
}[][][] = [
	[
		[
			{
				body: "Love this new open-source app by @elie2222: getinboxzero.com",
				author: {
					name: "Steven Tey",
					handle: "steventey",
					imageUrl:
						"https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg",
				},
			},
			{
				body: "hey bro, your tool is legit what I been looking for for ages haha. its a god send",
				author: {
					name: "James",
					handle: "",
					imageUrl:
						"https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg",
				},
			},
			{
				body: "this is something I've been searching for a long time – thanks for building it.",
				author: {
					name: "Vinay Katiyar",
					handle: "ktyr",
					imageUrl:
						"https://ph-avatars.imgix.net/2743360/28744c72-2267-49ed-999d-5bdab677ec28?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=120&h=120&fit=crop&dpr=2",
				},
			},
		],
		[
			{
				body: `Finally an "unsubscribe app" that let's you *actually* unsubscribe and filter using Gmail filters (instead of always relying on the 3rd party app to filter those emails). Big plus for me, so I have all filters in one place (inside the Gmail filters, that is). Awesome work! Already a fan :)`,
				author: {
					name: "Wilco de Kreij",
					handle: "emarky",
					imageUrl:
						"https://ph-avatars.imgix.net/28450/8c4c8039-003a-4b3f-80ec-7035cedb6ac3?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=120&h=120&fit=crop&dpr=2",
				},
			},
		],
	],
	[
		[
			{
				body: "fwiw this looks pretty slick. Connected one of my accounts to check it out.",
				author: {
					name: "Nate Kadlac",
					handle: "kadlac",
					imageUrl:
						"https://pbs.twimg.com/profile_images/1558195781089120256/RWvUylSb_400x400.jpg",
				},
			},
			{
				body: "Kudos on the launch😊 I like how easily subscriptions can be managed!",
				author: {
					name: "Prem Saini",
					handle: "prem_saini1",
					imageUrl:
						"https://ph-avatars.imgix.net/4438396/079fabcb-7d01-42d9-a98f-2fc7befce04e?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=120&h=120&fit=crop&dpr=2",
				},
			},
		],
		[
			{
				body: "Wow. Onboarded and started unsubscribing from the worst spammers in just 3 minutes... Thank you 🙏🏼",
				author: {
					name: "Yoni",
					handle: "",
					imageUrl:
						"https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg",
				},
			},
			{
				body: `SUPER excited for this one! Well done, going to get use out of it for sure—have been waiting for a tool like this, it just makes so much sense to have as a layer atop email.`,
				author: {
					name: "Alex Bass",
					handle: "alexhbass",
					imageUrl:
						"https://ph-avatars.imgix.net/3523155/original?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=120&h=120&fit=crop&dpr=2",
				},
			},
		],
	],
]

export { featuredTestimonial, testimonials }
