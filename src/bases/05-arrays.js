// ARRAYS

const array = new Array(100); // This create array with 100 empty items default

const numList = [];
numList.push(1);
numList.push(2);
numList.push(3);

let list = [...numList, 4]; // Correct push without mutating array

const multiplyEachItemList = list.map(function (item) {
  return item * 2;
});

console.log(array);
console.log(numList);
console.log(list);
console.log(multiplyEachItemList);
