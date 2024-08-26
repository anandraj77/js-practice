// Object Literal
const user = {
    username: "Anand",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database")
        console.log(`Username: ${this.username}`)
        console.log(this);
        
    }
}
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);


// Constructor functions
function User(username, loginCount, isLogedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLogedIn = isLogedIn;

    this.greeting = () => {
        console.log(`Welcome ${this.username}`);
        
    }

    // return this
}

const userOne = new User("Anand", 12, true)
const userTwo = new User("Amar", 11, false)

console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);
