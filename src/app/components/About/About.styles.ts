import styled from "styled-components";

const AboutStyles = styled.section`
	position: relative;
	width: 100%;
	min-height: 50vh;
	margin-top: 64px;
	padding: 100px 8px;
	overflow: hidden;

	.fake-container {
		position: absolute;
		top: 80px;
		left: -100px;
		right: -100px;
		bottom: 80px;
		background: var(--gradient);
		transform-origin: top center;
		transform: skewY(2deg);

		@media (prefers-color-scheme: dark) {
			background: rgba(255, 255, 255, 0.05);
			background: var(--gradient);
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

	--gradient: linear-gradient(to bottom right, var(--accent), var(--pink));

	.content-title {
		display: inline-block;
		font-weight: 800;
		font-size: 32px;
		line-height: 64px;
		margin-bottom: 16px;
		margin: 0;
		background: var(--gradient);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.content-container {
		margin: 80px auto;
		position: relative;
		max-width: 600px;
		width: 100%;
		padding: 24px;
		padding-bottom: 48px;
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(20px) brightness(220%);
		border-radius: 40px;
		box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.08),
			0 0 0 1px rgba(0, 0, 0, 0.04);
		opacity: 0;
		will-change: transform, opacity;

		@media (${(props) => props.theme.breakpoints.sm.up}) {
			padding: 64px;
		}

		@media (prefers-color-scheme: dark) {
			background: rgba(0, 0, 0, 0.9);
		}
	}

	.content {
		font-weight: 500;
		font-size: 16px;
		line-height: 1.6;
		margin: 0;

		& + .content {
			margin-top: 24px;
			position: relative;
			padding-bottom: 34px;

			&:after {
				content: "";
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100px;
				height: 10px;
				background: var(--gradient);
			}
		}
	}
`;

export default AboutStyles;