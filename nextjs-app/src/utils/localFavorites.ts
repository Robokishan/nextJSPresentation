const toggleFavorites = (id:number) => {
  const favorites:number[] = JSON.parse( localStorage.getItem('favorites') || '[]' );

  favorites.includes(id)
    ? localStorage.setItem('favorites', JSON.stringify(favorites.filter(idPokemon => idPokemon !== id)) )
    : localStorage.setItem('favorites', JSON.stringify([...favorites, id]));
}

const existInFavorite = (id:number):boolean => {
  if(typeof window === 'undefined') return false;
  const favorites:number[] = JSON.parse( localStorage.getItem('favorites') || '[]');
  return favorites.includes(id);
}

const getFavorites = ():number[] => {
  return JSON.parse( localStorage.getItem('favorites') || '[]' );
}

export default {
  toggleFavorites,
  existInFavorite,
  getFavorites
}