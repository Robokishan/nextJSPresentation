import type { NextPage } from "next";
import Head from "next/head";
import App from "../Components/App";

export { getServerSideProps } from "../utils/utils";

const Home: NextPage = (props) => {
  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <App props={props} />
    </div>
  );
};

export default Home;
