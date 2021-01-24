import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export const META = {
  title: "Emmanuel Herrero: Designer & Full-stack Developer",
  description:
    "I'm a designer and & full-stack developer based in Los Angeles specializing in simplicity, scalability, & data-driven design solutions built for growth.",
  img: "https://hairarrow.dev/smshare.jpg",
  url: "https://hairarrow.dev"
};

const meta_map = {
  title: ["og:title", "twitter:title"],
  description: ["description", "og:description", "twitter:description"],
  img: ["og:image", "twitter:image"],
  url: ["og:url"]
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          {Object.keys(meta_map).map((k) => {
            return meta_map[k].map((kk) => (
              <meta key={kk} name={kk} content={META[k]} />
            ));
          })}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content={META.title} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://herrero.io" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
