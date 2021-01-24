import { useEffect, MutableRefObject } from "react";
import anime from "animejs";

export default function useAnimation(
  ref: MutableRefObject<HTMLElement>,
  enabled = false
) {
  useEffect(() => {
    if (enabled)
      anime
        .timeline({ easing: "easeOutExpo" })
        .add({
          targets: [".cm-1", ".cm-2"],
          opacity: 1,
          scale: [0.2, 1],
          translateY: [200, 0],
          delay: anime.stagger(800)
        })
        .add(
          {
            targets: ".service",
            translateY: [10, 0],
            opacity: 1,
            duration: 400,
            delay: anime.stagger(80)
          },
          "-=800"
        )
        .add({
          targets: ".service-tag",
          translateY: ["50%", "0%"],
          opacity: [0, 0.8],
          delay: anime.stagger(20)
        });
  }, [ref, enabled]);
}
