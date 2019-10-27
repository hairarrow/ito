import { useEffect, MutableRefObject } from "react";
import anime from "animejs";

export default function useAnimation(
	ref: MutableRefObject<HTMLElement>,
	enabled = false
) {
	useEffect(() => {
		if (enabled)
			anime
				.timeline({ easing: "easeOutQuint" })
				.add({
					targets: [".cm-1", ".cm-2"],
					opacity: 1,
					scale: [0.2, 1],
					translateY: [200, 0],
					easing: "spring(1, 80, 30, 8)",
					delay: anime.stagger(1000)
				})
				.add(
					{
						targets: ".service",
						opacity: 1,
						delay: anime.stagger(120),
						translateX: (_, i) =>
							i % 2 ? ["100%", "0%"] : ["-100%", "0%"]
					},
					"-=300"
				)
				.add({
					targets: ".service-tag",
					translateY: ["100%", "0%"],
					opacity: [0, 0.6],
					delay: anime.stagger(20)
				});
	}, [ref, enabled]);
}
