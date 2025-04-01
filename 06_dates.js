let myDate = new Date()
//console.log(myDate.toString());

//console.log(myDate.toTimeString());

//console.log(typeof myDate);

// let myCreateDate = new Date("2025-02-23")

let myCreateDate = new Date("02-23-2025")

// console.log(myCreateDate.toLocaleDateString());  // Here toLocaleDateString() gives yy/mm/dd  formate from given Date("2025-02-23") formate

let newDate =  new Date()

// console.log(newDate.getMonth() + 1);

// `${newDate.getDay()}  and the time`

newDate.toLocaleString('default', {
    weekday: "long",
})

// this is for commit only