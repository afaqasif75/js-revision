// singleton
//Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Afaq",
    "full name": "Afaq Asif",
    [mySym]: "mykey1",
    age: 26,
    location: "Rawalpindi",
    email: "afaq@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    greeting: function(){console.log("Hello Js User");},
    greetingTwo: function(){console.log(`Hello, ${this.name}`);}
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser[mySym]);

jsUser.email = 'afaq@chatgpt.com'
// Object.freeze(jsUser)
jsUser.email = 'afaq@microsoft.com'
// console.log(jsUser);

jsUser.greetingThree = function(){
    console.log(`I am defined outside the object parentheseis. And I know your full name is ${this["full name"]}`);
    
}

// console.log(jsUser.greeting)
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());
// console.log(jsUser.greetingThree());

