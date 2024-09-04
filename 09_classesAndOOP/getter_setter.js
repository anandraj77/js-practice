class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password() {
        return `${this._password}anand`
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const anand = new User("anand@google.com", "abc")
console.log(anand.password);
console.log(anand.email);
