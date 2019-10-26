import React, { useRef, useState, useEffect } from "react";
import ServicesStyles from "./Services.styles";
import useScrollPosition from "../../hooks/useScrollPosition";
import { useAnimation } from "./Services.animation";

const Services = () => {
	const containerRef = useRef<HTMLElement>(null);
	const [hasPlayed, setHasPlayed] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [scrollPosition, cleanupScroll] = useScrollPosition(containerRef);
	useAnimation(hasPlayed && containerRef);

	useEffect(() => {
		if (scrollPosition)
			setIsPlaying(
				window.innerHeight - scrollPosition >= window.innerHeight / 4
			);
	}, [scrollPosition]);

	useEffect(() => {
		if (isPlaying && !hasPlayed) {
			setHasPlayed(true);
			cleanupScroll();
		}
	}, [isPlaying]);

	return (
		<ServicesStyles ref={containerRef}>
			<span className="services-container">
				{SERVICES.map(({ title, description, tags }) => (
					<article key={title} className="service">
						<h1 className="service-title">{title}</h1>
						<p className="service-description">{description}</p>
						<ul className="service-tags">
							{tags.map((tag) => (
								<li key={tag} className="service-tag">
									{tag}
								</li>
							))}
						</ul>
					</article>
				))}
			</span>
		</ServicesStyles>
	);
};

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
		tags: [
			"A11Y",
			"AATT (Automated Accessibility Testing Tool",
			"Storybook Accessibility Report",
			"Checklist",
			"Code Linting for Accessibility Problems",
			"Aria-*",
			"HTML 5"
		]
	}
];

export default Services;
