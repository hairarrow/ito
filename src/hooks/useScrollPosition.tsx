import { useEffect, MutableRefObject, useState } from "react";
import throttle from "lodash/throttle";

const useScrollPosition = (el: MutableRefObject<HTMLElement>) => {
	const [distanceFromTop, setDistanceFromTop] = useState<number>(undefined);

	const handleScroll = () => {
		if (el.current)
			setDistanceFromTop(el.current.getBoundingClientRect().top);
	};

	useEffect(() => {
		window.addEventListener("scroll", throttle(handleScroll, 200));

		return () =>
			window.removeEventListener("scroll", throttle(handleScroll, 200));
	});

	if (typeof window === "undefined" || !el.current) return undefined;

	return distanceFromTop;
};

export default useScrollPosition;
