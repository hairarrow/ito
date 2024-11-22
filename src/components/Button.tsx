import { FC, HTMLProps } from "react";
import styled from "styled-components";

const Button: FC<HTMLProps<HTMLButtonElement>> = ({
  children,
  className,
  onClick,
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
  @keyframes rotate {
    0% {
      box-shadow: inset 0 0 0 1px var(--fg-color), 12px 12px 44px var(--accent),
        -12px -12px 44px var(--pink);
    }
    25% {
      box-shadow: inset 0 0 0 1px var(--fg-color), -12px 12px 44px var(--accent),
        12px -12px 44px var(--pink);
    }
    50% {
      box-shadow: inset 0 0 0 1px var(--fg-color),
        -12px -12px 44px var(--accent), 12px 12px 44px var(--pink);
    }
    75% {
      box-shadow: inset 0 0 0 1px var(--fg-color), 12px -12px 44px var(--accent),
        -12px 12px 44px var(--pink);
    }
    100% {
      box-shadow: inset 0 0 0 1px var(--fg-color), 12px 12px 44px var(--accent),
        -12px -12px 44px var(--pink);
    }
  }

  --x: -8px;
  --br: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; // not sure why this isn't working with var(--x)
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
  border-radius: var(--br);
  z-index: 1;
  cursor: pointer;
  transition: color 400ms cubic-bezier(0.22, 0.61, 0.36, 1),
    background 400ms cubic-bezier(0.22, 0.61, 0.36, 1),
    box-shadow 400ms cubic-bezier(0.22, 0.61, 0.36, 1);
  box-shadow: inset 0 0 0 1px var(--fg-color);
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    border-radius: var(--br);
    transition: opacity 400ms cubic-bezier(0.22, 0.61, 0.36, 1);
    animation: rotate 4s ease-in-out infinite;
    opacity: 0.4;
  }

  &:hover {
    background: var(--bg-color);
    color: var(--fg-color);
    box-shadow: inset 0 0 0 4px var(--fg-color);

    &:after {
      opacity: 0.8;
    }
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 8px var(--accent);
  }
`;

export default Button;
