// Singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Anand",
    "full name": "Anand Raj",
    [mySym]: "myKey1",
    age: 18,
    location: "India",
    email: "anand@google.com",
    isLoggedInL: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]); //can't use dot on these types of keys
// console.log(jsUser[mySym]);

jsUser.email = "anandraj@google.com" //change data
// Object.freeze(jsUser) //lock data of object to not change later
jsUser.email = "anandnew@google.com"
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello Js User");
}
jsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
