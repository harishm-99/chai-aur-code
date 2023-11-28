// let score = "33abv";//Nan(Not a Number)
// let score = null;//0
// let score = undefined;//Nan
// let score = true;//1
let score = "Harish";//NaN

console.log(score);

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false =>0

// let isLoggedin = 1;//true
// let isLoggedin = "";//false
let isLoggedin = "Harish";//true

let booleanIsLoggedIn = Boolean(isLoggedin);

console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false;"Harish" => true;

let someNumber = 33;

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof (stringNumber));

//*********************  Operations  ************************** */

let value = 3;
let negValue = -value;

console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2);

// let str1 = "Hello"
// let str2 = " Harish"

// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);//12
// console.log(1 + "2");//12
// console.log("1" + 2 + 2);//122 - The abstract operations takes argument input and optional argument(string or number).
// console.log(1 + 2 + "2");

// // console.log(3+4*5%3)//Wrong way
// console.log((3 + 4) * 5 % 3);

//Special Conversion

// console.log(true);//true
console.log(+true);//1
// console.log(true+);//error

console.log(+"");//0
// console.log(""+);//0//error

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;// Wrong way

let gameCounter = 100;
gameCounter++;
++gameCounter;

console.log(gameCounter);
