// OBJECTS DESTRUCTURING

const car = {
  model: "Mustang",
  brand: "Ford",
  price: 45000,
  specs: {
    brakes: "disc",
    speed: 120,
  },
};

const { model, brand, price } = car;

console.log(model);
console.log(brand);
console.log(price);

const getPrice = ({ price }) => console.log(price);

// Add default value to param object
const getModelAndWeight = ({ model, weight = 2000 }) =>
  console.log({ model, weight });

getPrice(car);
getModelAndWeight(car);

// Destructuring nested objects
const {
  specs: { brakes, speed },
} = car;

console.log(brakes, speed);
