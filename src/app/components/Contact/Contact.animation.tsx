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
				direction,
				easing: "easeOutCirc"
			})
			.add({
				targets: ".msg",
				duration: 200,
				opacity
			})
			.add({
				targets: [".title", ".form"],
				translateY: [100, 0],
				duration: 180,
				delay: anime.stagger(100),
				opacity
			})
			.add(
				{
					targets: ".cancel",
					duration: open ? 500 : 100,
					opacity,
					translateY: [-100, 0]
				},
				"-=180"
			);
	}, [ref, open]);
}
