import { GetStaticProps, NextPage } from "next";

import { Grid } from "@nextui-org/react";

import { pokeApi } from "../../../api";
import { PokeApiI, PokemonInfoI } from "../../../interfaces";
import { Layout } from "../../Components/layouts";
import { PokemonCard } from "../../Components/pokemon";

interface PropsI {
  pokemons: PokemonInfoI[];
}

const Home: NextPage<PropsI> = ({ pokemons }) => {
  
  return (
    <>
      <Layout title="Mi pokeApp">
        <Grid.Container gap={2}>
          {pokemons.length > 0 &&
            pokemons.map( pokemon => (
             <PokemonCard pokemon={pokemon}  key={pokemon.id} />
            ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokeApiI>("/pokemon?limit=151");

  const pokemons: PokemonInfoI[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};
