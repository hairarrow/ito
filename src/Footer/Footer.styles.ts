import styled from "styled-components";

const FooterStyles = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 80px 16px 120px;
	max-width: 600px;
	margin: auto;

	.message {
		padding: 8px 24px;
		line-height: 40px;
		opacity: 0;
		will-change: opacity, transform;

		& + .message {
			margin-top: 8px;
			margin-bottom: 40px;
			border-top-left-radius: 8px;
			border-bottom-left-radius: 20px;
		}
	}

	.bt-2 {
		opacity: 0;
		will-change: opacity, transform;
	}
`;

export default FooterStyles;
