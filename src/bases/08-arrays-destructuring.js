// ARRAYS DESTRUCTURING

const characters = ["Seiya", "Shiryu", "Ikki"];

const [, c2] = characters;
console.log(c2);

const returnArray = () => ["ABC", 123];

const [letters, numbers] = returnArray();
console.log(letters, numbers);

const setCharacter = (name) => {
  return [name, () => `Pegasus Ryu sei ken!!!`];
};

const [name, power] = setCharacter("Seiya");
console.log(name, power());
