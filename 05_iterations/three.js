// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    // console.log(i);
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}


const myObject = {
    game1: 'NFS',
    game2: 'spiderman',
    game3: 'COD'
}

// for (const [key, value] of myObject) {
//     console.log(key, value);
// }