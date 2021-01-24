import { useRef, useEffect, useState, useContext } from "react";
import Message from "../Conversation/Message";
import FooterStyles from "./Footer.styles";
import anime from "animejs";
import useScrollPosition from "../../hooks/useScrollPosition";
import Button from "../Button";
import { ContactContext } from "../Contact/Contact.context";
import useAnalytics from "../../hooks/useAnalytics";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const { dispatch } = useContext(ContactContext);
  const containerRef = useRef(null);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [scrollPosition, cleanupScroll] = useScrollPosition(containerRef);
  const analytics = useAnalytics();

  const toggleMsg = () => dispatch({ type: "UpdateShowMessage", value: true });

  useEffect(() => {
    if (scrollPosition)
      setShouldPlay(window.innerHeight - scrollPosition >= 100);
  }, [scrollPosition]);

  useEffect(() => {
    if (containerRef && shouldPlay && !hasPlayed) {
      anime
        .timeline({ easing: "easeOutExpo", duration: 420 })
        .add({
          targets: ".ms-1",
          opacity: 1,
          scale: [0.2, 1],
          translateY: [200, 0],
          complete() {
            setTimeout(() => {
              document
                .querySelector(".message--question")
                .classList.add("message--no-tail");
            }, 200);
          }
        })
        .add(
          { targets: ".ms-2", opacity: 1, translateY: ["-100%", "0%"] },
          "+=200"
        )
        .add(
          {
            targets: [".bt-2", ".sm-link-img"],
            opacity: 1,
            translateY: ["100%", "0%"],
            delay: anime.stagger(80),
            easing: "easeOutQuint"
          },
          "+=200"
        );
      setHasPlayed(true);
      cleanupScroll();
    }
  }, [containerRef, shouldPlay, hasPlayed]);

  useEffect(() => {
    if (hasPlayed) analytics.logEvent<string>("reached_bottom");
  }, [hasPlayed]);

  return (
    <FooterStyles ref={containerRef}>
      <Message className="ms-1 message--question">
        Do you have an idea for a project, website, or something else exciting?
      </Message>
      <Message className="ms-2">Lets talk.</Message>
      <Button className="bt-2" onClick={toggleMsg}>
        Say Hello
      </Button>
      <SocialMedia />
    </FooterStyles>
  );
};

export default Footer;
