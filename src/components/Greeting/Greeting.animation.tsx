import { useEffect } from "react";
import anime from "animejs";

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
      })
      .add({
        targets: ".greeting--name",
        translateY: ["-100%", "0%"],
        opacity: 1,
        duration: 200,
        delay: 200,
        complete() {
          anime({
            targets: ".greeting--name .dot",
            keyframes: [{ scale: 1 }, { scale: 1.4 }, { scale: 1 }],
            duration: 600,
            delay: anime.stagger(80),
            easing: "easeInOutCubic",
            loop: 2,
          });
        },
      })
      .add({
        targets: ".greeting--name",
        opacity: 0,
        complete() {
          toggleTypingStatus(".greeting--name");
          document
            .querySelector(".greeting--hello")
            .classList.add("greeting--no-tail");
        },
      })
      .add({
        targets: ".greeting--name",
        translateY: ["100%", "0%"],
        opacity: 1,
        duration: 280,
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
            });
          },
        },
        "-=1200"
      )
      .add(
        {
          targets: ".bt-1",
          rotateZ: [20, 0],
          translateY: ["200%", "0%"],
          opacity: 1,
          easing: "easeOutBack",
        },
        "+=100"
      );
  }, [ref]);
}
