import { FC } from "react";
import styled from "styled-components";

const Message: FC<{
	children: string;
	variant?: "default" | "recep";
	title?: string;
	className?: string;
}> = ({ children, variant = "default", title, className }) => {
	if (typeof children !== "string") throw new Error("String required");

	return (
		<MessageStyles
			className={`message ${
				variant === "recep" ? "message--recep" : ""
			} ${title ? "message--has-title" : ""}
             ${className ? className : ""}`}
		>
			<>
				{title && <h1 className="message-title">{title}</h1>}
				{children}
			</>
		</MessageStyles>
	);
};

const MessageStyles = styled.article`
	display: inline-block;
	padding-left: 24px;
	padding-right: 24px;
	font-size: 18px;
	line-height: 48px;
	border-radius: 24px;
	background: var(--accent);

	@media (${(props) => props.theme.breakpoints.sm.up}) {
		font-size: 24px;
		max-width: 80%;
	}

	&:not(.message--recep) {
		color: var(--bg-color);
		border-bottom-left-radius: 8px;

		@media (prefers-color-scheme: dark) {
			color: var(--fg-color);
		}
	}

	&.message--recep {
		background: #eee;
		border-bottom-right-radius: 8px;

		@media (prefers-color-scheme: dark) {
			background: #333;
		}
	}

	.message-title {
		margin: 0;
		font-size: inherit;
	}

	&.message--has-title {
		font-size: 16px;
		line-height: 28px;
		padding: 16px 24px;

		.message-title {
			font-size: 18px;
			line-height: 42px;

			@media (${(props) => props.theme.breakpoints.sm.up}) {
				font-size: 24px;
			}
		}
	}
`;

export default Message;
