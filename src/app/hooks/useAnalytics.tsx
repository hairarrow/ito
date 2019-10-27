import fb from "../fb";

export default function useAnalytics() {
	return typeof window !== "undefined" && fb.analytics();
}
