import {
	Accordion,
	AccordionItem,
	AccordionContent,
	AccordionTrigger,
} from "@/components/ui/accordion"

import MaxWidthWrapper from "@/shared/rules/MaxWidthWrapper"
import HeadingCentered from "@/shared/HeadingCentered"

import { SectionIDProps } from "@/types"

import { faqs } from "@/data/FAQ"

export function FAQ({ id }: SectionIDProps) {
	return (
		<div id={id} className="pb-24 pt-16">
			{/* <MaxWidthWrapper> */}
			<HeadingCentered
				teaser="F.A.Q."
				heading="Frequently Asked Questions"
				subheading="For any further questions, please feel free to contact us, we're available 24/7."
			/>
			<div className="mx-auto max-w-4xl px-4">
				<Accordion type="single" collapsible className="w-full">
					{faqs.map((faq) => (
						<AccordionItem key={faq.id} value={faq.id}>
							<AccordionTrigger className="text-lg">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="text-lg text-foreground">
								{faq.answer}
								{faq.list && faq.list.length > 0 && (
									<ul className="mt-2 list-inside list-disc">
										{faq.list.map((item, index) => (
											<li key={index} className="ml-6">
												{item}
											</li>
										))}
									</ul>
								)}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
			{/* </MaxWidthWrapper> */}
		</div>
	)
}
