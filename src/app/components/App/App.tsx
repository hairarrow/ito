import React, { useEffect } from "react";
import Greeting from "../Greeting";
import Conversation from "../Conversation";
import Services from "../Services";
import About from "../About";
import Footer from "../Footer";
import Contact from "../Contact";
import { ContactContextProvider } from "../Contact/Contact.context";
import fb from "../../fb";

const App = () => {
	useEffect(() => {
		fb.analytics().logEvent<string>("page_view");
	}, []);

	return (
		<ContactContextProvider>
			<Contact />
			<Greeting />
			<Conversation />
			<Services />
			<About />
			<Footer />
		</ContactContextProvider>
	);
};

export default App;
