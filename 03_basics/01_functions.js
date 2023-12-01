function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
}

sayMyName();

function addNumbers(num1, num2) {
        return num1 + num2;
}

// console.log(addNumbers(2, null));
console.log(addNumbers(2, 3));

function loggedIn(username = "sam") {
    // if (username == undefined) {
    if(!username){//We can use ! in place of username==undefined
        console.log("Enter username");
        return 
    }
    return `${username} logged in`;
}

// console.log(loggedIn());
console.log(loggedIn("Harish"));


//Rest Operator used in function:-

function calculateCartPrice(...num1) {
    let sum = 0;
    for (let i = 0; i <= num1.length - 1; i++){
        sum = sum + num1[i];
    }
    return sum;
}

console.log(calculateCartPrice(50, 50, 50, 50, 50, 50));

let user1 = {
    name: "Harish",
    price: 999
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}

// handleObject(user1);
handleObject({
    name: "Surya",
    price:990
})

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,500]));