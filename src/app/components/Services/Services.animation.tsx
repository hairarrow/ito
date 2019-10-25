import { useEffect } from "react";
import anime from "animejs";

export function useAnimation(ref: any) {
	useEffect(() => {
		if (!ref) return;
		anime.timeline({ easing: "easeOutQuint" }).add({
			targets: ".service-tags",
			translateY: ["100%", "0%"],
			opacity: [0, 0.8],
			delay: anime.stagger(100)
		});
	}, [ref]);
}
