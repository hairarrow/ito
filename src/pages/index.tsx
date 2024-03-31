import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import App from "../components/App";

const Home = ({ locale }) => <App locale={locale} />;

export default Home;

export const getStaticProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale,
    },
  };
};
