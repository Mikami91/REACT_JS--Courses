// SCOPES
const hero = "Superman"; // Global scope
console.log(hero);

if (true) {
  const hero = "Batman"; // Local Scope
  console.log(hero);
}