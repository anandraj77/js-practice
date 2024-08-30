let myName = "Anand    "
// let channel = "chai     "

// console.log(myName.trueLength());


let myHeros = ["thor", "spiderman", "ironman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    ironman: "tech",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.anand = function(){
    console.log("anand is present in all objects");
}

Array.prototype.heyAnand = function(){
    console.log("array function is present");
}

// heroPower.anand()
// myHeros.anand()
// myHeros.heyAnand()
// heroPower.heyAnand(). shows error, can't go up the heirarchy


// Inheritence

const User = {
    name: "chai",
    email: "chai@google.com"
}


const Teacher = {
    makeVideo: true,

}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "ChaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"anand".trueLength()
"testing     ".trueLength()