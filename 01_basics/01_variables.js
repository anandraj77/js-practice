const accountId = 144553
let accountEmail = "test@google.com"
var accountPass = "12345"
accountCity = "India"
let accountState;

// accountId = 2

accountEmail = "changed@google.com"

accountPass = "54234"
accountCity = "Delhi"

console.log(accountId);


/*

prefer not to use var because of issue in block and functional scope

*/


console.table ([accountId, accountEmail, accountPass, accountCity, accountState])