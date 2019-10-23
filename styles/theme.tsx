import baseStyled, { ThemedStyledInterface } from "styled-components";

const theme = {
	colors: {
		bg: "#fff",
		fg: "rgba(0, 0, 0, 0.8)",
		accent: "rgba(0, 98, 255, 1)"
	}
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

export default theme;
