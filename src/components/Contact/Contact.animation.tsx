import { useEffect, useState } from "react";
import anime from "animejs";

export default function useAnimation(
  ref: any,
  open = false,
  onBegin = () => null,
  onComplete = () => null
) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    let opacity: number | number[] = [0, 1];
    const direction = open ? "normal" : "reverse";

    if (!ref) return;
    else if (!open && !play) {
      opacity = 0;
      setPlay(true);
    }
    anime
      .timeline({
        direction,
        easing: "easeOutQuint",
        begin: onBegin,
        complete: onComplete,
      })
      .add({
        targets: ".msg",
        duration: 100,
        opacity,
        easing: "linear",
      })
      .add({
        targets: [".title", ".form"],
        translateY: [200, 0],
        duration: open ? 400 : 100,
        delay: anime.stagger(20),
        opacity,
        easing: "easeOutElastic(10, 1)",
      })
      .add({
        targets: ".form-fields",
        opacity: [0, 1],
        duration: open ? 200 : 100,
        easing: "easeOutCubic",
      })
      .add(
        {
          targets: ".cancel",
          duration: open ? 400 : 100,
          opacity,
          translateY: [-10, 0],
        },
        "-=300"
      );
  }, [ref, open]);
}
