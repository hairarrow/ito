import { useRef, useState, useEffect } from "react";
import { useAnimation } from "./About.animation";
import AboutStyles from "./About.styles";
import useScrollPosition from "../../hooks/useScrollPosition";

const About = () => {
  const containerRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollPosition, cleanupScroll] = useScrollPosition(containerRef);
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

  return (
    <AboutStyles ref={containerRef}>
      <span className="fake-container">
        <span className="ball" />
      </span>
      <article className="content-container">
        <h1 className="content-title">About Me</h1>
        <p className="content">
          I started my career as a graphic designer with a background in
          marketing, a few design classes and a copy of Photoshop. I was a
          generalist with many interests, brief obsessions, but no single
          passion. That changed after I committed to teaching myself to code.
          Programming was a hobby but as I learned, I realized I could channel a
          lot of what interested me in into this single skill. 8 years later,
          I’m still a generalist but now that’s my greatest asset. I’ve found my
          passion in synthesizing many disciplines to end up with a cohesive,
          detail-oriented project driven by objectives, data and results.
        </p>
        <p className="content">
          I build software and web experiences that are both functional and
          beautiful without sacrificing one for the other. I’ve built for
          enterprise across the spectrum and no matter the scale of the project,
          my values are the same. I design to meet KPIs but I plan for
          scalability, for the user and for future developers too. My interest
          in accessibility really began as a quest to avoid preventable
          mistakes. Myopia is human but in code that can result in fatal
          oversight and developers have a particular responsibility to work hard
          to counter that. Empathy, knowing your user’s needs, is as important
          to success as knowing their motivations.
        </p>
        <p className="content">
          Whether I’m working solo or building a team, I aim to deliver products
          that meet client objectives with SOLID code practices and measured
          analytical design. I have experience in ad-tech, mar tech, fin-tech
          and e-commerce and I’ve found that whatever the industry, the key to a
          good product is knowing the business intimately. I strongly believe in
          empowering teams to evolve through code ownership, open communication,
          modeling agile methodologies and stressing industry-standard best
          practices are the ingredients for a great product and key to building
          a culture that will sustain it.
        </p>
      </article>
    </AboutStyles>
  );
};

export default About;
