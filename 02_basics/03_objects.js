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
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser[mySym]);

jsUser.email = 'afaq@chatgpt.com'
Object.freeze(jsUser)
jsUser.email = 'afaq@microsoft.com'
console.log(jsUser);
