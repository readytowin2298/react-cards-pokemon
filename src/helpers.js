import { v4 } from "uuid";

/* Select a random element from values array. */
function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
};

// Format Playing Card
function formatCard(data) {
  return {
    image: data.cards[0].image,
    id: v4()
  };
}

// Format response data from the Pokemon API,
 
function formatPokemon(data) {
  return {
    id: v4(),
    front: data.sprites.front_default,
    back: data.sprites.back_default,
    name: data.name,
    stats: data.stats.map(stat => ({
      value: stat.base_stat,
      name: stat.stat.name
    }))
  };
}

export { choice, formatCard, formatPokemon };