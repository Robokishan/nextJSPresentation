import { FC } from "react";

import Head from "next/head";
import { NavBar } from "../ui";

interface PropsI {
  children: React.ReactNode;
  title?: string;
}

// la ruta de la imagen en el meta og:image debe contener una ruta absoluta... para obternerla
const origin = typeof window === "undefined" ? "" : window.location.origin;

// const Layout:FC<{title:string}> = ({children, title}) => {
export const Layout: FC<PropsI> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "pokemon app"}</title>
        <meta name="Trinidad" />
        <meta name="description" content={`información del pokemón ${title}`} />
        <meta name="keywords" content={`${title} pokemon, pokedex`} />
        <meta property="og:title" content={`Información sobre ${title} `} />
        <meta property="og:description" content={`página sobre ${title} `} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      {/* NAVBAR */}
      {/* <NavBar /> */}

      <main>{children}</main>
    </>
  );
};
