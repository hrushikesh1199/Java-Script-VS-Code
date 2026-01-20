//Array:  An array is used to store multiple values in a single variable.

let arr = [1, 2, 3, 4];
console.log(arr); // Output: [1, 2, 3, 4]


//Create Arrays
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

//Access Elements
console.log(fruits[0]); // Output: 'Apple'
console.log(fruits[2]); // Output: 'Cherry'

//Modify Elements
fruits[1] = 'Blueberry';
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry']

//Array Length
console.log(fruits.length); // Output: 3



//Common Array Methods

//01.push() – add at end
fruits.push('Date');
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry', 'Date']

//02.pop() – remove from end
let lastFruit = fruits.pop();   
console.log(lastFruit); // Output: 'Date'
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry']

//03.shift() – remove from start
let firstFruit = fruits.shift(); 
console.log(firstFruit); // Output: 'Apple'
console.log(fruits); // Output: ['Blueberry', 'Cherry']

//04.unshift() – add at start
fruits.unshift('Apricot'); 
console.log(fruits); // Output: ['Apricot', 'Blueberry', 'Cherry']

//05.indexOf() – find index of value
let index = fruits.indexOf('Cherry'); 
console.log(index); // Output: 2



//06.Slice vs Splice (Interview)

//slice() – does NOT change original
let arr1 = [1,2,3,4];
let newArr = arr1.slice(1,3);
console.log(newArr); // [2,3]

//splice() – changes original
let Arr = [1,2,3,4];
arr.splice(1,2);
console.log(Arr); // [1,4]



//Looping Arrays

//01.for loop
let colors = ['Red', 'Green', 'Blue'];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}   
// Output:
// 'Red'
// 'Green'
// 'Blue'

//02.for...of loop
for (let color of colors) {
    console.log(color);
}   
// Output:
// 'Red'
// 'Green'
// 'Blue'


//03.forEach() method
colors.forEach(function(color) {
    console.log(color);
});
// Output:
// 'Red'
// 'Green'
// 'Blue'



//Higher-Order Methods

//01.map() – creates new array by applying function to each element
let numbers = [1, 2, 3];
let doubled = numbers.map(function(num) {
    return num * 2;
}); 
console.log(doubled); // Output: [2, 4, 6]

//02.filter() – creates new array with elements that pass test
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
}); 
console.log(evenNumbers); // Output: [2]

//03.reduce() – reduces array to single value
let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);  
console.log(sum); // Output: 6

//04.find() – returns first element that passes test
let found = numbers.find(function(num) {
    return num > 2;
}); 
console.log(found); // Output: 3



//Array to String

let chars = ['H', 'e', 'l', 'l', 'o'];
let str = chars.join(''); 
console.log(str); // Output: 'Hello'
let csv = chars.join(','); 
console.log(csv); // Output: 'H,e,l,l,o'
let str2 = 'H,e,l,l,o';
let arr2 = str2.split(','); 
console.log(arr2); // Output: ['H', 'e', 'l', 'l', 'o']


