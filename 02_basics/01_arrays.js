// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "thor"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice, splice

console.log("Original ", myArr);

const myN1 = myArr.slice(1, 3)

console.log("Slice Data:", myN1);
console.log("Original After Slice: ", myArr);


const myN2 = myArr.splice(1, 3)
console.log("Splice Data:", myN2);
console.log("Original After Splice: ", myArr);