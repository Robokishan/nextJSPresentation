import React, { useState, useEffect } from "react";

import { Layout } from "../components/layouts";
import { NoFavorites } from "../components/ui";
import { localFavorites } from "../utils";
import { PokemonCardFavorite } from "../components/pokemon";

const Favorites = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(localFavorites.getFavorites());
  }, []);

  return (
    <>
      <Layout title="favoritos ">
        {favorites.length > 0 
        ? <PokemonCardFavorite favorites={favorites} />
        : <NoFavorites />}
      </Layout>
    </>
  );
};

export default Favorites;
