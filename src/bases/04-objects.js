// OBJECTS
const pet1 = {
    name : 'Otto',
    age: 15,
    color: "brown",
    skill : ['bark', 'run', 'sniff']
};

const pet2 = pet1; // Wrong object clone
pet2.name = 'Pandora';

const pet3 = {...pet1}; // Correct object clone
pet3.name = 'Perla';

console.log(pet1);
console.log(pet2);
console.log(pet3);
