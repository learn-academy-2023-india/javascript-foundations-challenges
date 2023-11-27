// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// // // output: [30, 90, 150, 40, 100]
// // input: an array of numbers
// // output: an array of numbers 
// // create a new array - iterate using the map() method
// // // multiply by 10
// const multiplyArr1ByTen = (array) => {
//     return array.map(number => number * 10)
//         return multiplyArr1ByTen
// }
// const multiplyArr1 = multiplyArr1ByTen(arr1)
// console.log(multiplyArr1)
// // --> [ 30, 90, 150, 40, 100 ]

// // Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
// const arr1 = [3, 9, 15, 4, 10]
// // // output: [1.5, 4.5, 7.5, 2, 5]
// // input: an array of numbers
// // output: an array of numbers 
// // create a new array - iterate using the map() method
// // divide by 2
// const divideArr1ByTwo = (array) => {
//     return array.map(number => number / 2)
//         return divideArr1ByTwo
// }
// const divideArr1 = divideArr1ByTwo(arr1)
// console.log(divideArr1)
// // --> [ 1.5, 4.5, 7.5, 2, 5 ]

// // Create a function that takes in an array of numbers and returns an array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// // // output: [7, 3, 5, 13, -9]
// // input: an array of numbers
// // output: an array of numbers 
// // create a new array - iterate using the filter() method
// // modulo % 2 !== 0
// const oddOnly = (array) => {
//     return array.filter(number => number % 2 !== 0)
//         return oddOnly
// }
// const oddOnlyArr2 = oddOnly(arr2)
// console.log(oddOnlyArr2)
// // --> [ 7, 3, 5, 13, -9 ]

// // Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
// const pumbaa =
//   "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// // // output: ["a", "wonderful", "ain't", "passing", "craze"]
// // input: a string
// // output: an array of strings 
// // Split the string into an array of strings
// // create a new array with strings of odd length - iterate using the filter() method
// // modulo % 2 !== 0

// const oddStringOnly = (str1) => {
//     return str1.split(" ").filter(string => string.length % 2 !== 0)
// }
// const oddOnlyPumbaa = oddStringOnly(pumbaa)
// console.log(oddOnlyPumbaa)
// --> [ 'a', 'wonderful', "ain't", 'passing', 'craze' ]

// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"
// input: an array of numbers and letters
// output: a string of letters
// create a new array with strings of odd length - iterate using the filter() method 
// use typeof

const getLetters = (array) => {
    return array.filter(letter => typeof letter === "string").join("")
}
const stringLetter = getLetters(comboArr)
console.log(stringLetter)
// --> ["nicework"]

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]
// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
// const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"
// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
// const stringOfNumbers = "4574328"
// // output: [4, 5, 7, 4, 3, 2, 8]
// 🏔 Stretch Goals
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.
// const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]
// // output: "yo!"
