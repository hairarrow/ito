import { FC } from "react";
import styled from "styled-components";
import cn from "clsx";

const Message: FC<{
  children: string;
  variant?: "default" | "recep";
  title?: string;
  className?: string;
}> = ({ children, variant = "default", title, className }) => {
  if (typeof children !== "string") throw new Error("String required");

  return (
    <MessageStyles
      className={cn(
        "message",
        variant === "recep" && "message--recep",
        title && "message--has-title",
        className
      )}
    >
      <>
        {title && <h2 className="message-title">{title}</h2>}
        {children}
      </>
    </MessageStyles>
  );
};

const MessageStyles = styled.article`
  position: relative;
  display: inline-block;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 18px;
  line-height: 40px;
  border-radius: 20px;
  background: var(--accent);

  @media (${(props) => props.theme.breakpoints.sm.up}) {
    font-size: 24px;
    max-width: 80%;
  }

  &:not(.message--recep) {
    color: var(--bg-color);

    @media (prefers-color-scheme: dark) {
      color: var(--fg-color);
    }
  }

  &.message--recep {
    background-color: var(--gray);
  }

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 20px;
    bottom: 0;
  }

  &:before {
    width: 20px;
    z-index: 0;
  }

  &:after {
    width: 10px;
    background-color: var(--bg-color);
    transition: none;
    z-index: 1;
  }

  &.message--recep:before {
    right: -8px;
    background-color: var(--gray);
    border-bottom-left-radius: 15px;
  }

  &:not(.message--recep):before {
    left: -8px;
    background-color: var(--accent);
    border-bottom-right-radius: 15px;
  }

  &.message--recep:after {
    right: -10px;
    border-bottom-left-radius: 10px;
  }

  &:not(.message--recep):after {
    left: -10px;
    border-bottom-right-radius: 10px;
  }

  &.message--no-tail:before {
    opacity: 0;
  }

  .message-title {
    margin: 0;
    font-size: inherit;
  }

  &.message--has-title {
    font-size: 18px;
    line-height: 32px;
    padding: 12px 16px;

    .message-title {
      font-size: 18px;
      /* line-height: 42px; */

      @media (${(props) => props.theme.breakpoints.sm.up}) {
        font-size: 21px;
      }
    }
  }
`;

export default Message;
