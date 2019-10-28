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
					easing: "easeOutQuint",
					opacity: 1
				},
				"-=2000"
			);
	}, [ref]);
}
