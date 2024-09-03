class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password() {
        return this.password.toUpperCase()
    }
    set password(value){
        this.password = this.value
    }
}

const anand = new User("anand@google.com", "123")
console.log(anand.password);
