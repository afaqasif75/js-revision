// const tinderUser = new Object()  // -singleton object

const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Afaq"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUSer =  {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Afaq",
            lastname: "Asif"
        }
    }

}

// console.log(regularUSer.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b" }
const obj3 = {5: "a", 6: "b" }

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


const users = [
    {
        id:1,
        email: "a@ga.com"
    },
    {
        id:2,
        email: "b@ga.com"
    },
    {
        id:3,
        email: "c@ga.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true
// console.log(tinderUser.hasOwnProperty('id')); // true
// console.log(tinderUser.hasOwnProperty('email')); // false

//object destructuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh" 
}

//course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

// const navbar = ({company}) =>{

// }

// navbar(company = "Youtube")  
// This is an example of object destructuring in Reactjs


// --------------------------API-------------------------------
// API : apna kaam kisi aur pe daal dena API ko kehty :P
// restaurant jana hai tou apny bs order krna hai baki kaam woh dekhaingy

// This is JSON(JavaScript Object Notation) format its like object with both key-value as string datatype
// {
//     "name": "Afaq",
//     "courseName": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]