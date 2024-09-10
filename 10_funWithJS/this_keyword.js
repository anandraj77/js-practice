"use strict";

// this in global space

console.log(this); // globalObject

// this in a function

function x() {
    // this value depends on strict / non strict mode
    console.log(this);   
}
x();  // undefined


// this inside non-strict mode - (this substitution)

// If the vlaue of this keyword is undefined or null, then
// this keyword will be replaced with globalObject
// only in non strict mode

// this keyword value depends on how the function is called (window)
x();  // undefined
window.x();

// this keyword inside a object's method

const obj = {
    a: 10,
    x: function() {
        console.log(this);        
    },
}
obj.x();


// call apply bind methods (sharing methods)

const student = {
    name: "anand",
    printName: function (){
        console.log(this.name);       
    }
}
student.printName()

const student2 = {
    name: "Kajal",
}   

student.printName.call(student2)

// this inside arrow function
const obj2 = {
    a: 10,
    x: () => {
        console.log(this);        
    },
}
obj2.x();

// this inside nested arrow function
const obj3 = {
    a: 10,
    x: function () {
        // enclosing lexical context
        const y = () => {
            console.log(this);  
        }    
        y();  
    },
}
obj2.x();

// this inside DOM elemnts => The value is reference to the HTML element