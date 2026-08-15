// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreateDate = new Date (2001, 6, 5, 2, 0, 12)
// console.log(myCreateDate.toLocaleString());

let anotherDate = new Date ("2003-12-07");
// console.log(anotherDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

console.log((Math.floor(Date.now()/1000)));

let newDate = new Date();
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long",
})


