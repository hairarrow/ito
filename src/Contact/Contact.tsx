import React, { useContext, useEffect, useState, useRef } from "react";
import { ContactContext } from "./Contact.context";
import StyledContact from "./Contact.styles";
import useAnimation from "./Contact.animation";

const Contact = () => {
	const containerRef = useRef(null);
	const {
		state: { showMessage },
		dispatch
	} = useContext(ContactContext);
	const [valid, setValid] = useState({
		email: false,
		message: false
	});
	useAnimation(containerRef, showMessage);

	const toggle = () => dispatch({ type: "UpdateShowMessage", value: false });

	const handleSubmit = (e) => {
		e.preventDefault();
		toggle();
	};
	const handleChangeEmail = (e) => {
		const { valid: email } = e.target.validity;
		setValid({ ...valid, email });
	};

	const handleChangeMessage = (e) => {
		const { valid: message } = e.target.validity;
		setValid({ ...valid, message });
	};

	return (
		<StyledContact
			ref={containerRef}
			className={`msg ${showMessage ? "msg--open" : ""}`}
		>
			<section>
				<button className="cancel" onClick={toggle}>
					Cancel
				</button>
				<h1 className="title">Say hello</h1>
				<form className="form" onSubmit={handleSubmit}>
					<label
						className={`send-container ${
							Object.keys(valid).every((key) => valid[key])
								? "send-container--valid"
								: ""
						}`}
					>
						<span className="send-label">Send</span>
						<input type="submit" value="Send" />
					</label>
					<label htmlFor="msg_to" className="label--disabled">
						<span>To:</span>
						<input
							id="msg_to"
							type="email"
							name="email"
							value="hello@hairarrow.dev"
							disabled
						/>
					</label>{" "}
					<label htmlFor="msg_email">
						<span>From:</span>
						<input
							id="msg_email"
							type="email"
							name="email"
							required
							onChange={handleChangeEmail}
						/>
					</label>
					<label htmlFor="msg_subject">
						<span>Subject:</span>
						<input id="msg_subject" type="text" name="subject" />
					</label>
					<textarea
						onChange={handleChangeMessage}
						id="msg_body"
						name="body"
						placeholder="Message"
						required
					/>
				</form>
			</section>
		</StyledContact>
	);
};

export default Contact;
