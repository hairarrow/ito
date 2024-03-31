import { useEffect } from "react";
import Greeting from "../Greeting";
import Conversation from "../Conversation";
import Services from "../Services";
import About from "../About";
import Footer from "../Footer";
import Contact from "../Contact";
import { ContactContextProvider } from "../Contact/Contact.context";
import useAnalytics from "../../hooks/useAnalytics";
import LanguageSwitcher from "../LanguageSwitcher";

const App = ({ locale }: { locale: string }) => {
  const analytics = useAnalytics();

  useEffect(() => {
    analytics.logEvent<string>("page_view");
  }, []);

  return (
    <ContactContextProvider>
      <LanguageSwitcher />
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
