
function sayMyName() {
    console.log("D");
    console.log("I");
    console.log("P");
    console.log("E");
    console.log("N");
    console.log("D");
    console.log("R");
    console.log("A");
}

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 7)

// console.log("Result: ", result);

function loginUserMessage(username = "admin") {
    if(!username) {
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());


// function calculateCartPrice(...num1) {    // ...num1 rest operator
//     return num1
// }

function calculateCartPrice(val1, val2, ...num1) {    // ...num1 rest operator
    return num1
}

// console.log(calculateCartPrice(300, 400, 500, 700));  // [ 500, 700 ],  here val1 = 300 and val2 = 400 and rest are in the array format

const user = {
    username: "Dipendra",
    price: 1800
}

// function handleObject(anyobject) {
//     // console.log(`Username is ${} and Price is ${}`);
// }

const myNewArray = [200, 300, 400, 700]
function returnSecondValue(gerArray) {
    return gerArray[1]
}

console.log(returnSecondValue(myNewArray));


function toCelsius (fahrenheits) {
    return `${fahrenheits} Fahrenheits is Equials to ${(5/9) * (fahrenheits - 32)}`
}

let a = 77

console.log(toCelsius(77));