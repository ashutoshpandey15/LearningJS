// Destructuring and Spread Operators

//Destructuring
let array = [7, 21];
let [x, y] = array;
console.log(x, y);

//Spread Syntax (passing the values of an array in function)
function sum(v1, v2) {
  return v1 + v2;
}
console.log(sum(...array));

//In objects we can also update the values
let obj2 = {
  name: "foo",
  age: 30,
  company: "ABZ",
};

console.log({ ...obj2, name: "Ashu", age: 25 });
