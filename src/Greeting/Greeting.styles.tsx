import styled from "styled-components";

const StyledGreeting = styled.article`
	.container {
		display: block;
		max-width: 640px;
		padding: 2rem;
		margin: auto auto;
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

	.lead {
		margin-bottom: 16px;
		position: relative;
		padding-left: 16px;
		padding-right: 16px;
		font-size: 24px;
		line-height: 48px;
		font-weight: 300;
		opacity: 0;
		transform-origin: bottom left;

		&:not(&--sub) {
			font-weight: 400;
		}

		&--sub {
			font-weight: 400;
			font-size: 16px;
			line-height: 36px;
		}
	}

	.featured {
		margin: 10vh auto;
		max-width: 1000px;
		padding: 32px 24px 40px;
		background: rgba(0, 0, 0, 0.03);
		border-radius: 40px;
		opacity: 0;

		@media (${(props) => props.theme.breakpoints.sm.up}) {
			padding: 40px 40px 56px;
		}

		@media (prefers-color-scheme: dark) {
			background: rgba(255, 255, 255, 0.05);
		}

		&-container {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
			grid-gap: 24px;
			grid-auto-rows: auto;
			align-items: start;
		}

		&-title {
			margin-bottom: 16px;
			font-size: 18px;
			display: inline-block;
			opacity: 0.8;

			@media (prefers-color-scheme: dark) {
				opacity: 0.6;
			}
		}

		&-item {
			position: relative;
			display: flex;
			flex-direction: column;
			padding: 24px 16px;
			background: rgba(255, 255, 255, 1);
			border-radius: 20px;
			opacity: 0;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.075);
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
					border-bottom: 4px solid rgba(0, 0, 0, 0.08);
					opacity: 0.8;
					transition: all 240ms cubic-bezier(0.22, 0.61, 0.36, 1);

					@media (prefers-color-scheme: dark) {
						border-bottom: 1px solid rgba(255, 255, 255, 0.1);
					}
				}

				&-company {
					margin-top: 0;
					margin-bottom: 0;
					font-size: 18px;
					font-weight: 900;
				}

				&-title {
					font-size: 24px;
					font-weight: 800;
					line-height: 1.4;
					margin-bottom: 4px;
				}

				&-tags {
					margin-bottom: 8px;
				}

				&-tag {
					display: inline-block;
					margin-right: 8px;
					margin-bottom: 8px;
					font-size: 12px;
					font-weight: 800;
					text-transform: uppercase;
					background: var(--fg-color);
					color: var(--bg-color);
					padding: 2px 4px;
					border-radius: 4px;
				}
			}

			&-description {
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				margin: 0;
				font-size: 16px;
				line-height: 28px;
				font-weight: 500;
				overflow: hidden;
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

	.button-container {
		/* padding-left: 16px; */
	}

	.button {
		border: none;
		font-size: 16px;
		color: var(--bg-color);
		background: var(--fg-color);
		font-weight: 700;
		height: 44px;
		padding-left: 16px;
		padding-right: 16px;
		margin-top: 24px;
		border-radius: 12px;
		cursor: pointer;
		transition: color 400ms cubic-bezier(0.22, 0.61, 0.36, 1),
			background 400ms cubic-bezier(0.22, 0.61, 0.36, 1),
			box-shadow 400ms cubic-bezier(0.22, 0.61, 0.36, 1);
		opacity: 0;

		&:hover {
			background: var(--bg-color);
			color: var(--fg-color);
			box-shadow: 0 0 0 2px var(--fg-color),
				inset 0 0 0 2px var(--bg-color), inset 0 0 0 4px var(--fg-color);
		}

		&:focus {
			outline: 0;
		}
	}
`;

export default StyledGreeting;
