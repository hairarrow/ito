import { useEffect } from "react";
import anime from "animejs";

const greetingLetterIn = () => ({
  opacity: 1,
  translateY: [-16, 0],
  duration: 200,
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
        duration: 200
      })
      .add({
        ...dotsScale(".greeting--hello")
      })
      .add({
        targets: ".greeting--hello",
        opacity: 0,
        complete() {
          toggleTypingStatus(".greeting--hello");
          toggleTypingStatus(".greeting--name");
        }
      })
      .add({
        targets: ".greeting--hello",
        translateY: "0%",
        duration: 0
      })
      .add({
        targets: ".greeting--hello",
        opacity: 1,
        translateY: ["100%", "0%"],
        duration: 400
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
          opacity: 1,
          rotateZ: [40, 0],
          easing: "easeOutBack",
          duration: 400
        },
        "-=200"
      )
      .add(
        {
          targets: ".greeting--name",
          translateY: ["-100%", "0%"],
          opacity: 1
        },
        "-=200"
      )
      .add({
        ...dotsScale(".greeting--name")
      })
      .add(
        {
          targets: ".greeting--name",
          opacity: 0,
          complete() {
            toggleTypingStatus(".greeting--name");
            setTimeout(() => {
              document
                .querySelector(".greeting--hello")
                .classList.add("greeting--no-tail");
            }, 100);
          }
        },
        "-=500"
      )
      .add(
        {
          targets: ".greeting--name",
          keyframes: [
            { translateY: "100%", opacity: 0 },
            { translateY: "0%", opacity: 1 }
          ],
          duration: 400,
          complete() {}
        },
        "-=300"
      )
      .add(
        {
          targets: ".greeting--name .greeting-text .letter",
          opacity: 1,
          duration: 20
        },
        "-=80"
      )
      .add(
        {
          targets: [".lead", ".bt-1", ".featured", ".featured-item"],
          opacity: 1,
          translateY: ["100%", "0%"],
          delay: anime.stagger(54),
          duration: 800
        },
        "+=200"
      );

    return;
  }, [ref]);
}
