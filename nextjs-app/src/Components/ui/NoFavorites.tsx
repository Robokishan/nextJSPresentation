import React, { FC } from "react";

import { Container, Image, Text } from "@nextui-org/react";

export const NoFavorites:FC = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text h1>No hay favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg"
        alt="pokemon"
        width={350}
        height={350}
        css={{
          opacity: 0.1,
        }}
      />
    </Container>
  );
};

