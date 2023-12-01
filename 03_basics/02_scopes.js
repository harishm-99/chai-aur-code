// var c = 100;

// if (true) {
//     let a = 10;
// const b = 20;
// var c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c);


// Nested Scope

function one() {
    const username = "Hitesh";

    function two() {
        const website = "Youtube";
        // console.log(username);
    }
    // console.log(website);

    two();
}

one();



if (true) {
    let username = "Harish";
    if (username === "Harish") {
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++Interesting+++++++++++++++++++++

// Hoisting

console.log(addOne(6));
function addOne(num) {
    return num + 1;
}



console.log(addTwo(9));
const addTwo = function(num) {
    return num + 1;
}
