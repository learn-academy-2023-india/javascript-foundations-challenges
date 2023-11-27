// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// input: 4 (number) - array of number 4
// output: 4 * 3 - array of number 12
// output: [9, 27, 45, 12, 30]
const testArr1 = [3, 9, 15, 4, 10] 
const multiplyByThree = (array) => {
    let resultArray = []
    for(let i = 0; i < array.length; i++) {
        resultArray.push(array[i] * 3)
    }
    return resultArray
}
console.log(multiplyByThree(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// input: [0, 2, -7, 3, 5, 8, 10, 13] - array of numbers
// output: [-7, 3, 5, 13]
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
const onlyOdd = (array) => {
    let resultArray = []
    for(let i = 0; i < array.length; i++ ) {
        if(array[i] % 2 !== 0) {
            resultArray.push(array[i])
        }
    }
    return resultArray
    }

console.log(onlyOdd(testArr2))
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// input: array of numbers and letters
// output: "nicework"
const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]
const onlyLetters = (array) => {

    let resultArray = []
    for(let i = 0; i < array.length; i++) {
        if(typeof array[i] === "string") {
            resultArray.push(array[i])
        }
    }
    return resultArray.join("")
}
console.log(onlyLetters(comboArr))
// Create a function that takes in an array of numbers and returns the sum.
// input: array of numbers
// output: 10
// output: 0 
const addThese1 = [1, 2, 3, 4]
const calculateSum = (array) => {
    let result = 0
    for(let i = 0; i < array.length; i++) {
        // result = result + array[i]
        result += array[i] 
    }
    return result
}
console.log(calculateSum(addThese1))

// Create a function that takes in an array of numbers and returns the index of the largest number.
// input: array of numbers
// output: 1 - index of the largest number
const indexHighestNumber = [1, 4, 2, 3]
const addThese2 = []
const findIndex = (array) => {
    let max = 0
    let index = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] > max) {
            max = array[i]
            index = i
        }
    }
    // return max
    return index
}
console.log(findIndex(indexHighestNumber))

// 🏔 Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
// input: take two arrays of numbers
// output: [3, 7, 10, 5, 4, 8, 2, 1]
const arr1 = [3, 7, 10, 5, 4, 3, 3]
const arr2 = [7, 8, 2, 3, 1, 5, 4]
const findUnique = (array1, array2) => {
    let resultArray = []
    for(let i = 0; i < array1.length; i++){
        // ! - checks if the current element is not in the resultArray
        if(!resultArray.includes(array1[i])){
            resultArray.push(array1[i])
        }
    }
    for(let i = 0; i < array2.length; i++){
        if(!resultArray.includes(array2[i])){
            resultArray.push(array2[i])
        }
    }
    return resultArray
}
console.log(findUnique(arr1, arr2))
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// input: two numbers
// output: [0, 0, 0, 0, 0, 0]
// const arrayLength = 6
// const arrayValue = 0
const twoArrays = (num1, num2) => {
    let resultArray = []
    for(let i = num1; i > 0; i--) {
        resultArray.push(num2)
    }
    return resultArray
}
// console.log(twoArrays(arrayLength, arrayValue))
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// input: number
// output: [11, 11, 11, 11] 
    // 1 + 2 + 3 + 4 = 10
//  Add up all the numbers from 1 to the number you passed to the function
// const arrayLength = 4
// const arrayValue = 11
const addUp1 = 4
const addUp2 = 10
const addUp3 = 600
const numSum = (num) => {
    let result = 0
    for(let i = 0; i <= num; i++) {
        result += i 
    }
    return result
}

// console.log(numSum(addUp1))
// output: 10
console.log(numSum(addUp2))
// output: 55
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

console.log(numSum(addUp3))
// output: 180300

// 🏔 Epic Goals
// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.