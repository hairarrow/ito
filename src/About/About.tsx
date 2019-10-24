import styled from "styled-components";
import React, { useRef, useState, useEffect } from "react";
import { useAnimation } from "./About.animation";
import AboutStyles from "./About.styles";
import useScrollPosition from "../hooks/useScrollPosition";

const About = () => {
	const containerRef = useRef(null);
	const [hasPlayed, setHasPlayed] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [scrollPosition, cleanupScroll] = useScrollPosition(containerRef);
	useAnimation(hasPlayed && containerRef);

	useEffect(() => {
		if (scrollPosition)
			setIsPlaying(scrollPosition <= window.innerHeight / 2);
	}, [scrollPosition]);

	useEffect(() => {
		if (isPlaying && !hasPlayed) {
			setHasPlayed(true);
			cleanupScroll();
		}
	}, [isPlaying]);

	return (
		<AboutStyles ref={containerRef}>
			<span className="fake-container">
				<span className="ball" />
			</span>
			<article className="content-container">
				<h1 className="content-title">About Me</h1>
				<p className="content">
					I started my career as a graphic designer with a background
					in marketing and a copy of Photoshop. I taught myself how to
					code to keep things fresh and quickly realized I could put
					all of my interests to use in this single discipline. 8
					years later, interests morphed into passion and now I build
					software products and marketing websites that focus on
					business objectives and users' motivations. I've designed
					experiences for all levels of enterprise and I've found no
					matter the scale, my main values and methodology remain
					unchanged.
				</p>
				<p className="content">
					Whether I'm working solo or building a team, I aim to
					deliver products that meet client objectives with SOLID code
					practices and measured analytical design, emphasizing
					simplicity without sacrificing empathy focused on
					understanding the needs of the end user and future
					developers too. I have experience in ad-tech, mar-tech,
					fin-tech, and e-commerce and I've found that whatever the
					industry, the key to a good product is knowing the business
					intimately. Empowering teams to evolve through code
					ownership, open communication, modeling agile methodologies
					and stressing industry-standard best practices are the
					ingredients for a great product and key to building a
					culture that will sustain it.
				</p>
			</article>
		</AboutStyles>
	);
};

export default About;
