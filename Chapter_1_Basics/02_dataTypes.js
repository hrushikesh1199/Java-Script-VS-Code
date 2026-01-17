//Number

let age = 22;
let price = 99.99;
console.log(typeof age); // number




//String

let firstName = "John";
let lastName = 'Doe';
console.log(typeof firstName); // string




//Boolean

let isStudent = true;
let hasGraduated = false;
console.log(typeof isStudent); // boolean




//Undefined

let middleName;
console.log(typeof middleName); // undefined




//Null

let address = null;
console.log(typeof address); // object (this is a known quirk in JavaScript)



//Object

let person = { name: "Alice", age: 30 };
console.log(typeof person); // object  


//Array

let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // object (arrays are a type of object in JavaScript)


//Function
function greet() {
  return "Hello!";
}
console.log(typeof greet); // function



//Symbol

let uniqueId = Symbol('id');
console.log(typeof uniqueId); // symbol


//BigInt

let bigNumber = BigInt(9007199254740991);
console.log(typeof bigNumber); // bigint

