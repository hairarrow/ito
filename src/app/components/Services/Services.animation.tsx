import useIntersectionObserver from "@react-hook/intersection-observer";
import { useEffect, useState, MutableRefObject } from "react";
import anime from "animejs";

export default function useAnimation(
  ref: MutableRefObject<HTMLElement>,
  key: string
) {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { isIntersecting } = useIntersectionObserver(ref);

  useEffect(() => {
    if (isIntersecting) {
      setIsPlaying(true);
    }
  }, [isIntersecting]);

  useEffect(() => {
    if (isPlaying && !hasPlayed) {
      anime
        .timeline({ easing: "easeOutExpo" })
        .add({
          targets: `.service--${key}`,
          translateY: [10, 0],
          opacity: 1,
          duration: 600,
          delay: 240
        })
        .add(
          {
            targets: `.service--${key} .service-tag`,
            translateY: ["50%", "0%"],
            opacity: [0, 0.8],
            delay: anime.stagger(60)
          },
          "+=300"
        );
    }
  }, [ref, isPlaying, hasPlayed]);

  useEffect(() => {
    if (isPlaying && !hasPlayed) {
      setHasPlayed(true);
    }
  }, [isPlaying, hasPlayed]);
}
