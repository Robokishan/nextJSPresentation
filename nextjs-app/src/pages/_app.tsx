import "../styles/App.css";
import "../styles/index.css";
import NextNProgress from "nextjs-progressbar";
import type { AppType } from "next/dist/shared/lib/utils";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
