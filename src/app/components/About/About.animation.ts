import { useEffect } from "react";
import anime from "animejs";

export function useAnimation(ref: any) {
	useEffect(() => {
		if (!ref) return;
		anime
			.timeline({
				easing: "easeOutQuad"
			})
			.add({
				targets: ".fake-container",
				duration: 1000,
				skewY: ["3deg", "-3deg"]
			})
			.add(
				{
					targets: ".ball",
					translateX: "-100%",
					duration: 2000,
					easing: "easeInQuad"
				},
				"-=600"
			)
			.add(
				{
					targets: ".content-container",
					scale: [0.8, 1],
					translateY: ["100%", "0%"],
					opacity: 1
				},
				"-=1800"
			);
	}, [ref]);
}
