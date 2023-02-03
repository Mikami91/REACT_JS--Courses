// FUNCTIONS

function myName(name) {
  return `Your name is ${name}`;
}

// Better way
const myPower = (power) => `Your power is ${power}`;

// To return objects with arrow functions
export const getuser = () => ({
  uid: 'ABCDE123',
  userName: 'Nameless',
});

// console.log(myName('Mikami'));
// console.log(myPower('Flame'));
// console.log(getuser());
