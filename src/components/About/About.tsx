import { useRef, useState, useEffect } from "react";
import { useAnimation } from "./About.animation";
import AboutStyles from "./About.styles";
import useScrollPosition from "../../hooks/useScrollPosition";
import { useTranslation } from "react-i18next";

const About = () => {
  const containerRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollPosition, cleanupScroll] = useScrollPosition(containerRef);
  const { t } = useTranslation();
  useAnimation(hasPlayed && containerRef);

  useEffect(() => {
    if (scrollPosition)
      setIsPlaying(scrollPosition <= window.innerHeight - 100);
  }, [scrollPosition]);

  useEffect(() => {
    if (isPlaying && !hasPlayed) {
      setHasPlayed(true);
      cleanupScroll();
    }
  }, [isPlaying]);

  console.log(t("about.content", { returnObjects: true }));

  return (
    <AboutStyles ref={containerRef}>
      <span className="fake-container">
        <span className="ball" />
      </span>
      <article className="content-container">
        <h2 className="content-title">{t("about.title")}</h2>
        {(Array.isArray(t("about.content", { returnObjects: true }))
          ? (t("about.content", { returnObjects: true }) as string[])
          : []
        ).map((content, index) => (
          <p className="content" key={index}>
            {content}
          </p>
        ))}
      </article>
    </AboutStyles>
  );
};

export default About;
