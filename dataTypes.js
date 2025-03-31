"use strict"; //teat all js code as newer version

// alert(3 + 3)  // we are using node js, not browser

//console.log(3 + 3)

let name = "Dipendra"
let age = 18
let isLoggedIn = false


// number => 2 to tower 53
// bigint 
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object 

// console.log( typeof null )    //object
// console.log( typeof undefined )   // undefined




//Primitive 

// 7 type : String, Number, Boolean, null, 
// undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


//Reference (Non primitive)

//Array, Objects, Functions

const heros = ["saktiman", "naagraj", "doga"];

let myObj = {
    name: "dipendra",
    age: 32,
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof myObj);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let myName = "Dipendra"
anothername = "Sharma"

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "dipendra@gmail.com"

