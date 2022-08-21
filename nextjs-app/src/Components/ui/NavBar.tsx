import React from "react";

import Image from "next/image";
import NextLink from "next/link";

import { useTheme, Text, Spacer, Link } from "@nextui-org/react";

export const NavBar = () => {
  const { theme } = useTheme();

  return (
    <>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 1rem",
          fontWeight: "bold",
          backgroundColor: theme?.colors.blue700.value,
        }}
      >
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Imagen"
          width="100"
          height="100"
        />
        <NextLink href="/" passHref>
          <Link underline>
            <Text color="white" h2>
              P
            </Text>
            <Text color="white" h3>
              okemón
            </Text>
          </Link>
        </NextLink>
        <Spacer css={{ flex: 1 }} />
        <NextLink href="/favorites" passHref>
          <Link>
            <Text color="white">Favoritos</Text>
          </Link>
        </NextLink>
      </nav>
    </>
  );
};
