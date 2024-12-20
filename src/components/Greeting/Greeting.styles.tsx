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

    @media (${(props) => props.theme.breakpoints.xl.up}) {
      max-width: 50vw;
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
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 18px;
    line-height: 28px;
    border-radius: 20px;
    background: var(--accent);
    opacity: 0;
    transform-origin: bottom left;
    transition: background 320ms ease-out;

    a {
      color: inherit;
    }

    .typing-dots {
      opacity: 0;
    }

    &--typing {
      width: 80px;
      height: 36px;
      background: var(--gray);

      .typing-dots {
        opacity: 1;
      }
    }

    & + .greeting {
      margin-top: 1px;
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      background-color: var(--accent);
      transition: inherit;
    }

    &:before {
      width: 20px;
      height: 20px;
      bottom: 0;
      left: -8px;
      background-color: var(--accent);
      border-bottom-right-radius: 15px;
      z-index: 0;
    }

    &:after {
      bottom: 0;
      left: -10px;
      width: 10px;
      height: 20px;
      background-color: var(--bg-color);
      border-bottom-right-radius: 10px;
      z-index: 1;
      transition: none;
    }

    &.greeting--typing {
      &:before,
      &:after {
        background-color: var(--gray);
        width: 16px;
        height: 16px;
        border-radius: 16px;
      }

      &:before {
        transform: scale(0.4) translateX(-12px);
        transform-origin: bottom;
      }

      &:after {
        transform: translateY(0px) translateX(7px) scale(0.8);
      }
    }

    &--no-tail {
      &:before {
        opacity: 0;
      }
    }

    &--hello {
      margin-top: 5vh;
      z-index: 2;
      opacity: 1;
      white-space: nowrap;
      align-items: center;
    }

    &--name {
      z-index: 1;

      .greeting-text {
        opacity: 0;
      }
    }

    &-text {
      font-weight: 300;
      color: #fff;
    }

    &-wave {
      display: inline-block;
      padding-left: 8px;
    }
  }

  .typing-dots {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    padding-left: 12px;
    padding-right: 12px;

    .dot {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 12px;
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .lead {
    margin-bottom: 16px;
    position: relative;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 21px;
    line-height: 36px;
    font-weight: 800;
    opacity: 0;
    transform-origin: bottom left;

    &--title {
      max-width: 326px;
      line-height: 1.1;
    }

    &--sub {
      font-weight: 500;
      font-size: 14px;
      line-height: 1.6;
    }

    @media (${(props) => props.theme.breakpoints.sm.up}) {
      font-size: 28px;
      padding-left: 0;
      padding-right: 0;

      &--title {
        max-width: 420px;
      }

      &--sub {
        font-size: 16px;
        max-width: 90%;
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

      &--title {
        max-width: 640px;
      }

      &--sub {
        font-size: 18px;
      }
    }

    @media (${(props) => props.theme.breakpoints.xl.up}) {
      font-size: 3vw;

      &--title {
        max-width: 42svw;
      }

      &--sub {
        font-size: 1vw;
        max-width: 36svw;
      }
    }
  }

  .featured {
    margin: 10vh auto;
    width: 100%;
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

    @media (${(props) => props.theme.breakpoints.sm.up}) {
      padding: 40px 40px 56px;
    }

    @media (${(props) => props.theme.breakpoints.xl.up}) {
      max-width: 58vw;
      padding: 64px 80px 80px;
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
      grid-gap: 24px;
      grid-auto-rows: auto;
      align-items: start;

      @media (${(props) => props.theme.breakpoints.sm.up}) {
        grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
      }
    }

    &-title {
      margin: 0;
      margin-bottom: 16px;
      font-size: 18px;
      display: inline-block;
      font-weight: 800;
      font-size: 32px;
      line-height: 64px;
      background: linear-gradient(to right, var(--accent), var(--pink));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (${(props) => props.theme.breakpoints.xl.up}) {
        font-size: 1.6vw;
        line-height: 1.4;
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

      &:hover {
        .featured-item-header-top-row {
          opacity: 1;
        }

        .featured-item-link {
          color: var(--accent);
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
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 8px;
          margin-bottom: 16px;
          border: 0;
          opacity: 0.8;
          transition: all 240ms cubic-bezier(0.22, 0.61, 0.36, 1);

          &:after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 4px;
            background: linear-gradient(
              to right,
              var(--accent),
              var(--pink),
              var(--orange)
            );
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

          @media (${(props) => props.theme.breakpoints.xl.up}) {
            font-size: 1.6vw;
          }
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

        @media (${(props) => props.theme.breakpoints.xl.up}) {
          font-size: 0.84vw;
          line-height: 1.6;
        }
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

    @media (${(props) => props.theme.breakpoints.xl.up}) {
      padding: 0.6vw 1vw;
      font-size: 1vw;
      line-height: 1.2;
    }
  }
`;

export default StyledGreeting;
