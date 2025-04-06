
// singleton (from constructors)


// object literals

const mySymbol = Symbol("key1")  //Symbol Declearation

const jsUser = {
    name: "dipedra",
    [mySymbol]: "mykey1",   // Symbol call
    age: "32",
    location: "Biratnagar",
    email: "deeps@gmail.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySymbol]);      //Symbol use , the output will be mykey1

jsUser.email = "dipendra@gmail.com"
//console.log(jsUser["email"]);
//Object.freeze(jsUser)

jsUser.email = "deeps@google.com"
console.log(jsUser["email"]);

// console.log(jsUser);

jsUser.greating = function() {
    console.log("Hello JS users");
}

jsUser.greatingTwo = function() {
    console.log(`Hellow JS user, ${this.name}`);
    
}

console.log(jsUser.greating());
console.log(jsUser.greatingTwo());



