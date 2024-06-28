const str1 = "xyz"
const str2 = 12
const sumOf = str1 + str2

// console.log(sumOf);
// console.log(typeof(sumOf));

const name = "Anand"
const repoCount = 50

// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);



const gameName = new String('chemistry')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('d'));

const NewString = gameName.substring(0, 5)
// console.log(NewString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const NewStringOne = "    hitesh    "
// console.log(NewStringOne);
// console.log(NewStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))
// console.log(url.includes('hitesh'));
// console.log(url.includes('anand'));


const dashConvertArray = "anand-raj-com"
console.log(dashConvertArray.split("-"));
