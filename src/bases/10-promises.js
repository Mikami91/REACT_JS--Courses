// PROMISES

import { getHeroById } from "./09-imports-and-exports.js";

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Three seconds after");

//     let heroe = getHeroById(3);
//     resolve(heroe);
//   }, 3000);
// });

// promise
//   .then((heroe) => {
//     console.log("Them...");
//     console.log(heroe);
//   })
//   .catch((err) => console.warn(err));

// Other way
const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let heroe = getHeroById(id);

      if (heroe) {
        resolve(heroe);
      } else {
        reject("Hero not found...");
      }
    }, 3000);
  });
};

getHeroByIdAsync(10)
  .then(console.log)
  .catch(console.warn);
