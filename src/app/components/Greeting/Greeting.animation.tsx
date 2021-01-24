import { useEffect } from "react";
import anime from "animejs";

const greetingIn = () => ({
  opacity: 1,
  scale: [0.2, 1],
  translateY: [200, 0]
});

const greetingLetterIn = () => ({
  opacity: 1,
  translateY: [-16, 0],
  duration: 800,
  delay: anime.stagger(20)
});

const dotsScale = (parent: string) => ({
  targets: `${parent} .dot`,
  keyframes: [
    { scale: 1, backgroundColor: "rgba(0,0,0,0.1)" },
    { scale: 1.2, backgroundColor: "rgba(0,0,0,0.4)" },
    { scale: 1, backgroundColor: "rgba(0,0,0,0.1)" }
  ],
  duration: 800,
  delay: anime.stagger(160),
  easing: "easeInOutCubic"
});

function toggleTypingStatus(className: string) {
  const { classList } = document.querySelector(className);
  const typingClass = "greeting--typing";

  if (classList.contains(typingClass)) {
    classList.remove(typingClass);
  } else {
    classList.add(typingClass);
  }
}

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
        ...dotsScale(".greeting--hello"),
        complete() {
          toggleTypingStatus(".greeting--hello");
        }
      })
      .add({
        targets: ".greeting--hello .greeting-text .letter",
        ...greetingLetterIn()
      })
      .add(
        {
          targets: ".greeting-wave",
          opacity: 1,
          rotateZ: [40, 0],
          duration: 500,
          complete() {
            toggleTypingStatus(".greeting--name");
          }
        },
        "-=800"
      )
      .add(
        {
          targets: ".greeting--name",
          translateY: ["-100%", "0%"],
          opacity: 1
        },
        "-=200"
      )
      .add(
        {
          ...dotsScale(".greeting--name"),
          complete() {
            toggleTypingStatus(".greeting--name");
            document
              .querySelector(".greeting--hello")
              .classList.add("greeting--no-tail");
          }
        },
        "-=400"
      )
      .add({
        targets: ".greeting--name .greeting-text .letter",
        ...greetingLetterIn()
      })
      .add({
        targets: [".lead", ".bt-1", ".featured", ".featured-item"],
        opacity: 1,
        translateY: ["100%", "0%"],
        delay: anime.stagger(40),
        duration: 800
      });

    return;
  }, [ref]);
}
