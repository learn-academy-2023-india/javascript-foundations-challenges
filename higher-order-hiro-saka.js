// const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]
// const multiplier = arr1.map (value => {
//     return value * 10
// })
// console.log (multiplier)

// const arr1 = [3, 9, 15, 4, 10]
// output: [1.5, 4.5, 7.5, 2, 5]
// const divider = arr1.map (value => {
//     return value / 2
// })
// console.log (divider)

// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// // output: [7, 3, 5, 13, -9]
// const oddsOnly = arr2.filter((value,index) => {
//     return value % 2 !== 0
// }
// )
// console.log(oddsOnly)
// // [ 7, 5, 10, -9 ]

// const pumbaa =
//   "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// // output: ["a", "wonderful", "ain't", "passing", "craze"]

// const oddLetters = pumbaa.filter((value,index) => {
//     return index % 2 === 0
// }
// )

// // const oddLetters = (letters) => {
// //     return pumbaa.filter((value,index) => {
// //     return value % 2 !== 0
// // })
// // }

// console.log(oddLetters)

// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

// const onlyStrings = (comboArr) => {
//     return comboArr.filter(value =>{
//     return typeof value === "string"
//     })
// }
// console.log(onlyStrings(comboArr))

const filterArrayValues = [58, "", "abcd", true, null, false, 0]
//need logical &&
//use the bang operator !==
//!== for the output 58, "abcd", true
const filterPrimitive = (array) => {
    return array.filter(value => {
        return value !== false && value !== null && value !== "" && value !== 0
    })
}
console.log(filterPrimitive(filterArrayValues))

