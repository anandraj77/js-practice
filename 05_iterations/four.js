const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`value of key ${key} is ${myObject[key]}`);
}

const programing = ["js", "ruby", "java", "cpp"]

for (const key in programing) {
    // console.log(programing[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('US', "America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    // console.log(map[key]);                // iteration wont work on map
}

for (let i = 0; i < map.length; i++) {
    const element = map[i];
    // console.log(element);                 // iteration wont work on map
}