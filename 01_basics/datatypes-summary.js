// // #Primitive 

// // 7 types : String, Number,Boolean,null,undefined,symbol, BigInt

// // Js is a dynamically typed language, dt need not to be defined for compilation

// const score = 25;// Number value
// const scoreValue = 56.2;//Decimal is also number value
// const isLoggedin = false;// Boolean  value
// const outsideTemp = null;//Null value
// let userMail;// undefined value

// const id = Symbol('123');
// const anotherID = Symbol('123');

// console.log(id === anotherID);// Assigns Unique values even if the values are identical.

// const bigNumber = 12236467787875454n;// bigInt Value

// // Reference Type (Non-Primitives)

// // Arrays, Objects, Functions

// const heroes = ["shaktimaan", "nagraj", "doga"];// Arrays Values

// let myObj = {
//     name: "Harish",
//     age: 24
// }//Object Values

// const myFunction = function () {
//     console.log("Hello World");
// };

// console.log(typeof (score));
// console.log(typeof (scoreValue));
// console.log(typeof (isLoggedin));
// console.log(typeof (outsideTemp));// The data type of null shows object
// console.log(typeof (userMail));
// console.log(typeof (id));
// console.log(typeof (heroes));// DT of Array shows object
// console.log(typeof (myObj));
// console.log(typeof (myFunction));
// console.log(typeof (bigNumber));

// /**************************************************************/

// // Stack(Primitive) & Heap(Non-Primitive/reference)

// //Stack
let myYoutubeName = "HareeshMahato";
let anotherName = myYoutubeName;

console.log(anotherName);
anotherName = "Chai-aur-Code";
console.log(anotherName);
console.log(myYoutubeName);


//Heap

let user1 = {
    username: "harish@google",
    upi:"harish@ybl"
}

let user2 = user1;

console.log(user2.username);

user2.username = "react@google";

console.log(user1.username);
console.log(user2.username);