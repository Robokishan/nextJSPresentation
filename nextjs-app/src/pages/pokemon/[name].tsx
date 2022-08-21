import { GetStaticProps, NextPage } from "next";

import { Card, Grid, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { pokeApi } from "../../../api";
import { PokemonI } from "../../../interfaces";
import { Layout } from "../../Components/layouts";

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
  const router = useRouter();
  console.log(router.query.name);
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

export const getServerSideProps: GetStaticProps = async ({ params }) => {
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
    // revalidate: 86400, // 60 * 60 * 24 = 1día
  };
};
