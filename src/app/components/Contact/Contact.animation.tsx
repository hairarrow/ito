import { useEffect, useState } from "react";
import anime from "animejs";

export default function useAnimation(ref: any, open = false) {
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
				easing: "easeOutCirc",
				direction
			})
			.add({
				targets: ".msg",
				duration: 200,
				opacity
			})
			.add({
				targets: [".title", ".form"],
				translateY: [100, 0],
				duration: 200,
				delay: anime.stagger(100),
				opacity
			})
			.add(
				{
					targets: ".cancel",
					duration: 140,
					opacity,
					translateY: [-100, 0]
				},
				"-=160"
			);
	}, [ref, open]);
}
