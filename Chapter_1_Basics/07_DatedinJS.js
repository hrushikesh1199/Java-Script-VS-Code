//What is Date in JavaScript?
// Date is a built-in object used to work with date and time.

let now = new Date();
console.log(now); 
// Output: Current date and time


//Creating Dates

//01.Current date & time
let d = new Date();
console.log(d); 

//02.Using date string
let d1 = new Date("2025-01-21");
console.log(d1);

//03.Using parameters
let d2 = new Date(2025, 0, 21, 10, 30);
console.log(d2);

//Timestamp (milliseconds)
let d3 = new Date(1700000000000);
console.log(d3);



//Getting Date Values

let D = new Date();

d.getFullYear(); // year
d.getMonth();    // 0–11
d.getDate();     // day of month
d.getDay();      // 0–6 (Sun–Sat)

d.getHours(); 
d.getMinutes();
d.getSeconds();
d.getMilliseconds(); 
d.getTime();
d.getTimezoneOffset();
d.getUTCDate();
d.getUTCMonth();
d.getUTCFullYear();
d.getUTCHours();
d.getUTCMinutes();
d.getUTCSeconds();
d.getUTCMilliseconds();



//Setting Date Values

let a = new Date();

d.setFullYear(2026);
d.setMonth(5);     // June
d.setDate(15);
d.setHours(10);
d.setMinutes(45);


//Formatting Dates

//01.toDateString()
let D1 = new Date();
console.log(D1.toDateString()); 
// Tue Jan 21 2026


//02.toLocaleString()
let D2 = new Date();

console.log(D2.toLocaleString());
console.log(D2.toLocaleDateString());
console.log(D2.toLocaleTimeString());


//Timestamps (Important)

Date.now(); // current timestamp
let a1 = new Date("2025-01-01");
let a2 = new Date("2025-01-10");

console.log(a2 - a1); // milliseconds difference




