const name = "Harish";
const repoCount = 10;

// This is an old way of string representation called String Concatenation
// console.log(name+repoCount+" Hello World");

// This is the new way called "String Interpolation", Backticks(``) is used 
console.log(`Hello, My name is ${name}, and my repo count is ${repoCount}`);

// new keyword - use to access methods

const gameName = new String('Harishm99');

//Prototype - String{}
console.log(gameName.__proto__);

// We can access all the properties/Functions/Methods of this prototype

console.log(gameName.length);// Property
console.log(gameName.toLowerCase());// Functions
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('9'));

//Sub Strings : 

// const newString = gameName.substring(0, 4);
// const newString = gameName.substring(2, 4);
const newString = gameName.substring(-8, 4);// No negative values can be initialized bydefault it will start from 0

console.log(newString);

// Split function can be used instead for same functionality

const anotherString = gameName.slice(-6, 9);// Negative nos can also be used in first parameter keeping in mind that second parameter cannot be negative.
console.log(anotherString);
