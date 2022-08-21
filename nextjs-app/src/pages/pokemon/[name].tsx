import { useState } from "react";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Card, Grid, Text } from "@nextui-org/react";

import confetti from "canvas-confetti";

import { pokeApi } from "../../../api";
import { PokeApiI, PokemonI } from "../../../interfaces";
import { Layout } from "../../Components/layouts";

import { localFavorites } from "../../utils";

interface PokemonOptI {
  name: string;
  id: number;
  image: string;
  imageFrontSprite: string;
  imageBackSprite: string;
  imageFrontShiny: string;
  imageBackShiny: string;
}

interface Props {
  pokemon: PokemonOptI;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState<boolean>(
    localFavorites.existInFavorite(pokemon.id)
  );

  const toggleFavorites = () => {
    localFavorites.toggleFavorites(pokemon.id);
    setIsInFavorites(!isInFavorites);

    !isInFavorites &&
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 0.5,
          y: 0,
        },
      });
  };

  return (
    <>
      <Layout title={`${pokemon.name}`}>
        <Grid.Container gap={2}>
          <Text margin="0 auto" h1 transform="capitalize">
            {" "}
            {pokemon.name}{" "}
          </Text>
          <Card.Image
            src={pokemon.image || "/no-image.png"}
            alt={pokemon.name}
            width="100%"
            height={200}
          />
        </Grid.Container>
      </Layout>
    </>
  );
};

export default PokemonPage;

export const getStaticPaths: GetStaticPaths = async (context) => {
  // const pokemons151Id = [...Array(151)].map((v, index) => `${index + 1}`); // 1 - 151
  const { data } = await pokeApi.get<PokeApiI>(`/pokemon?limit=151`);
  const pokemons151Names: string[] = data.results.map(
    (pokemon) => pokemon.name
  );

  return {
    paths: pokemons151Names.map((name) => ({ params: { name } })), // {params : {name: name}}
    // fallback: false,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const { data } = await pokeApi.get<PokemonI>(`/pokemon/${name}`);

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const dataOptimized = {
    name: data.name,
    id: data.id,
    image: data.sprites.other?.dream_world.front_default,
    imageFrontSprite: data.sprites.front_default,
    imageBackSprite: data.sprites.back_default,
    imageFrontShiny: data.sprites.front_shiny,
    imageBackShiny: data.sprites.back_shiny,
  };

  return {
    props: {
      pokemon: dataOptimized,
    },
    revalidate: 86400, // 60 * 60 * 24 = 1día
  };
};
