// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// // join() binds the array and changes its datatype to string 

// console.log(myArr);

// console.log(newArr);
// console.log(typeof newArr);

//Slice, Splice
// Slice give a new array and last limit is not included
// Splice changes the original array and last limit is included

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log("B", myn1);

const myn2 = myArr.splice(1,3)
console.log("C", myn2);

console.log("D ", myArr);

