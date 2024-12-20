import { useRef, useContext } from "react";
import StyledGreeting from "./Greeting.styles";
import { useAnimation } from "./Greeting.animation";
import FEATURED_WORK from "./FEATURED_WORK";
import { ContactContext } from "../Contact/Contact.context";
import Button from "../Button";
import MailIcon from "../MailIcon";

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
            <span className="greeting-text">Hey! I'm Emmanuel Herrero</span>

            <span role="img" aria-label="wave" className="greeting-wave">
              👋
            </span>
          </p>

          <p className="greeting greeting--name greeting--typing">
            <TypingDots />
            <span className="greeting-text">
              I love building things with code
            </span>
          </p>
        </header>

        <p
          className="lead lead--title contained"
          aria-label="I build thoughtful experiences powered by code"
        >
          Delightful experiences that <wbr /> drive growth
        </p>

        <p className="lead lead--sub contained">
          I’m a designer &amp; full-stack developer creating simple, scalable
          solutions that delight people and deliver real impact.
        </p>

        <span className="button-container">
          <Button className="bt-1" onClick={toggleMsg}>
            <MailIcon />
            Get in Touch
          </Button>
        </span>
      </section>

      <section className="featured">
        <h2 className="featured-title">Featured Work</h2>

        <span className="featured-container">
          {[...FEATURED_WORK].map(
            ({ company, logo, url, title, tags, description, featuredIn }) => (
              <article className="featured-item" key={company}>
                <header className="featured-item-header">
                  <div className="featured-item-header-top-row">
                    <h3 className="featured-item-header-company">
                      {logo && (
                        <img
                          className="featured-item-logo"
                          src={logo}
                          alt={company}
                        />
                      )}
                      <span className="featured-item-cname">{company}</span>
                    </h3>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={url}
                      className="featured-item-link"
                    >
                      Visit Page
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
