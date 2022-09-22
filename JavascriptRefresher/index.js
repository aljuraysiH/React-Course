// Spread Operator

// console.log('\nSpread Operator');
// const myArray = [5, 6, 7, 8, 9, 10];
// const newArray = [1, 2, 3, 4, ...myArray];

// console.log(myArray);
// console.log(newArray);

// ****************************************************************

// Rest Operator

// console.log('\nRest Operator');
// const names = ['Hamad', 'Nasser', 'Fahad'];
// const [, myName, ...newArray] = names;

// console.log(myName);
// console.log(newArray);

// // ****************************************************************

// // Short circuiting

// console.log('\nShort circuiting');

// console.log('' && true && 'Hamad');

// if (0 == false) {
//   console.log('heelovd');
// }

// // ****************************************************************

// // Ternary Operator

// console.log('\nTernary Operator');
// console.log(10 > 15 ? '10 > 15' : '10 < 15');

// if (10 > 15) {
//   console.log('10 > 15');
// } else {
//   console.log('10 < 15');
// }

// // ****************************************************************

// // Optional Chaining  (?)

// console.log('\nOptional Chaining');
// let object = {};
// object = { people: { studens: { name: 'hamad' } } };

// console.log(object.people?.studens?.name);
// console.log(object.people.teachers.name);

// // ****************************************************************

// // Truthy and Falsy values in javascript

// if (5 - 5) {
//   console.log('10');
// }

// if ('' == false) {
//   console.log('true');
// }

// if (null) {
//   console.log('null');
// }

// if (undefined) {
//   console.log('undefined');
// }

// // ****************************************************************

// // Map

// const mapArray = ['Hamad', 'Fay', 'Shahad', 'Amjad', 'Ather'];

// const newMap = mapArray.map((item, index) => {
//   console.log(item + index);
//   return item + index;
// });

// console.log(newMap);
// // ****************************************************************

// // Import and Export

// console.log('Import And Export');

// import name1, { yourName } from './testing.js';
// console.log(name1, yourName);

// Rest Operator

// function myFunc() {
//   //
// }

const myFunc = () => {
  //
  console.log('My function');
};

const myFunc2 = () => 5;

console.log(myFunc2());

// myFunc();
