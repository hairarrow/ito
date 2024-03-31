import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledLanguageSwitcher = styled.div`
  position: relative;
  max-width: 800px;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  padding: 12px;
  z-index: 100;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .container {
    position: fixed;
    width: 240px;
    display: flex;
    gap: 4px;
    height: 42px;
    z-index: 100;
    backdrop-filter: blur(8px);
    border-radius: 16px;
    transition: width 0.16s ease;

    &.scrolled {
      width: 100px;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }
  }

  .scrolled .language {
    display: none;
  }

  a {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    color: inherit;
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
    gap: 8px;
    z-index: 100;

    .emoji {
      font-size: 20px;
    }

    &:first-child:after {
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
    }

    &:last-child:after {
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.05);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);

      @media (prefers-color-scheme: dark) {
        background-color: rgba(255, 255, 255, 0.1);
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
      }
    }

    &.active {
      color: rgba(0, 0, 0, 0.5);
      cursor: default;

      @media (prefers-color-scheme: dark) {
        color: rgba(255, 255, 255, 0.6);
      }
    }

    &.active:after {
      background-color: rgba(0, 0, 0, 0.0125);

      @media (prefers-color-scheme: dark) {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }

    &:not(.active):after {
      @media (prefers-color-scheme: dark) {
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08),
          inset 0 16px 28px rgba(255, 255, 255, 0.08),
          inset 0 16px 28px rgba(255, 255, 255, 0.08);
      }
    }

    &:hover:not(.active):after {
      @media (prefers-color-scheme: dark) {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }
`;

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, pathname, query } = router;
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const isSpanish = locale === "es";
  const pageName = isSpanish ? pathname.split("/")[2] : pathname;

  return (
    <StyledLanguageSwitcher>
      <div className={`container ${scrollPosition > 40 ? "scrolled" : ""}`}>
        <Link href={{ pathname: pageName, query }} locale="en">
          <a
            aria-label="Switch to English"
            className={isSpanish ? "" : "active"}
          >
            <span role="img" className="emoji">
              🇺🇸
            </span>
            <span className="language">English</span>
          </a>
        </Link>
        <Link href={{ pathname: pageName, query }} locale="es">
          <a
            aria-label="Cambiar a Español"
            className={isSpanish ? "active" : ""}
          >
            <span role="img" className="emoji">
              🇵🇷
            </span>
            <span className="language">Español</span>
          </a>
        </Link>
      </div>
    </StyledLanguageSwitcher>
  );
}
