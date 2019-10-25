import baseStyled, { ThemedStyledInterface } from "styled-components";

const theme = {
	colors: {
		bg: "#fff",
		fg: "rgba(0, 0, 0, 0.8)",
		accent: `rgba(0, 98, 255, 1)`,
		alt: `rgba(255, 12, 253, 1)`
	},
	breakpoints: {
		sm: {
			up: "min-width: 500px",
			down: "max-width: 500px"
		}
	}
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

export default theme;
