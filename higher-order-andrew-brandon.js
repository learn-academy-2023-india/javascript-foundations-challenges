// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
const arr = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]
const myArrayTimesTen = arr.map(value => {
    return value * 10
})
console.log(myArrayTimesTen)
// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
const arr1 = [3, 9, 15, 4, 10]
// // output: [1.5, 4.5, 7.5, 2, 5]
const myArrayDividedByTwo = arr1.map(value => {
    return value / 2
})
console.log(myArrayDividedByTwo)

// Create a function that takes in an array of numbers and returns an array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// // output: [7, 3, 5, 13, -9]
const onlyOdd = (array) => {
    return array.filter((value) => value%2 !== 0)
}
console.log(onlyOdd(arr2))
// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
const pumbaa =
  "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// // output: ["a", "wonderful", "ain't", "passing", "craze"]

const onlyOddNumberCharacters = (str) => {
    const newArr = str.split(" ")
    return newArr.filter((str) => {
        return str.length %2 !== 0
       
    })
}
console.log(onlyOddNumberCharacters(pumbaa))
//Input: A sentence of string
//Output: Arrays of odd number of characters from the sentence
//Step1: create a function called onlyOddNumberCharacters
//Step2: change string into array
//Step3: using .filter we filter modd number characters from a set of array
//Step4: find length of each character and filter out odd numbers only

//Input:
//Output:
//Step1:

// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"
const stringsOnly = (array) => {
    return array.filter(value => 
        typeof value === 'string'
    )
}
combinedString = stringsOnly(comboArr)
console.log(combinedString.join(''))
//Input: An array of mixed elements
//Output: Only strings
//Step1: Create a function stringOnly
//Step2: Filter out the numbers
//Step3: Return strings with only letters

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]
const newArr = (array) => {
    return array.filter(value =>
        value !== false
        && value !== null
        && value !== 0
        && value !== ""
        )
}
console.log(newArr(filterArrayValues))
//Input: An array of mixed elements
//Output: Any array without false, null, 0 or black values
//Step1: Create a finction named newArr to filter out false, null, 0, or blank values


// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]
const capitalizer = (array) => {
    return array.map((value, index) => {
    
        // return value[0].toLowerCase() + value[1].toUpperCase()  + value[2].toLowerCase()+ value[3].toUpperCase() ...
    })
}
console.log(capitalizer(makesWackyWords))
// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// // output: "jvscrpt s wsm"

// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
const stringOfNumbers = "4574328"
// // output: [4, 5, 7, 4, 3, 2, 8]





// 🏔 Stretch Goals
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
const arr3 = [3, 7, 10, 5, 4, 3]
const arr4 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]

// Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.
const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]
// // output: "yo!"