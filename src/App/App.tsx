import React from "react";
import Greeting from "../Greeting";
import Conversation from "../Conversation";
import Services from "../Services";
import About from "../About";
import Footer from "../Footer";
import Contact from "../Contact";
import { ContactContextProvider } from "../Contact/Contact.context";

const App = () => {
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
