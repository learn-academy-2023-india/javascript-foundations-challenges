// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.

// const myArray = [3, 9, 15, 4, 10]

// const multiplier = myArray.map((value) => {
//   return value * 10
// })

// console.log(multiplier)
// // output: [30, 90, 150, 40, 100] Correct !


// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
// const arr1 = [3, 9, 15, 4, 10]

// const myArray = [3, 9, 15, 4, 10]

// const divided = myArray.map((value) => {
//   return value / 2 
// })

// console.log(divided) 

// // output: [1.5, 4.5, 7.5, 2, 5] Correct !

// Create a function that takes in an array of numbers and returns an array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]

// const numbersArray = [2, 7, 3, 5, 8, 10, 13, -9]

// const onlyOdd = (array) => {
//   return array.filter((value) => value % 2 ==! 0)
// }

// console.log(onlyOdd(numbersArray))


// // output: [7, 3, 5, 13, -9] 95% Correct ! [Could not get -9 to populate ]

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.

// const pumbaa =
//   "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"

// create a function that returns only the values at the odd indexes
// const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"


// const getOnlyOddCharacters = (array) => {
    
//     const newArr = array.split(" ")

//     return newArr.filter((value) =>  {
//         return value.length % 2 !==0
   
//   })
// }

// console.log(getOnlyOddCharacters(pumbaa))

// // output: ["a", "wonderful", "ain't", "passing", "craze"] Correct !


// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

//Psuedo code: Create a const with the alphanumeric value
// create an array with both contents
// Use a typeof operator
// Have it return just a string 
// console log and test 


const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

const   = (array) => {
    
    const newArr = array.split(" ")

    return newArr.filter((value) =>  {
        return value.length 
   
  })
}

console.log(typeof  (comboArr))



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
