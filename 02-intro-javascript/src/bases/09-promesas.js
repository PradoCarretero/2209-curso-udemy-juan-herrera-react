import { getHeroeById } from "./bases/08-import-filter-find";

/* const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroeResolve = getHeroeById(2);
    resolve(heroeResolve);
    reject("No se pudo encontrar el héroe");
  }, 2000);
});

//then: cuando termine
//catch: para los errores
//finally: después de los dos anteriores
promesa
  .then((heroe) => {
    console.log("héroe", heroe);
  })
  .catch((err) => console.warn(err));
 */

//then: cuando termine
//catch: para los errores
//finally: después de los dos anteriores
/* promesa
  .then((heroe) => {
    console.log("héroe", heroe);
  })
  .catch((err) => console.warn(err));
 */
const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroeResolve = getHeroeById(id);
      if (heroeResolve) {
        resolve(heroeResolve);
      } else {
        reject("No se pudo encontrar el héroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(1).then(console.log).catch(console.warn);
