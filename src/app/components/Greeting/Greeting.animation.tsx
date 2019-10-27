import { useEffect } from "react";
import anime from "animejs";

const greetingIn = () => ({
	opacity: 1,
	scale: [0.2, 1],
	translateY: [200, 0],
	duration: 800
});

const greetingLetterIn = () => ({
	opacity: 1,
	translateY: [300, 0],
	duration: 600,
	delay: anime.stagger(20)
});

export function useAnimation(ref: any) {
	useEffect(() => {
		if (!ref) return;
		anime
			.timeline({ easing: "spring(1, 80, 30, 0)" })
			.add({
				targets: ".greeting--hello",
				...greetingIn()
			})
			.add(
				{
					targets: ".greeting--hello .greeting-text .letter",
					...greetingLetterIn()
				},
				"-=1000"
			)
			.add(
				{
					targets: ".greeting-wave",
					translateY: [100, 0],
					rotateZ: [80, 0],
					opacity: 1,
					easing: "spring(2, 80, 12, 0)"
				},
				"-=800"
			)
			.add(
				{
					targets: ".greeting--name",
					...greetingIn()
				},
				"-=1800"
			)
			.add(
				{
					targets: ".greeting--name .greeting-text .letter",
					...greetingLetterIn()
				},
				"-=1800"
			)
			.add(
				{
					targets: [".lead", ".featured", ".featured-item", ".bt-1"],
					opacity: 1,
					translateY: ["50%", "0%"],
					delay: anime.stagger(20)
				},
				"-=200"
			);
	}, [ref]);
}
