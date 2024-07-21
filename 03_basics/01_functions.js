
// Basic Example
function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
}
// sayMyName();


// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// addTwoNumbers(3,4);
// addTwoNumbers(3, "4");
// addTwoNumbers(3,null);

function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    // return result;

    return (num1+num2);
}

const result = addTwoNumbers(3, 4);

// console.log("Result:" , result);

function loginUserMessage(username = "Sam") {
    if(!username){
        console.log("Please Enter User Name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());
// console.log(loginUserMessage("hitesh"));


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 6400, 3200));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "Sam",
    price: 399
});

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 10, 600, 300]));