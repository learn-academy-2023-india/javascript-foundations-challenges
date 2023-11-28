//Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
//const arr1 = [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]
// const arr1 = [3, 9, 15, 4, 10]

// const multiplier = (arr1) => {
//   return arr1.map((value) => value * 10)
// }
//console.log(multiplier(arr1))

// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
//  const arr2 = [3, 9, 15, 4, 10]
//  output: [1.5, 4.5, 7.5, 2, 5]
// const divided = (arr1) => {
//     return arr2.map((value) => value / 2)
//   }
//   console.log(divided(arr2))

// Create a function that takes in an array of numbers and returns an array with only odd numbers.
//  const array = [2, 7, 3, 5, 8, 10, 13, -9]
// output: [7, 3, 5, 13, -9]
// const onlyOdd = (array) => {
//     let newArr = []
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] % 2 !== 0) {
//         newArr.push(array[i])
//       }
//     }
//     return newArr
//   }
//   console.log(onlyOdd(array))

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.

// output: ["a", "wonderful", "ain't", "passing", "craze"]
// const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"

// const onlyOddChar = (pumbaa) => {
//     const newArray = pumbaa.split(' ')
//     return newArray.filter((str, index) => {
//         return str.length % 2 !== 0
//     })
// }
// console.log(onlyOddChar(pumbaa))

// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"
// declare a function that takes in a array
const numLetString = (comboArr) => {
    //
    return comboArr.filter(value => {
      return typeof value === "string"
    }).join('')
}
console.log(numLetString([7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]))
