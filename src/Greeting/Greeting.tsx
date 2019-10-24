import React, { useRef, useState, useCallback, useContext } from "react";
import StyledGreeting from "./Greeting.styles";
import { useAnimation } from "./Greeting.animation";
import convertToLetters from "../convertToLetters";
import FEATURED_WORK from "./FEATURED_WORK";
import { ContactContext } from "../Contact/Contact.context";

const Greeting = () => {
	const { dispatch } = useContext(ContactContext);
	const containerRef = useRef(null);
	useAnimation(containerRef);

	const toggleMsg = () =>
		dispatch({ type: "UpdateShowMessage", value: true });

	return (
		<StyledGreeting ref={containerRef}>
			<section className="container">
				<header className="greeting-container contained">
					<p className="greeting greeting--hello">
						<span className="greeting-text">
							{convertToLetters("Hey!")}
						</span>

						<span
							role="img"
							aria-label="wave"
							className="greeting-wave"
						>
							👋
						</span>
					</p>

					<p className="greeting greeting--name">
						<span className="greeting-text">
							{convertToLetters("I'm")}{" "}
							<b>
								{convertToLetters("Emmanuel")}{" "}
								{convertToLetters("Herrero")}
							</b>
						</span>
					</p>
				</header>

				<p className="lead contained">
					I build thoughtful user experiences <wbr />
					powered by code
				</p>

				<p className="lead lead--sub contained">
					I'm a <b>designer</b> &amp; <b>full-stack developer</b>{" "}
					based in Los Angeles specializing in simplicity,
					scalability, &amp; data-driven design solutions built for
					growth.
				</p>

				<span className="button-container">
					<button className="button" onClick={toggleMsg}>
						Say Hello
					</button>
				</span>
			</section>

			<section className="featured">
				<h1 className="featured-title">Featured Work</h1>

				<span className="featured-container">
					{[...FEATURED_WORK].map(
						({
							company,
							logo,
							url,
							title,
							tags,
							description,
							featuredIn
						}) => (
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
											<span className="featured-item-cname">
												{company}
											</span>
										</h1>
										<a
											rel="noopener noreferrer"
											target="_blank"
											href={url}
											className="featured-item-link"
										>
											Open
										</a>
									</div>

									<h2 className="featured-item-header-title">
										{title}
									</h2>

									<p className="featured-item-header-tags">
										{[...tags].map((tag) => (
											<span
												className="featured-item-header-tag"
												key={tag}
											>
												{tag}
											</span>
										))}
									</p>
								</header>

								<p className="featured-item-description">
									{description}
								</p>

								{featuredIn && (
									<aside className="featured-item-in">
										<h2>Featured In</h2>
										<div className="featured-item-in-publication">
											{featuredIn.map(
												({ name, link, image }) => (
													<a
														key={name}
														href={link}
														className="featured-item-in-publication-item"
														rel="noopener noreferrer"
														target="_blank"
													>
														<img
															src={image}
															alt={name}
														/>
													</a>
												)
											)}
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
