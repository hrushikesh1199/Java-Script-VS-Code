//Strings 
let name = "Hrushikesh";
let city = 'Pune';


//1.Using quotes
let s1 = "Hello";
let s2 = 'World';


//2.Template literals (ES6)
let user = "Hrushikesh";
let age = 22;

console.log(`My name is ${user} and age is ${age}`);


//3.String Length
let str1 = "JavaScript";
console.log(str1.length); // 10



//4.Access Characters
let str2 = "Hello";
console.log(str2[0]); // H
console.log(str2.charAt(1)); // e



//String Methods (Most Used)

//1️. Uppercase / Lowercase
let text1 = "Hello";

console.log(text1.toUpperCase()); // HELLO
console.log(text1.toLowerCase()); // hello


//2️. Trim (remove spaces)
let msg = "  hi  ";
console.log(msg.trim()); // "hi"


//3️. Slice / Substring
let str3 = "JavaScript";

console.log(str3.slice(0, 4));     // Java
console.log(str3.substring(4, 10)); // Script


//4️. Replace
let text2 = "I love Java";
console.log(text2.replace("Java", "JS"));


//5.Includes
let str4 = "Learn JavaScript";
console.log(str4.includes("Java")); // true


//6.Split
let str5 = "HTML,CSS,JS";
console.log(str5.split(",")); // ["HTML","CSS","JS"]



//7.Concatenation
let a = "Hello";
let b = "World";

console.log(a + " " + b);        // Hello World
console.log(`${a} ${b}`);        // Hello World




//String Comparison

//1.Strings are Immutable
let str6 = "Hello";
str[0] = "h";

console.log(str6); // Hello (unchanged)


//2.Convert String ↔ Number
Number("10"); // 10
String(10);   // "10"

