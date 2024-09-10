let user = {
    firstName: "Anand",
    lastNameL: "Raj",
    printFullName: function (){
        console.log(this.firstName + " " + this.lastNameL);       
    }
}
// user.printFullName();

let user2 = {
    firstName: "Sachin",
    lastNameL: "Tendulkar"
    // dont copy printFullName method again and again
}
// function borrowing
// user.printFullName.call(user2)


// Rather use like this (dont write method in a object for all other objects)
let user3 = {
    firstName: "Dugga",
    lastNameL: "Raj",
}
let user4 = {
    firstName: "Sachin",
    lastNameL: "Tichkule"
}
let printFullName2  = function (hometown, state){
    console.log(this.firstName + " " + this.lastNameL + " from " + hometown + " , " + state);         // A common method for all the users
}
// printFullName2.call(user3, "Patna", "Bihar")
// printFullName2.call(user4, "Kathmandu", "Nepal")



// apply method

// printFullName2.apply(user3, ["Patna", "Bihar"])

// bind method
let printmyName = printFullName2.bind(user3, "Mumbai", "Maharashtra")
printmyName()
