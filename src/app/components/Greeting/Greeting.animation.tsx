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
        easing: "easeOutExpo",
        begin() {
          console.time("anim");
        },
        complete() {
          console.timeEnd("anim");
        }
      })
      .add({
        targets: ".greeting--name",
        translateY: ["-100%", "0%"],
        opacity: 1,
        complete() {
          anime({
            targets: ".greeting--name .dot",
            keyframes: [{ scale: 1 }, { scale: 1.4 }, { scale: 1 }],
            duration: 800,
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
        "+=1400"
      )
      .add({
        targets: ".greeting--name",
        translateY: ["100%", "0%"],
        opacity: 1,
        duration: 420,
        complete() {}
      })
      .add(
        {
          targets: ".greeting--name .greeting-text",
          opacity: 1,
          complete() {
            anime({
              easing: "easeOutExpo",
              targets: ".lead",
              opacity: 1
            });
            anime({
              easing: "easeOutExpo",
              targets: [".featured", ".featured-item"],
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

    return;
    anime
      .timeline({
        easing: "easeOutExpo",
        duration: 200
      })
      .add({
        targets: ".greeting--name",
        translateY: ["-100%", "0%"],
        opacity: 1
      })
      .add(
        {
          ...dotsScale(".greeting--name")
        },
        "-=400"
      )
      .add({
        targets: ".greeting--name",
        opacity: 0,
        duration: 80,
        complete() {
          toggleTypingStatus(".greeting--name");
        }
      })
      .add({
        targets: ".greeting--name",
        keyframes: [
          { translateY: "100%", opacity: 0 },
          { translateY: "0%", opacity: 1 }
        ]
      })
      .add(
        {
          targets: ".greeting--name .greeting-text",
          opacity: 1,
          duration: 20
        },
        "-=80"
      )
      .add({
        targets: [".lead", ".bt-1"],
        opacity: 1,
        duration: 400
      })
      .add(
        {
          targets: [".featured", ".featured-item"],
          opacity: 1,
          translateY: ["100%", "0%"],
          duration: 400
        },
        "-=400"
      );

    return;
  }, [ref]);
}
