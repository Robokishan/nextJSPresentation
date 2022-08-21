export interface PokeApiI {
  count: number;
  next: string;
  previous: null;
  results: PokemonInfoI[];
}

export interface PokemonInfoI {
  name: string;
  url: string;
  id: number;
  imagen: string;
}
