import styled from "styled-components";

const AboutStyles = styled.section`
	position: relative;
	width: 100%;
	min-height: 50vh;
	margin-top: 64px;
	padding: 100px 40px;
	overflow: hidden;

	.fake-container {
		position: absolute;
		top: 80px;
		left: -100px;
		right: -100px;
		bottom: 80px;
		background: rgba(244, 244, 244, 05);
		transform-origin: top center;
		transform: skewY(2deg);

		@media (prefers-color-scheme: dark) {
			background: rgba(255, 255, 255, 0.05);
		}
	}

	.ball {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;

		&:after {
			content: "";
			width: 40px;
			height: 40px;
			position: absolute;
			top: 0;
			right: calc(100px + 10px);
			transform: translateY(-40px);
			border-radius: 40px;
			background: var(--accent);
			z-index: 10;
		}
	}

	.content-title {
		display: inline-block;
		font-weight: 800;
		font-size: 32px;
		line-height: 64px;
		margin-bottom: 16px;
		margin: 0;
		background: linear-gradient(
			to bottom right,
			var(--accent),
			rgba(255, 12, 253, 1)
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.content-container {
		margin: 80px auto;
		position: relative;
		max-width: 600px;
		width: 100%;
		padding: 24px;
		background: var(--bg-color);
		border-radius: 40px;
		box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.08),
			0 0 0 1px rgba(0, 0, 0, 0.04);
		opacity: 0;

		@media (${(props) => props.theme.breakpoints.sm.up}) {
			padding: 64px;
		}
	}

	.content {
		font-weight: 500;
		font-size: 16px;
		line-height: 1.6;
		margin: 0;

		& + .content {
			margin-top: 24px;
		}
	}
`;

export default AboutStyles;
