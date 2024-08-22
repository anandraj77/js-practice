const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // Dp calls, cryptography, network
    setTimeout(() => {
        // console.log('Async task is complete')
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    // console.log("promise is consumed")
})

// Another way
new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Async task 2")
        resolve()
    }, 1000);
}).then(() => {
    // console.log("Async 2 resolved")
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    // console.log(user)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "Anand", password: "123" })
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    // console.log(user)
    return user.username
}).then((userName) => {
    // console.log(userName);
}).catch((error) => {
    // console.log(error);  
}).finally(() => {
    // console.log("Finally the promise is resolved or rejected");
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        // console.log(response);
    } catch (error) {
        // console.log(error);
    }
}
consumePromiseFive()


// Using a api request

// async function getAllUser() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     }catch (error){
//         console.log("E: ", error);        
//     }
// }
// getAllUser()


// or
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
})

