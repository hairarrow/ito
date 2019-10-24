import { useEffect, MutableRefObject } from "react";
import anime from "animejs";

export default function useAnimation(
	ref: MutableRefObject<HTMLElement>,
	enabled = false
) {
	useEffect(() => {
		if (enabled)
			anime.timeline().add({
				targets: [".cm-1", ".cm-2"],
				opacity: 1,
				scale: [0.2, 1],
				translateY: [200, 0],
				easing: "spring(1, 80, 30, 0)",
				delay: anime.stagger(1000)
			});
	}, [ref, enabled]);
}
