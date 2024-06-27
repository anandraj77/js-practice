// 1. Primitive or Non Reference type

// --> 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
// console.log(typeof(userEmail));

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);




// 2. Non Primitive or Reference type

// --> Array, Objects, Functions

// Arrays
const heros = ["shaktiman", "naagraj", "doga"]

// Objects
let myObj = {
    name: "Anand",
    age: 22
}

// Functions
const myFunction = function() {
    console.log("hello world");
}
// myFunction()


console.log(typeof(myFunction));