//String ➜ Number

let str = "123";
let num = Number(str);
console.log(num); // 123
console.log(typeof num); // "number"    
//Alternative way
let numAlt = +str;
console.log(numAlt); // 123
console.log(typeof numAlt); // "number"


//Number ➜ String

let num2 = 456;
let str2 = String(num2);
console.log(str2); // "456"
console.log(typeof str2); // "string"   
//Alternative way
let str2Alt = num2 + "";
console.log(str2Alt); // "456"
console.log(typeof str2Alt); // "string"    



//Boolean ➜ Number

Number(true);  // 1
Number(false); // 0


//Number ➜ Boolean

Boolean(1);  // true
Boolean(0);  // false


//String ➜ Boolean

Boolean("hello"); // true
Boolean("");      // false


//Boolean ➜ String

String(true);  // "true"
String(false); // "false"   


//Invalid Conversion (NaN)

let invalidStr = "abc";
let invalidNum = Number(invalidStr);
console.log(invalidNum); // NaN
console.log(typeof invalidNum); // "number" 


//Operations with Mixed Types

//String + Number

console.log("5" + 2); // "52"


//String - Number

console.log("5" - 2); // 3


//String * Number

console.log("5" * 2); // 10


//String / Number

console.log("10" / 2); // 5


//Boolean + Number

console.log(true + 2); // 3


//Comparisions Operators

//Loose Equality ==

console.log("5" == 5); // true
console.log(false == 0); // true

//Strict Equality ===

console.log("5" === 5); // false
console.log(false === 0); // false


//Special Conversions

//null

Number(null);   // 0
Boolean(null);  // false


//undefined

Number(undefined); // NaN
Boolean(undefined); // false


//Empty string

Number("");  // 0
Boolean(""); // false


//Unary + Operator

let Str = "20";
console.log(+Str); // 20




//Operations Examples

//Arithmetic

let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333
console.log(a % b); // 1
console.log(a ** b); // 1000


//Increment / Decrement

let x = 5;
x++;
--x;
console.log(x);


