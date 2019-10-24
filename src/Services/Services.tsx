import React from "react";

const SERVICES = [
	{
		title: "Design & Research",
		description:
			"Design is at the core of everything I do. I can help you communicate your brand through thoughtful, inventive, and effective design.",
		tags: [
			"Field Studies",
			"User Interviews",
			"Stakeholder Interviews",
			"Persona Building",
			"Prototype Feedback and Testing",
			"User Stories",
			"Qualitative Usability Testing",
			"Feedback Review",
			"High Fidelity Prototypes",
			"Sketch",
			"Adobe CS",
			"Origami"
		]
	},
	{
		title: "Technology",
		description:
			"I have over 8 years of experience building accessible and ADA-compliant websites and applications and services for a wide range of clients – including B2B, B2C, financial, mar-tech, and e-commerce – using platforms and technologies including Shopify, Node, React, GraphQL, and more.",
		tags: [
			"SOLID Code",
			"Domain-Driven Design",
			"TDD",
			"Agile",
			"Scalable Microservices",
			"Event-driven Architectures",
			"Databases",
			"Identity Management",
			"Cloud Native",
			"Devops",
			"QA",
			"CMS",
			"CRM",
			"E-commerce",
			"Marketing Technology",
			"Server-Side Rendering",
			"Mobile and Web",
			"Search"
		]
	},
	{
		title: "Analytics",
		description:
			"Great design is driven by great data. I make sure I understand business goals and that your digital strategy is aligned with business goals. Whenever changes are required, I strive to measure all changes and I'm ready to revert to previous changes to optimize for any required metrics. Insight driven updates that focus on highest value returns",
		tags: [
			"Measurement Strategy",
			"Tagging Plans",
			"Platform Integrations",
			"Report Development and Execution",
			"Attribution Modeling",
			"Customer Segmentation",
			"A/B Test Design",
			"Mutivariate Test Design",
			"Data Visualization"
		]
	},
	{
		title: "Accessibility",
		description:
			"I've been building accessible, high-performing websites for over 9 years. Accessibility is incredibly important for me in everything I do. The purpose of the digital platforms I build for is to break barriers and help more people communicate effectively. It is unacceptable that millions of people around the world have to go through a web that makes them feel invisible. Accessible websites improve user experience, protect you from lawsuits, open new markets.",
		tags: ["A11y", "Automatic ADA-Tests"]
	}
];

const Services = () => (
	<section>
		<h3>Services</h3>
		{SERVICES.map((props) => (
			<article key={props.title}>
				<h1>{props.title}</h1>
				<p>{props.description}</p>
				<aside>
					{props.tags.map((tag) => (
						<span key={tag}>{tag}</span>
					))}
				</aside>
			</article>
		))}
	</section>
);

export default Services;
