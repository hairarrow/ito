import { useEffect } from "react";
import anime from "animejs";

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
        easing: "easeOutExpo"
      })
      .add({
        targets: ".greeting--name",
        translateY: ["-100%", "0%"],
        opacity: 1,
        duration: 200,
        complete() {
          anime({
            targets: ".greeting--name .dot",
            keyframes: [{ scale: 1 }, { scale: 1.4 }, { scale: 1 }],
            duration: 600,
            delay: anime.stagger(80),
            easing: "easeInOutCubic",
            loop: 2
          });
        }
      })
      .add(
        {
          targets: ".greeting--name",
          opacity: 0,
          complete() {
            toggleTypingStatus(".greeting--name");
            document
              .querySelector(".greeting--hello")
              .classList.add("greeting--no-tail");
          }
        },
        "+=600"
      )
      .add({
        targets: ".greeting--name",
        translateY: ["100%", "0%"],
        opacity: 1,
        duration: 280,
        complete() {}
      })
      .add(
        {
          targets: ".greeting--name .greeting-text",
          opacity: 1,
          complete() {
            anime({
              easing: "easeOutExpo",
              targets: [".lead", ".featured", ".featured-item"],
              translateY: ["100%", "0%"],
              opacity: 1,
              complete() {
                anime({
                  targets: ".bt-1",
                  rotateZ: [20, 0],
                  translateY: ["200%", "0%"],
                  opacity: 1
                });
              }
            });
          }
        },
        "-=500"
      )
      .add({});
  }, [ref]);
}
