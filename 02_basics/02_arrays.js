const marvelHeroes = ['thor', 'ironman', 'spiderman']
const dcHeroes = ['superman', 'flash', 'batman']

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][2]);

// marvelHeroes.concat(dcHeroes);

// Note: Push() just pushes the whole array into the array 

const allHeroes = marvelHeroes.concat(dcHeroes)
// Concat() serves the solution for this problem, it gives a new arr but we jave to store into a new arr 
// console.log(allHeroes);

const allNewHeroes = [...marvelHeroes, ...dcHeroes]
// spread operator ...[] is the best to use in this problem
// console.log(allNewHeroes);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArr = anotherArr.flat(Infinity)
// console.log(realAnotherArr);


// console.log(Array.isArray("Afaq"))
// isArray() checks that if the given data is array or not 

// console.log(Array.from("Afaq"))
// converts the given data to array

// console.log(Array.from({name: "Afaq"})) 
// return empty [] because it ask to make an array of keys or values

let score1 = 100;
let score2 = 200;
let score3 = 300;

const myScore = Array.of(score1, score2, score3)
console.log(myScore)