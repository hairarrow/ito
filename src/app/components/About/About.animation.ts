import { useEffect } from "react";
import anime from "animejs";

export function useAnimation(ref: any) {
	useEffect(() => {
		if (!ref) return;
		anime
			.timeline({
				easing: "spring(1, 80, 30, 0)"
			})
			.add({
				targets: ".fake-container",
				skewY: ["2deg", "-2deg"]
			})
			.add(
				{
					targets: ".ball",
					translateX: "-90%",
					easing: "easeInQuad",
					duration: 2000
				},
				0
			)
			.add(
				{
					targets: ".content-container",
					scale: [0.8, 1],
					translateY: [200, 0],
					opacity: 1
				},
				0
			);
	});
}
