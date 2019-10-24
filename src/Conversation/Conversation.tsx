import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import ConversationStyles from "./Conversation.styles";
import useScrollPosition from "../hooks/useScrollPosition";
import useAnimation from "./Conversation.animation";

const Conversation = () => {
	const [hasPlayed, setHasPlayed] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const containerRef = useRef<HTMLElement>(null);
	const scrollPosition = useScrollPosition(containerRef);
	useAnimation(containerRef, hasPlayed);

	useEffect(() => {
		setIsPlaying(scrollPosition <= 200);
	}, [scrollPosition]);

	useEffect(() => {
		if (isPlaying && !hasPlayed) setHasPlayed(true);
	}, [isPlaying]);

	return (
		<ConversationStyles ref={containerRef}>
			<Message variant="recep" className="cm-1">
				So, what do you actually do?
			</Message>
			<Message
				className="cm-2"
				title="I craft powerful digital experiences"
			>
				I have over 8 years of experience working across a variety of
				industries, small businesses, and fortune 500, but I generally
				focus on building accessible, high performing experiences that
				are simple and easy to use.
			</Message>
		</ConversationStyles>
	);
};

export default Conversation;
