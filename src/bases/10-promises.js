// PROMISES

import { getHeroById } from './09-imports-and-exports.js';

export const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let heroe = getHeroById(id);

      if (heroe) {
        resolve(heroe);
      } else {
        reject('Not found hero ID: ' + id);
      }
    }, 1000);
  });
};

// getHeroByIdAsync(10).then(console.log).catch(console.warn);
