import React from "react";
import StyledGreeting from "./Greeting.styles";
import convertToLetters from "../convertToLetters";

const Greeting = () => {
	return (
		<StyledGreeting>
			<header className="greeting-container">
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
						<b>{convertToLetters("Emmanuel")}{" "}{convertToLetters("Herrero")}</b>
					</span>
				</p>
			</header>
		</StyledGreeting>
	);
};

export default Greeting;
