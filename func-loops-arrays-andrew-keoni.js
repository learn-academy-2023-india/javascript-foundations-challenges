// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const myArr1 = [3, 9, 15, 4, 10]

const mult3 = (array) => {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i] * 3)
  }
  return newArr
}

console.log(mult3(myArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const myArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

const onlyOdd = (array) => {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      newArr.push(array[i])
    }
  }
  return newArr
}

console.log(onlyOdd(myArr2))

// // Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// const comboArr = [
//     7,
//     "n",
//     true,
//     "i",
//     "c",
//     10,
//     "e",
//     -388,
//     "w",
//     3,
//     "o",
//     0,
//     "r",
//     false,
//     "k"
//   ]
// function lettersOnly(arr) {
//     let result=''
//     for (let i = 0; i < arr.length; i++) {
//         if(typeOf arr[i] === 'string') {
//         result += arr[i]
//         }
//     }
//     return result 
// }
// console.log(lettersOnly(comboArr)); //"nice work"

// Create a function that takes in an array of numbers and returns the sum.
//const numbersArray = [1, 2, 3, 4]
//const result = calculateSum(numbersArray);
//console.log(result);


// // Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
