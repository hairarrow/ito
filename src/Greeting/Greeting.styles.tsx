import styled from "styled-components";

const StyledGreeting = styled.article`
	.greeting-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 24px;
	}

	.greeting {
		margin-bottom: 0;
		position: relative;
		display: inline-block;
		padding-left: 16px;
		padding-right: 16px;
		font-size: 24px;
		line-height: 48px;
		border-radius: 24px;
		white-space: nowrap;
		overflow: hidden;
		background: var(--accent);
		opacity: 0;
		transform-origin: bottom left;

		& + .greeting {
			margin-top: 8px;
		}

		&--hello {
			border-bottom-left-radius: 8px;
		}

		&--name {
			border-top-left-radius: 8px;
		}

		&-text {
			font-weight: 300;
			color: #fff;

			.letter {
				display: inline-block;
				line-height: 1;
				opacity: 0;
			}
		}

		&-wave {
			display: inline-block;
			padding-left: 8px;
			opacity: 0;
		}
	}
`;

export default StyledGreeting;
