import useIntersectionObserver from "@react-hook/intersection-observer";
import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import ConversationStyles from "./Conversation.styles";
import useAnimation from "./Conversation.animation";

const Conversation = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  useAnimation(containerRef, hasPlayed);

  useEffect(() => {
    setIsPlaying(isIntersecting);
  }, [isIntersecting]);

  useEffect(() => {
    if (isPlaying && !hasPlayed) {
      setHasPlayed(true);
    }
  }, [isPlaying]);

  return (
    <ConversationStyles ref={containerRef}>
      <Message variant="recep" className="cm-1">
        So, what do you actually do?
      </Message>
      <Message className="cm-2" title="I craft powerful digital experiences">
        I have over 8 years of experience working across a variety of
        industries. Whether I'm building for small business or a Fortune 500, I
        craft high performing experiences that value simplicity and prioritize
        accessibility beyond the bare minimum that is unfortunately common
        around the web.
      </Message>
    </ConversationStyles>
  );
};

export default Conversation;
