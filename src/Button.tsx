import React, { FC, HTMLProps } from "react";
import styled from "styled-components";

const Button: FC<HTMLProps<HTMLButtonElement>> = ({
	children,
	className,
	onClick
}) => {
	return (
		<StyledButton
			className={`button ${className ? className : ""}`}
			onClick={onClick}
		>
			{children}
		</StyledButton>
	);
};

const StyledButton = styled.button`
	--x: -8px;
	border: none;
	font-size: 18px;
	line-height: 48px;
	color: var(--bg-color);
	position: relative;
	background: var(--fg-color);
	padding: var(--x);
	font-weight: 800;
	padding-left: 32px;
	padding-right: 32px;
	margin-top: 24px;
	border-radius: 20px;
	cursor: pointer;
	box-shadow: inset 0 0 0 4px rgba(0, 0, 0, 0);
	transition: color 400ms cubic-bezier(0.22, 0.61, 0.36, 1),
		background 400ms cubic-bezier(0.22, 0.61, 0.36, 1),
		box-shadow 400ms cubic-bezier(0.22, 0.61, 0.36, 1);
	z-index: 1;

	&:hover {
		background: var(--bg-color);
		color: var(--fg-color);
		box-shadow: inset 0 0 0 4px var(--fg-color), 24px 8px 44px var(--accent),
			-24px -8px 44px var(--pink);
	}

	&:focus {
		outline: 0;
		box-shadow: 0 0 8px var(--accent);
	}
`;

export default Button;
