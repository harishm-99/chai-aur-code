// Immediately Invoked Function Expression - To avoid the pollution caused by the global variables IIfe is used in order to use the function call immediately

// WithName IIFE
(function chai() {
    console.log(`DB Connected`)
})();

// WithoutName IIFE
(function () {
    console.log(`DB Connected 2`)
})();

//Arrow IIFE without name
(() =>
    console.log(`DB Connected 3`)
)();

//Arrow IIFE parameter passed without name 
((name) =>
    console.log(`DB Connected 3 \nHello, ${name}`)
)('Harish');