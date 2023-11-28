// 💻 Challenges

// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]

// // output: [30, 90, 150, 40, 100]


// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
//
 const arr1 = [3, 9, 15, 4, 10]

const divided2 = (array) => {
    return array.map ((value) => value / 2)
}
console.log(divided2(arr1))
// // output: [1.5, 4.5, 7.5, 2, 5]

// Create a function that takes in an array of numbers and returns an array with only odd numbers.

const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]


const onlyOdd = (array) => {
    return array.filter ((value) => value % 2 !== 0)
}
console.log(onlyOdd(arr2))
// // output: [7, 3, 5, 13, -9]

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.

const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"

const filterWordsByLength = (oddNames) =>  {
    const words = oddNames.split(" ")
    const oddLengthWords = words.filter(word => word.length % 2 !==0) 
    return oddLengthWords;  
}
// const result = filterWordsByLength(pumbaa)
// console.log(result)
// // output: ["a", "wonderful", "ain't", "passing", "craze"]

// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
const filterNumbers = (letters) =>  {
    const words = letters.join(" ")
    const onlyLetters = words.filter(word => typeof words === "string") 
    return onlyLetters;  
}
const result = filterNumbers (comboArr)
console.log(result)

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
