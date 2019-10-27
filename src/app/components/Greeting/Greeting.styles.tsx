import styled from "styled-components";

const StyledGreeting = styled.article`
	padding: 8px;

	.container {
		display: block;
		max-width: 680px;
		padding: 8px;
		margin: auto auto;

		@media (${(props) => props.theme.breakpoints.sm.up}) {
			padding: 1rem;
		}

		@media (${(props) => props.theme.breakpoints.lg.up}) {
			max-width: 800px;
		}
	}

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
		will-change: opacity, transform;
		transform-origin: bottom left;

		& + .greeting {
			margin-top: 8px;
		}

		&--hello {
			margin-top: 5vh;
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
				will-change: opacity, transform;
			}
		}

		&-wave {
			display: inline-block;
			padding-left: 8px;
			opacity: 0;
			will-change: opacity, transform;
		}
	}

	.lead {
		margin-bottom: 16px;
		position: relative;
		padding-left: 16px;
		padding-right: 16px;
		font-size: 21px;
		line-height: 48px;
		font-weight: 500;
		opacity: 0;
		will-change: opacity, transform;
		transform-origin: bottom left;

		&--sub {
			font-weight: 500;
			font-size: 14px;
			line-height: 28px;
			max-width: 90%;
		}

		@media (${(props) => props.theme.breakpoints.sm.up}) {
			font-size: 28px;

			&--sub {
				font-size: 16px;
				line-height: 36px;
			}
		}

		@media (${(props) => props.theme.breakpoints.md.up}) {
			font-size: 32px;

			&--sub {
				font-size: 18px;
			}
		}

		@media (${(props) => props.theme.breakpoints.lg.up}) {
			font-size: 42px;
			line-height: 68px;

			&--sub {
				font-size: 18px;
				line-height: 36px;
			}
		}
	}

	.featured {
		margin: 10vh auto;
		max-width: 1000px;
		padding: 32px 24px 60px;
		border-radius: 40px;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0.02)
		);
		opacity: 0;
		box-shadow: 0 8px 40px 4px rgba(0, 0, 0, 0.08);
		will-change: opacity, transform;

		@media (${(props) => props.theme.breakpoints.sm.up}) {
			padding: 40px 40px 56px;
		}

		@media (prefers-color-scheme: dark) {
			background: linear-gradient(
				to bottom,
				rgba(255, 255, 255, 0.05),
				rgba(255, 255, 255, 0.02)
			);
		}

		&-container {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
			grid-gap: 24px;
			grid-auto-rows: auto;
			align-items: start;
		}

		&-title {
			margin: 0;
			margin-bottom: 16px;
			font-size: 18px;
			display: inline-block;
			font-weight: 800;
			font-size: 32px;
			line-height: 64px;
			background: linear-gradient(
				to top left,
				var(--accent),
				var(--pink)
			);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		&-item {
			position: relative;
			display: flex;
			flex-direction: column;
			padding: 24px 16px;
			background: rgba(255, 255, 255, 1);
			border-radius: 20px;
			opacity: 0;
			will-change: opacity, transform;
			box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.08),
				0 0 0 1px rgba(0, 0, 0, 0.04);

			transition: transform 240ms cubic-bezier(0.22, 0.61, 0.36, 1);

			@media (prefers-color-scheme: dark) {
				background: rgba(255, 255, 255, 0.05);
			}

			&-logo {
				height: 16px;
				filter: grayscale(100%) contrast(1000%);
				transition: all 240ms cubic-bezier(0.22, 0.61, 0.36, 1);

				@media (prefers-color-scheme: dark) {
					filter: grayscale(100%) invert(100%) contrast(1000%);
				}

				& + .featured-item-cname {
					font-size: 0;
				}
			}

			&:after {
				content: "";
				position: absolute;
				z-index: -1;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				border-radius: 20px;
				box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
				opacity: 0;
				transition: opacity 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
			}

			&:hover:after {
				opacity: 1;
			}

			&:hover {
				.featured-item-logo {
					filter: none;
				}

				.featured-item-header-top-row {
					opacity: 1;
					border-bottom: 4px solid rgba(0, 0, 0, 0.1);

					@media (prefers-color-scheme: dark) {
						border-bottom: 4px solid rgba(255, 255, 255, 0.3);
					}
				}

				.featured-item-link {
					color: var(--accent);
				}

				.featured-item-in-publication {
					filter: none;
				}
			}

			&-link {
				text-decoration: none;
				color: inherit;
				font-weight: 600;
				transition: color 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
			}

			&-header {
				&-top-row {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding-bottom: 8px;
					margin-bottom: 16px;
					border: 0;
					border-bottom: 4px solid rgba(0, 0, 0, 0.08);
					opacity: 0.8;
					transition: all 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
					border-image: linear-gradient(
						to right,
						var(--accent),
						var(--pink)
					);
					border-image-slice: 1;

					@media (prefers-color-scheme: dark) {
						border-bottom: 4px solid rgba(255, 255, 255, 0.1);
					}
				}

				&-company {
					margin-top: 0;
					margin-bottom: 0;
					font-size: 18px;
					font-weight: 900;
				}

				&-title {
					margin-top: 0;
					margin-bottom: 16px;
					font-size: 24px;
					font-weight: 800;
					line-height: 1.4;
				}

				&-tags {
					margin-bottom: 4px;
				}

				&-tag {
					display: inline-block;
					margin-right: 8px;
					font-size: 12px;
					font-weight: 800;
					text-transform: uppercase;
					opacity: 0.5;
					border-radius: 4px;
				}
			}

			&-description {
				margin: 0;
				font-size: 14px;
				line-height: 28px;
				font-weight: 600;
				opacity: 0.8;
			}
		}

		.featured-item-in h2 {
			font-weight: 800;
			font-size: 16px;
			margin-top: 24px;
			opacity: 0.6;
		}

		.featured-item-in-publication {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
			grid-gap: 16px;
			align-items: center;
			filter: grayscale(100%);

			@media (prefers-color-scheme: dark) {
				filter: grayscale(100%) invert(100%);
			}
		}

		.featured-item-in-publication-item {
			display: block;
		}

		.featured-item-in-publication-item img {
			display: block;
			max-height: 54px;
			max-width: 100%;
		}

		.featured-item-in-publication-item:last-child img {
			max-height: 22px;
		}
	}

	.bt-1 {
		opacity: 0;
		will-change: opacity, transform;
	}
`;

export default StyledGreeting;
