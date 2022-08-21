import React, { FC } from "react";

import { Grid } from "@nextui-org/react";

import {FavoritePokemonId} from './index'

interface PropsI {
  favorites: number[];
}

export const PokemonCardFavorite: FC<PropsI> = ({ favorites }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {
        favorites.map((id) => <FavoritePokemonId  key={id}  pokemonId={id}/> )
      }
    </Grid.Container>
  );
};
