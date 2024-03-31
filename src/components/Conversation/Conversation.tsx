import useIntersectionObserver from "@react-hook/intersection-observer";
import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import ConversationStyles from "./Conversation.styles";
import useAnimation from "./Conversation.animation";
import { useTranslation } from "react-i18next";

const Conversation = () => {
  const { t } = useTranslation();
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
        {t("conversation.question")}
      </Message>
      <Message className="cm-2" title={t("conversation.answer.title")}>
        {t("conversation.answer.details")}
      </Message>
    </ConversationStyles>
  );
};

export default Conversation;
