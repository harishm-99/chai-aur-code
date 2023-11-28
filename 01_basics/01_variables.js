const accountId = 15677;
let accountEmail = "harish@gmail.com";
var accountPassword = "123456789"
accountCity = "Bengaluru";

// accountId = 2;

accountEmail = "harish@google.com";
accountPassword = "098765";
accountCity = "Jaipur";

let accountState;

/*Prefer not to use var because of issue in block scope and functional scope*/ 

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
