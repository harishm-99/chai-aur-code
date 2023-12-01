//Avoid these comparisions between different dtypes.

console.log("2" > 1);//true

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null < 0);
console.log(null <= 0);

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);

// This type is allwoed in js but not in TS

//Comparision and equality check is different in JS

// Strict Check :- //===

console.log("2" === 2);

