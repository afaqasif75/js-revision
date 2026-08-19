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

 const obj1 = {
    1: "a",
    2: "b"
 }

 const obj2 = {
    3: "a",
    4: "b"
 }

