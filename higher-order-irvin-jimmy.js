// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// const multTen = arr1.map((value) => {
//     return value * 10
// })
// console.log(multTen)
// // output: [30, 90, 150, 40, 100]
// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
//  const arr1 = [3, 9, 15, 4, 10]
//  const divTwo = arr1.map((value) =>{
//     return value / 2
//  })
//  console.log(divTwo)
// // output: [1.5, 4.5, 7.5, 2, 5]
// Create a function that takes in an array of numbers and returns an array with only odd numbers.
//  const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// const onlyOdd = (array) => {
//     return array.filter((value) => value % 2 !== 0)
// }
// console.log(onlyOdd(arr2))
// // output: [7, 3, 5, 13, -9]
// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
// .split to turn string into array
// need an array to push strings into
// iterate through the array and count characters
// need to know the command to show the value of a string
// 
 const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
 const oddLength(string) {
 const words = string.split(" ")
 const oddWords = words.filter(word => word.length % 2 !== 0)
return oddWords
}
console.log(oddLength(pumbaa))
console.log(oddWords)

// // output: ["a", "wonderful", "ain't", "passing", "craze"]
// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"
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
