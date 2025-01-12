// import { PRODUCT_NAMES } from "shared-data/products"
//? So it somehow didn't work before (fetching author_img)
//? One search for any author_img made it work on localhost
const ExampleArr = [
	{
		type: "example",
		tags: ["Next.js", "Stripe", "Vercel"],
		title: "DIIC (Define, Illustrate, Involve, Call to Action)",
		description:
			"The all-in-one subscription starter kit for high-performance SaaS applications, powered by Stripe, Supabase, and Vercel.",
		author: "Vercel",
		author_url: "https://github.com/vercel",
		author_img: "https://avatars.githubusercontent.com/u/14985020",
		repo_name: "vercel/nextjs-subscription-payments",
		repo_url: "https://github.com/vercel/nextjs-subscription-payments",
		vercel_deploy_url:
			"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnextjs-subscription-payments&env=NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,STRIPE_SECRET_KEY&envDescription=Enter%20your%20Stripe%20API%20keys.&envLink=https%3A%2F%2Fdashboard.stripe.com%2Fapikeys&project-name=nextjs-subscription-payments&repository-name=nextjs-subscription-payments&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&external-id=https%3A%2F%2Fgithub.com%2Fvercel%2Fnextjs-subscription-payments%2Ftree%2Fmain",
		demo_url: "https://subscription-payments.vercel.app/",
	},
	{
		type: "example",
		tags: ["Next.js", "Vercel"],
		title: "PAS (Problem, Agitation, Solution)",
		description:
			"A Next.js App Router template configured with cookie-based auth using Supabase, TypeScript and Tailwind CSS.",
		author: "Supabase",
		author_url: "https://github.com/supabase",
		author_img: "https://avatars.githubusercontent.com/u/54469796",
		repo_name: "vercel/next.js/examples/with-supabase",
		repo_url:
			"https://github.com/vercel/next.js/tree/canary/examples/with-supabase",
		vercel_deploy_url:
			"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&project-name=nextjs-with-supabase&repository-name=nextjs-with-supabase&demo-title=nextjs-with-supabase&demo-description=This%20starter%20configures%20Supabase%20Auth%20to%20use%20cookies%2C%20making%20the%20user%27s%20session%20available%20throughout%20the%20entire%20Next.js%20app%20-%20Client%20Components%2C%20Server%20Components%2C%20Route%20Handlers%2C%20Server%20Actions%20and%20Middleware.&demo-url=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2F&external-id=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&demo-image=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2Fopengraph-image.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6",
		demo_url: "https://demo-nextjs-with-supabase.vercel.app/",
	},
	{
		type: "example",
		tags: ["Next.js", "OpenAI", "Vercel"],
		title: "HSO (Headline, Subheadline, Offer)",
		description:
			"An open-source AI chatbot app template built with Next.js, the Vercel AI SDK, OpenAI, and Supabase.",
		author: "Supabase",
		author_url: "https://github.com/supabase",
		author_img: "https://avatars.githubusercontent.com/u/54469796",
		repo_name: "supabase-community/vercel-ai-chatbot",
		repo_url: "https://github.com/supabase-community/vercel-ai-chatbot",
		vercel_deploy_url:
			"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsupabase-community%2Fvercel-ai-chatbot&env=OPENAI_API_KEY&envDescription=You%20must%20first%20activate%20a%20Billing%20Account%20here%3A%20https%3A%2F%2Fplatform.openai.com%2Faccount%2Fbilling%2Foverview&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys&project-name=vercel-ai-chatbot-with-supabase&repository-name=vercel-ai-chatbot-with-supabase&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&external-id=https%3A%2F%2Fgithub.com%2Fsupabase-community%2Fvercel-ai-chatbot%2Ftree%2Fmain",
		demo_url: "",
	},
	{
		type: "example",
		tags: ["LangChain", "Next.js"],
		// products: [PRODUCT_NAMES.DATABASE, PRODUCT_NAMES.VECTOR],
		title: "AIDA (Attention, Interest, Desire, Action)",
		description:
			"Starter template and example use-cases for LangChain projects in Next.js, including chat, agents, and retrieval.",
		author: "Supabase",
		author_url: "https://github.com/supabase",
		author_img: "https://avatars.githubusercontent.com/u/54469796",
		repo_name: "langchain-ai/langchain-nextjs-template",
		repo_url: "https://github.com/langchain-ai/langchain-nextjs-template",
		vercel_deploy_url:
			"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flangchain-ai%2Flangchain-nextjs-template",
		demo_url: "https://langchain-nextjs-template.vercel.app/",
	},
	{
		type: "example",
		tags: ["Flutter"],
		title: "4 Ps (Picture, Promise, Prove, Push)",
		description:
			"Get started with Supabase and Flutter by building a user management app with auth, file storage, and database.",
		author: "Supabase Community",
		author_url: "https://github.com/supabase-community",
		author_img: "https://avatars.githubusercontent.com/u/87650496",
		repo_name: "supabase/examples/user-management/flutter-user-management",
		repo_url:
			"https://github.com/supabase/supabase/tree/master/examples/user-management/flutter-user-management",
		vercel_deploy_url: "",
		demo_url: "",
	},
	{
		type: "example",
		tags: ["Flutter"],
		title: "BAB (Before, After, Bridge)",
		description:
			"Get started with Supabase and Flutter by building a user management app with auth, file storage, and database.",
		author: "Supabase Community",
		author_url: "https://github.com/supabase-community",
		author_img: "https://avatars.githubusercontent.com/u/87650496",
		repo_name: "supabase/examples/user-management/flutter-user-management",
		repo_url:
			"https://github.com/supabase/supabase/tree/master/examples/user-management/flutter-user-management",
		vercel_deploy_url: "",
		demo_url: "",
	},

	{
		type: "example",
		tags: ["Flutter"],
		title: "FAB (Features, Advantages, Benefits)",
		description:
			"Get started with Supabase and Flutter by building a user management app with auth, file storage, and database.",
		author: "Supabase Community",
		author_url: "https://github.com/supabase-community",
		author_img: "https://avatars.githubusercontent.com/u/87650496",
		repo_name: "supabase/examples/user-management/flutter-user-management",
		repo_url:
			"https://github.com/supabase/supabase/tree/master/examples/user-management/flutter-user-management",
		vercel_deploy_url: "",
		demo_url: "",
	},
	{
		type: "example",
		tags: ["Flutter"],
		title: "STAR (Situation, Task, Action, Result)",
		description:
			"Get started with Supabase and Flutter by building a user management app with auth, file storage, and database.",
		author: "Supabase Community",
		author_url: "https://github.com/supabase-community",
		author_img: "https://avatars.githubusercontent.com/u/87650496",
		repo_name: "supabase/examples/user-management/flutter-user-management",
		repo_url:
			"https://github.com/supabase/supabase/tree/master/examples/user-management/flutter-user-management",
		vercel_deploy_url: "",
		demo_url: "",
	},
	{
		type: "example",
		tags: ["Flutter"],
		title: "PASTOR (Problem, Amplify, Story, Transformation, Offer, Response)",
		description:
			"Get started with Supabase and Flutter by building a user management app with auth, file storage, and database.",
		author: "Supabase Community",
		author_url: "https://github.com/supabase-community",
		author_img: "https://avatars.githubusercontent.com/u/87650496",
		repo_name: "supabase/examples/user-management/flutter-user-management",
		repo_url:
			"https://github.com/supabase/supabase/tree/master/examples/user-management/flutter-user-management",
		vercel_deploy_url: "",
		demo_url: "",
	},
	{
		type: "example",
		tags: ["Flutter"],
		title: " 4 Cs (Clear, Concise, Compelling, Credible)",
		description:
			"Get started with Supabase and Flutter by building a user management app with auth, file storage, and database.",
		author: "Supabase Community",
		author_url: "https://github.com/supabase-community",
		author_img: "https://avatars.githubusercontent.com/u/87650496",
		repo_name: "supabase/examples/user-management/flutter-user-management",
		repo_url:
			"https://github.com/supabase/supabase/tree/master/examples/user-management/flutter-user-management",
		vercel_deploy_url: "",
		demo_url: "",
	},
]
export default ExampleArr
