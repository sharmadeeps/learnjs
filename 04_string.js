const name = "dipendra"
const repoCount = 50

//console.log(`Hello my name is ${name} and my repo is ${repoCount}`);

const gameName = new String('dipendra sharma')

//console.log(gameName[0]);

// console.log(gameName.__proto__);


//console.log(gameName.lenght);
// console.log(gameName.charAt(3));

// console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4)

// console.log(newString);  //it will trim string from the range 0 to 4

const anotherString = gameName.slice(-8, 4)

const stringOne= "    Dipendra   "
console.log(stringOne);
console.log(stringOne.trim());      // trim()  will remove all the white spaces from both the end

const url = "https://barjumun.gov.np/dipendra%20sharma"

console.log(url.replace('%20', '-'));  // it will replace white space in url with '-'

console.log(url.includes('barju'));  // it will find the barju in url

console.log(gameName.split());


