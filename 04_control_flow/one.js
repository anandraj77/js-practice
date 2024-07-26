// if
const isUserLoggedIn = true
const temp = 41

// if( temp < 50 ){
//     console.log("less than 50");
// } else {
//     console.log("temp more than 50");
// }

const score = 200

// if(score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");  -> bad practice


// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debtiCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debtiCard && 2==3) {
    console.log("allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}