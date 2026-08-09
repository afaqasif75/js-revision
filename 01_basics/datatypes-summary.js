// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// null means empty
// undefined means not yet assigned
// Symbol datatype is used to make unique variables though they have same values



const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 35246545613456364n


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraaj", "doga"];

let myObj = {
    name: "Afaq",
    age: 26,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof heros); // object
// console.log(typeof myObj); // object
// console.log(typeof myFunction); // object function



//=================================================================

// Stack (Primitive), Heap (Non-Primitive)


//Note: In stack we get copy but in heap we get the reference of original value

let myYoutubename = "Afaq & Tazeem"

let anothername = myYoutubename

anothername = "Afaq Asif"

// console.log(myYoutubename);
// console.log(anothername);


let user1 = {
    email: "user@google.com",
    nayapayy: "user@nayapay"
}

let user2 = user1;
user1.email = "afaq@gmail.com"

// console.log(user1.email);
// console.log(user2.email);
