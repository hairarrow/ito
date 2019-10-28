import styled from "styled-components";

const AboutStyles = styled.section`
	position: relative;
	width: 100%;
	min-height: 50vh;
	margin-top: 64px;
	padding: 100px 8px;

	@media (${(props) => props.theme.breakpoints.xl.up}) {
		padding: 160px 0;
		min-height: 60vh;
	}

	--gradient: radial-gradient(
		circle at 100% 0,
		var(--accent),
		var(--pink),
		var(--orange)
	);

	.fake-container {
		position: absolute;
		top: 80px;
		left: 0;
		right: 0;
		bottom: 80px;
		background: var(--gradient);
		transform-origin: top center;
		transform: skewY(3deg);

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
			right: 0;
			transform: translateY(-40px);
			border-radius: 40px;
			background: var(--accent);
			z-index: 10;
		}
	}

	.content-container {
		margin: 80px auto;
		position: relative;
		max-width: 600px;
		width: 100%;
		padding: 24px;
		padding-bottom: 64px;
		background: rgba(255, 255, 255, 1);
		border-radius: 20px;
		box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2),
			0 0 0 1px rgba(0, 0, 0, 0.04);
		opacity: 0;

		@media (prefers-color-scheme: dark) {
			background: rgba(0, 0, 0, 0.6);
		}

		@media (${(props) => props.theme.breakpoints.sm.up}) {
			padding: 64px;
		}

		@media (${(props) => props.theme.breakpoints.xl.up}) {
			max-width: 900px;
			padding-bottom: 104px;
		}
	}

	.content-title {
		display: inline-block;
		font-weight: 800;
		font-size: 32px;
		line-height: 64px;
		margin-bottom: 16px;
		margin: 0;
		background: var(--gradient);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		@media (${(props) => props.theme.breakpoints.xl.up}) {
			font-size: 42px;
			line-height: 1.6;
			margin-bottom: 0.2vw;
			padding-left: 64px;
			padding-top: 36px;
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

		@media (${(props) => props.theme.breakpoints.xl.up}) {
			font-size: 24px;
			padding-left: 64px;
			padding-right: 64px;
			padding-right: 64px;

			& + .content:after {
				left: 64px;
				width: 8vw;
			}
		}
	}
`;

export default AboutStyles;
