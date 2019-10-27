import styled from "styled-components";

const Styled = styled.section`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
	padding: 24px;
	color: var(--bg-color);
	backdrop-filter: blur(40px) brightness(33%) saturate(120%);
	opacity: 0;

	&:not(.msg--open) {
		pointer-events: none;
	}

	@media (prefers-color-scheme: dark) {
		backdrop-filter: blur(40px) brightness(60%) saturate(80%);
	}

	section {
		max-width: 640px;
		padding: 64px 8px;
		margin: auto auto;
		position: relative;
		z-index: 1;
	}

	.title {
		font-size: 28px;
		margin-bottom: 16px;
		opacity: 0;

		@media (prefers-color-scheme: dark) {
			color: var(--fg-color);
		}
	}

	.cancel {
		appearance: none;
		border: none;
		background: transparent;
		margin-bottom: 16px;
		color: rgba(255, 255, 255, 0.8);
		font-weight: 500;
		font-size: 18px;
		height: 44px;
		cursor: pointer;
		opacity: 0;

		&:hover {
			opacity: 1;
		}
	}

	.form {
		display: flex;
		flex-direction: column;
		background: #fff;
		color: var(--fg-color);
		padding: 16px;
		border-radius: 20px;
		opacity: 0;
		transform: translateY(100px);

		@media (prefers-color-scheme: dark) {
			background: rgba(255, 255, 255, 0.1);
		}
	}

	label {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		padding: 8px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);

		@media (prefers-color-scheme: dark) {
			border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		}

		&.required span:after {
			content: " *";
			color: #f00;
		}

		span {
			margin-right: 8px;
			opacity: 0.5;
		}

		input {
			min-height: 30px;

			&:disabled {
				opacity: 0.5;
			}

			&::placeholder {
				color: var(--fg-color);
				opacity: 0.2;
			}
		}
	}

	input,
	textarea {
		border: none;
		appearance: none;
		background: transparent;
		color: var(--fg-color);
		overflow: hidden;
		font-family: inherit;
		font-size: 16px;

		&:focus {
			outline: none;
		}
	}

	input[type="submit"] {
		background-image: url("/arrow_up.svg");
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 24px;
		align-self: flex-end;
		height: 38px;
		width: 38px;
		border-radius: 38px;
		font-size: 0;
		transition: transform 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.send-container:not(.send-container--valid) {
		cursor: pointer;

		.send-label {
			transform: translateX(28px);
			opacity: 0;
		}

		input[type="submit"] {
			opacity: 0.5;
		}
	}

	.send-container--loading {
		opacity: 0.2;
	}

	.send-label {
		color: var(--accent);
		font-weight: 700;
		transition: inherit;
		opacity: 1;
		transition: opacity 0.6s cubic-bezier(0.075, 0.82, 0.165, 1),
			transform 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.send-container {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		transition: opacity 300ms ease-out;

		&--valid {
			input[type="submit"] {
				transform: rotate(90deg);
			}
		}
	}

	textarea {
		padding: 16px 0;
		line-height: 1.6;
	}
`;

export default Styled;
