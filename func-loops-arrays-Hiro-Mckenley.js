// // 💻 Challenges
// // Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// // Don't forget to pseudo code.

// // Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// //input: function which takes array of numbers
// //output: return an array with all numbers multiplied by 3

// const testArr1 = [3, 9, 15, 4, 10]
// const arrayOfNumbers = (array) => {
//     let newArray = []
//     for (let i = 0; i < array.length; i++){
//         newArray.push (array[i] * 3)
//     }
//     return newArray
// }
// // output: [9, 27, 45, 12, 30]
// console.log(arrayOfNumbers(testArr1))

// // Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// //create function that takes in an array of numbers
// //return a new array with only odd numbers
// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// const newFunction =(numbers) => {
//     let newNumbers =[]
//     for (let i = 0; i <= numbers.length; i++){
//         if (numbers[i] % 2 !==0){
//         newNumbers.push(numbers[i])
//     }
//     }   
//     return newNumbers
// }
// // // output: [-7, 3, 5, 13]
// console.log(newFunction(testArr2))

// // Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// //write function which takes an array of numbers and letters
// //use .typeof method
// //return a string with only letters

// const comboArr = [ 7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// const newFunc = (newArr) => {
//     let result = ""
//     for (let i = 0; i < newArr.length; i++) {
//         if (typeof newArr[i] === "string"){
//             result += newArr[i]
//         }
//     }
//     return result
// }
// // // output: "nicework"
// const onlyLetters = newFunc(comboArr)
// console.log(onlyLetters)

// Create a function that takes in an array of numbers and returns the sum.
// const sumArray = (arrNew) => {
//     let sum = 0;
//     for (let i = 0; i < arrNew.length; i++){
//         if (typeof arrNew[i] === "number"){
//             sum += arrNew[i]
//         }
//     }
//     return sum
// }
// const addThese1 = [1, 2, 3, 4]
// const firstOutPut = sumArray(addThese1)
// console.log(firstOutPut)
// /// output: 10
// const addThese2 = []
// const secondOutPut = sumArray(addThese2)
// console.log(secondOutPut)
// // output: 0

// Create a function that takes in an array of numbers and returns the index of the largest number.
const largestNum = (arr) => {
    if ( arr.length === 0){
        return -1
    }
    let largestNum = 0
    for (let i =1; i < arr.length; i++){
        if (arr[i] > arr[largestNum]){
            largestNum = 1
        }
    }
    return largestNum
}
const indexHighestNumber = [1, 4, 2, 3]
const arrayOfNumbers = (largestNum)


console.log(arrayOfNumbers())
// // output: 1
