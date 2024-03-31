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
  display: none;

  &:not(.msg--open) {
    pointer-events: none;
  }

  &.msg--open {
    display: unset;
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

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
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
    position: relative;
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

    &--success {
      .success-container {
        display: flex;
        opacity: 0;
        animation: fade-in 0.2s ease-out forwards;
        animation-delay: 0.2s;
      }

      .form-fields {
        opacity: 0 !important;
        transition: opacity 0.2s ease-out;
      }
    }
  }

  .b-bottom {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    @media (prefers-color-scheme: dark) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }

  label {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    padding: 8px 0;

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

  .send-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 4px;
    filter: grayscale(100%) brightness(1.2);
    opacity: 0.6;
    transition: filter 120ms ease-out;

    label {
      padding: 0 2px 0 12px;
      border-radius: 12px;
      background-color: var(--accent);
      cursor: pointer;

      &:hover {
        filter: brightness(1.2);
      }

      span {
        margin-right: 2px;
      }

      @media (prefers-color-scheme: dark) {
        background-color: rgba(255, 255, 255, 0.05);
      }
    }

    &--valid {
      filter: none;
      opacity: 1;

      label {
        /* background-color: transparent; */
        border-color: rgba(0, 0, 0, 0.1);
      }
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
    transform: scale(0.72) rotate(90deg);
    filter: brightness(0) invert(1);
    transition: all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);

    @media (prefers-reduced-motion) {
      transform: scale(0.72) rotate(90deg) !important;
    }
  }

  .send-label {
    /* color: var(--accent); */
    color: #fff;
    font-weight: 700;
    transition: inherit;
    opacity: 1;
    transition: opacity 0.6s cubic-bezier(0.075, 0.82, 0.165, 1),
      transform 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  textarea {
    width: 100%;
    padding: 16px 0;
    line-height: 1.6;
  }

  .success-container {
    pointer-events: none;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    padding: 0 16px;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      h2 span {
        margin-right: 8px;
      }

      h2,
      p {
        margin: 0;
        text-align: center;
        line-height: 1.4;
      }
    }
  }

  .pulse {
    animation: pulse 0.8s ease-in-out infinite alternate;
  }

  .fade-out {
    opacity: 0 !important;
    transition: opacity 0.2s ease-out;
  }
`;

export default Styled;
