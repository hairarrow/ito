import { useEffect } from "react";
import anime from "animejs";

export default function useAnimation(ref: any, open = false) {
	useEffect(() => {
		const opacity = open ? [0, 1] : 0;

		if (!ref) return;
		if (!open)
			anime({
				targets: ".msg",
				easing: "easeOutCirc",
				duration: 240,
				opacity
			});
		else
			anime
				.timeline({
					easing: "easeOutCirc"
				})
				.add({
					targets: ".msg",
					duration: 300,
					opacity
				})
				.add({
					targets: [".title", ".form"],
					translateY: [100, 0],
					duration: 400,
					delay: anime.stagger(100),
					opacity
				})
				.add({
					targets: ".cancel",
					duration: 400,
					opacity
				});
	}, [ref, open]);
}
