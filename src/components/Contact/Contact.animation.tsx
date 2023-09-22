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
        easing: "easeOutCirc",
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
        duration: open ? 140 : 100,
        delay: anime.stagger(120),
        opacity,
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
          duration: 100,
          opacity,
          translateY: [-10, 0],
        },
        "-=180"
      );
  }, [ref, open]);
}
