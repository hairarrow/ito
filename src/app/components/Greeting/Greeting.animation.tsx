import { useEffect } from "react";
import anime from "animejs";
import document from "next/document";

const greetingIn = () => ({
  opacity: 1,
  scale: [0.2, 1],
  translateY: [200, 0]
});

const greetingLetterIn = () => ({
  opacity: 1,
  translateY: [300, 0],
  duration: 600,
  delay: anime.stagger(20)
});

const dotsScale = () => ({
  targets: ".dot",
  keyframes: [
    { scale: 0.8, backgroundColor: "rgba(0,0,0,0.1)" },
    { scale: 1.2, backgroundColor: "rgba(0,0,0,0.4)" },
    { scale: 0.8, backgroundColor: "rgba(0,0,0,0.1)" }
  ],
  duration: 800,
  delay: anime.stagger(80),
  easing: "easeInOutCubic"
});

export function useAnimation(ref: any) {
  useEffect(() => {
    if (!ref) return;
    anime
      .timeline({
        easing: "easeOutExpo",
        duration: 420
      })
      .add({
        targets: ".greeting--hello",
        ...greetingIn()
      })
      .add({
        ...dotsScale()
      })
      .add({
        ...dotsScale(),
        complete() {
          document.
        }
      });
    // .add(
    //   {
    //     targets: ".greeting--hello .greeting-text .letter",
    //     ...greetingLetterIn()
    //   },
    //   "-=360"
    // )
    // .add({
    //   targets: ".greeting-wave",
    //   opacity: 1,
    //   rotateZ: [40, 0],
    //   duration: 500
    // });
    return;
    anime
      // .timeline({ easing: "spring(1, 100, 10, 0)" })
      .timeline({ easing: "easeOutElastic(10, 2)" })
      .add({
        targets: ".greeting--hello",
        ...greetingIn()
      })
      .add(
        {
          targets: ".greeting--hello .greeting-text .letter",
          ...greetingLetterIn()
        },
        "-=200"
      )
      .add(
        {
          targets: ".greeting-wave",
          translateY: [100, 0],
          rotateZ: [80, 0],
          opacity: 1
          // easing: "spring(2, 80, 12, 0)"
        },
        "-=200"
      )
      .add(
        {
          targets: ".greeting--name",
          ...greetingIn()
        }
        // "-=1800"
      )
      .add(
        {
          targets: ".greeting--name .greeting-text .letter",
          ...greetingLetterIn()
        }
        // "-=1800"
      )
      .add(
        {
          targets: [".lead", ".bt-1"],
          opacity: 1,
          translateY: ["100%", "0%"],
          delay: anime.stagger(20)
        }
        // "-=200"
      )
      .add(
        {
          targets: [".featured", ".featured-item"],
          opacity: 1
        }
        // "-=400"
      );
  }, [ref]);
}
