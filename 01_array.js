// // array

 const myArr = [0, 1, 2, 3, 4, 5]

//  console.log(myArr[1]);

 const myArr1 = new Array(1, 2, 3, 4)

//  console.log(myArr1[1]);

// myArr.push(6)
// myArr.pop()
// myArr.unshift(4)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()  //it bind and convert it into string

// console.log(newArr);

// console.log(myArr);

//++++++ slice and splice ++++++++++

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log("B ", myArr);
console.log(myn1);

const myn2 = myArr.splice(1, 3)


console.log("C ", myArr);
console.log(myn2);

// A  [ 0, 1, 2, 3, 4, 5 ]
// B  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// C  [ 0, 4, 5 ]
// [ 1, 2, 3 ]