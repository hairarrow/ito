import React, { useRef, useEffect, useState, useContext } from "react";
import Message from "../Conversation/Message";
import FooterStyles from "./Footer.styles";
import anime from "animejs";
import useScrollPosition from "../../hooks/useScrollPosition";
import Button from "../Button";
import { ContactContext } from "../Contact/Contact.context";

const Footer = () => {
	const { dispatch } = useContext(ContactContext);
	const containerRef = useRef(null);
	const [shouldPlay, setShouldPlay] = useState(false);
	const [hasPlayed, setHasPlayed] = useState(false);
	const [scrollPosition, cleanupScroll] = useScrollPosition(containerRef);

	const toggleMsg = () =>
		dispatch({ type: "UpdateShowMessage", value: true });

	useEffect(() => {
		if (scrollPosition)
			setShouldPlay(window.innerHeight - scrollPosition >= 100);
	}, [scrollPosition]);

	useEffect(() => {
		if (containerRef && shouldPlay && !hasPlayed) {
			anime
				.timeline()
				.add({
					targets: [".ms-1", ".ms-2"],
					opacity: 1,
					scale: [0.2, 1],
					translateY: [200, 0],
					easing: "spring(1, 80, 30, 8)",
					delay: anime.stagger(1000)
				})
				.add(
					{
						targets: ".bt-2",
						opacity: 1,
						translateY: ["100%", 0],
						easing: "easeOutQuint"
					},
					"-=400"
				);
			setHasPlayed(true);
			cleanupScroll();
		}
	}, [containerRef, shouldPlay, hasPlayed]);

	return (
		<FooterStyles ref={containerRef}>
			<Message className="ms-1">
				Do you have an idea for a project, website, or something else
				exciting?
			</Message>
			<Message className="ms-2">Lets talk.</Message>
			<Button className="bt-2" onClick={toggleMsg}>
				Say Hello
			</Button>
		</FooterStyles>
	);
};

export default Footer;
