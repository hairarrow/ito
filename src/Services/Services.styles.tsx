import styled from "styled-components";

const ServicesStyles = styled.section`
	--pink: rgba(255, 12, 253, 1);
	--container-width: 1200px;
	max-width: var(--container-width);
	margin: 60px auto;
	padding: 8px;
	padding-bottom: 60px;

	.services-title {
		display: inline-block;
		margin: 24px 0;
		padding-left: 24px;
		font-size: 40px;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-weight: 900;
		background: radial-gradient(
			circle farthest-corner at 10% 20%,
			var(--pink) 0%,
			var(--accent) 90%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		opacity: 0;
		will-change: opacity, transform;

		@media (${(props) => props.theme.breakpoints.sm.up}) {
			font-size: 68px;
		}
	}

	.services-container {
		display: grid;
		grid-template-rows: auto;
		grid-gap: 16px;

		@media (${(props) => props.theme.breakpoints.sm.up}) {
			grid-template-columns: repeat(16, 1fr);
		}
	}

	.service {
		padding: 40px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
		border-radius: 20px;
		background: #fff;
		box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.08),
			0 0 0 1px rgba(0, 0, 0, 0.04);
		opacity: 0;
		will-change: opacity, transform;

		@media (prefers-color-scheme: dark) {
			background: rgba(255, 255, 255, 0.05);
			box-shadow: 0 8px 20px 0 rgba(255, 255, 255, 0.04);
		}

		&:first-child {
			grid-row: 1 / 2;
			grid-column: 1 / 9;
			--gradient: linear-gradient(
				to bottom right,
				var(--accent),
				var(--pink)
			);
		}

		&:nth-child(2) {
			grid-row: 1 / 2;
			grid-column: 9 / 17;
			--gradient: linear-gradient(
				to bottom left,
				var(--accent),
				var(--pink)
			);
		}

		&:nth-child(3) {
			grid-row: 2 / 2;
			grid-column: 1 / 8;
			--gradient: linear-gradient(
				to top right,
				var(--accent),
				var(--pink)
			);
		}

		&:nth-child(4) {
			grid-row: 2 / 2;
			grid-column: 8 / 17;
			--gradient: linear-gradient(
				to top left,
				var(--accent),
				var(--pink)
			);
		}

		@media (${(props) => props.theme.breakpoints.sm.down}) {
			grid-row: auto !important;
			grid-column: auto !important;
		}

		.service-title {
			letter-spacing: 0.8px;
			font-size: 32px;
			font-weight: 800;
			margin: 0;
			margin-bottom: 16px;
			background: var(--gradient);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		.service-description {
			position: relative;
			margin: 0;
			font-size: 16px;
			line-height: 1.8;
			font-weight: 600;
			padding-bottom: 24px;
			margin-bottom: 40px;

			&:after {
				content: "";
				position: absolute;
				bottom: 0;
				left: 0;
				height: 10px;
				width: 100px;
				background: var(--gradient);
			}
		}

		.service-tags {
			padding: 0;
			margin-top: auto;
			flex-wrap: wrap;
			background: var(--gradient);
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
			line-height: 24px;
		}

		.service-tag {
			display: inline;
			font-size: 12px;
			font-weight: 600;
			margin-right: 16px;
		}
	}
`;

export default ServicesStyles;
