// //  this keyword

// let user = {
//     username: "Harish",
//     age: 24,
//     welcomeMsg:function() {
//         console.log(`Welcome to functions, ${this.username}`);
//         console.log(this);
//     }
// }

// user.welcomeMsg();
// user.username = "Arbind";
// user.welcomeMsg();


// console.log(this);

// //This can be used while in objects
// function chai() {
//     let user = "Auro";
//     console.log(this.user);// Cannot read user - outputs:undefined
// }

// chai();

//Function Hoisting

// const chai = function () {
//     let user= "User1";
//     console.log(this.user);
// }

// chai();

// Arrow Function :

const chai = () => {
    let user= "User1";
    console.log(this.user);
}

chai();

// let sumTwo = (num1,num2) => {
//     return num1 + num2;
// }

// console.log(sumTwo(3,8));

//Same arrow function code can be written as :

// let sumTwo = (num1,num2) => num1 + num2;

// console.log(sumTwo(3,11));

//Again, Same arrow function code can be written as :

// let sumTwo = (num1, num2) => { user: "Harish" };//Outputs: Undefined because it isn't enclosed under brackets
let sumTwo = (num1, num2) => ({ user: "Harish" });//Outputs: Undefined because it isn't enclosed under brackets

//Again
console.log(sumTwo(3,11));