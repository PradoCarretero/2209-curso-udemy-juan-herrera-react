//cómo importar
import heroes, { owners } from "../data/heroes";
/* console.log(heroes);
console.log(owners); */

//find
export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

/* console.log("id", getHeroeById(2)); */

//filter
export const getHeroesByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};

/* console.log("owner", getHeroesByOwner("DC")); */
