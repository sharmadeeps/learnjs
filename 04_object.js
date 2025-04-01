//Singleton (constructor)

// const tinderuser = new Object()

const tinderuser = {}

tinderuser.id = "123"
tinderuser.name = "dipendra"
tinderuser.isLoggedIn = false


// console.log(tinderuser);

const regularUser = {
    email: "someuser@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Dipendra",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser.fullname);

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "deeps@gmail.com",
    },
    {
        id: 1,
        email: "deeps@gmail.com",
    }
]

// console.log(users[1].email);

// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "Js in hindi",
    price: "999",
    coourseInstructor: "Hitesh"
}

const {coourseInstructor: instructor} = course

// console.log(coourseInstructor);

// console.log(instructor);

// {
//     "name": "Dipendra",
//     "courseName": "JS in hindi",
//     "price": "free",
// }