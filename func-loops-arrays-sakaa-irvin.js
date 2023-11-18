// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]

  const mult3 = (array) => {
    let testArr1 = []
     for (let i = 0; i < array.length; i++) {
      testArr1.push(array[i] * 3)
     }
     return testArr1
 }
  
   console.log(mult3(testArr1))
  // Write a function that takes in an array of numbers and returns a new array with only odd numbers.

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

const onlyOdd = (array) => {
  let testArr2 = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      testArr2.push(array[i])
    }
  }
  return testArr2
}

console.log(onlyOdd(testArr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

 const comboArr = (mixedArr) => {
  let mixedArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false]
  for(let happyArr = 0; < mixedArr.length; happyArr++)
  
  return "nicework"
 }
console.log(typeof comboArr.length)
// // output: nicework

