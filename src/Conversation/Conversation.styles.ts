import styled from "styled-components";

const StyledConversation = styled.section`
	max-width: 800px;
	padding: 8px;
	padding-top: 40px;
	margin: auto;
	display: grid;

	.message--recep {
		justify-self: end;
	}

	.cm-1,
	.cm-2 {
		opacity: 0;
		will-change: transform, opacity;
	}

	.cm-2 {
		margin-top: 8px;
	}
`;

export default StyledConversation;
