import styled from "styled-components";

const StyledConversation = styled.section`
	max-width: 800px;
	margin: auto;
	display: grid;

	.message--recep {
		justify-self: end;
	}

	.cm-1,
	.cm-2 {
		opacity: 0;
	}
`;

export default StyledConversation;
