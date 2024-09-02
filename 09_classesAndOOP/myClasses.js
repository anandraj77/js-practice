// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@google.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUserName());

// behind the scene

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User2.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User2("tea", "tea@google.com", "123")
console.log(tea.encryptPassword());
console.log(tea.changeUserName());