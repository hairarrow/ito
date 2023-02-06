import { useRef, useContext } from "react";
import StyledGreeting from "./Greeting.styles";
import { useAnimation } from "./Greeting.animation";
import FEATURED_WORK from "./FEATURED_WORK";
import { ContactContext } from "../Contact/Contact.context";
import Button from "../Button";

const TypingDots = () => (
  <span className="typing-dots">
    <span className="dot dot0" />
    <span className="dot dot1" />
    <span className="dot dot2" />
  </span>
);

const Greeting = () => {
  const { dispatch } = useContext(ContactContext);
  const containerRef = useRef(null);
  useAnimation(containerRef);

  const toggleMsg = () => dispatch({ type: "UpdateShowMessage", value: true });

  return (
    <StyledGreeting ref={containerRef}>
      <section className="container">
        <header className="greeting-container contained">
          <p className="greeting greeting--hello" aria-label="Hey">
            <TypingDots />
            <span className="greeting-text">Hey, I'm Emmanuel Herrero</span>
            <span role="img" aria-label="wave" className="greeting-wave">
              👋
            </span>
          </p>

          <p className="greeting greeting--name greeting--typing">
            <span className="greeting-text">
              I'm an engineering manager at{" "}
              <a
                href="https://www.volleythat.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Volley
              </a>
              <div
                className="stars"
                // style="transform: translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;"
              >
                <img
                  src="https://assets.website-files.com/61c070585317d242d3a59789/61c070585317d21de3a597da_Circle.svg"
                  loading="lazy"
                  alt=""
                  className="circle"
                />
                <img
                  src="https://assets.website-files.com/61c070585317d242d3a59789/61c070585317d2ae67a597d8_Cross.svg"
                  loading="lazy"
                  alt=""
                  className="cross"
                />
                <img
                  src="https://assets.website-files.com/61c070585317d242d3a59789/61c070585317d29fada597d9_Triangle.svg"
                  loading="lazy"
                  alt=""
                  className="triangle"
                />
              </div>
            </span>
            <TypingDots />
          </p>
        </header>

        <p
          className="lead contained"
          aria-label="I build thoughtful experiences powered by code"
        >
          I build thoughtful experiences <br />
          powered by code
        </p>

        <p className="lead lead--sub contained">
          I'm a <b>designer &amp; full-stack developer</b> based in Los Angeles
          specializing in simplicity, scalability, &amp; data-driven design
          solutions built for growth.
        </p>

        <span className="button-container">
          <Button className="bt-1" onClick={toggleMsg}>
            Say Hello
          </Button>
        </span>
      </section>

      <section className="featured">
        <h1 className="featured-title">Featured Work</h1>

        <span className="featured-container">
          {[...FEATURED_WORK].map(
            ({ company, logo, url, title, tags, description, featuredIn }) => (
              <article className="featured-item" key={company}>
                <header className="featured-item-header">
                  <div className="featured-item-header-top-row">
                    <h1 className="featured-item-header-company">
                      {logo && (
                        <img
                          className="featured-item-logo"
                          src={logo}
                          alt={company}
                        />
                      )}
                      <span className="featured-item-cname">{company}</span>
                    </h1>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={url}
                      className="featured-item-link"
                    >
                      Product Page
                    </a>
                  </div>

                  <p className="featured-item-header-tags">
                    {[...tags].map((tag) => (
                      <span className="featured-item-header-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </p>

                  <h2 className="featured-item-header-title">{title}</h2>
                </header>

                <p className="featured-item-description">{description}</p>

                {featuredIn && (
                  <aside className="featured-item-in">
                    <h2>Featured In</h2>
                    <div className="featured-item-in-publication">
                      {featuredIn.map(({ name, link, image }) => (
                        <a
                          key={name}
                          href={link}
                          className="featured-item-in-publication-item"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img src={image} alt={name} />
                        </a>
                      ))}
                    </div>
                  </aside>
                )}
              </article>
            )
          )}
        </span>
      </section>
    </StyledGreeting>
  );
};

export default Greeting;
