import {
	useEffect,
	MutableRefObject,
	useState,
	useRef,
	useCallback
} from "react";
import throttle from "lodash/throttle";

const useScrollPosition = (
	el: MutableRefObject<HTMLElement>
): [number, () => void] | [] => {
	const [distanceFromTop, setDistanceFromTop] = useState<number>(undefined);
	const wdw = useRef(typeof window !== "undefined" ? window : null);
	const handleScroll = () => {
		if (el.current)
			setDistanceFromTop(el.current.getBoundingClientRect().top);
	};
	const onScroll = throttle(handleScroll, 200);
	const scroll = useCallback(onScroll, [el]);
	const onDestroy = () => {
		wdw.current.removeEventListener("scroll", scroll);
	};
	const destroy = useCallback(onDestroy, [el]);

	useEffect(() => {
		wdw.current.addEventListener("scroll", scroll);

		return destroy;
	}, [el]);

	if (typeof window === "undefined" || !el.current) return [];

	return [distanceFromTop, destroy];
};

export default useScrollPosition;
