import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    :root {
        --bg-color: ${theme.colors.bg};
        --fg-color: ${theme.colors.fg};
        --accent: ${theme.colors.accent};
        --pink: ${theme.colors.alt};
        --orange: ${theme.colors.orange};

        @media (prefers-color-scheme: dark) {
            --bg-color: #000;
            --fg-color: ${theme.colors.bg};
        }
    }

    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;

        @media(prefers-reduced-motion: reduce) {
            transition: none !important;
            animation: none !important;
            scroll-behavior: auto !important;
        }
    }

    html,
    body {
        margin: 0;
        padding: 0;
        min-height: 100%;
        width: 100%;
        font-size: 16px;
        font-family: 'SF UI Text', -apple-system, system-ui, 'Helvetica Neue', 'Segoe UI', sans-serif;
        color: var(--fg-color);
        background: var(--bg-color);
    }
`;

export default GlobalStyle;
