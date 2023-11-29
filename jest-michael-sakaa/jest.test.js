// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// describe("work", () => {
//         it("is a function that returns drink coffee if you are tired and keep working if you are not tired", () => {
        //   expect(work("tired")).toEqual("drink coffee")
        //   expect(work("not tired")).toEqual("keep working")
//         })
//       })
      
    // --> ReferenceError: work is not defined

    // Create the function that will make the test pass.

    //   const work = (string) => {
    //     if(string === "tired"){
    //       return "drink coffee"
    //     } else {
    //       return "keep working"
    //     }
    //   }
// Create the function that will make the test pass.

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// describe("life", () => {
//     it("Write the test for a function that returns relax if you are stressed and keep going if you are not stressed", () => {
//       expect(life("stressed")).toEqual("relax")
//       expect(life("not stressed")).toEqual("keep going")
//     })
//   })
// // Create the function that will make the test pass.

//   const life = (string) => {
//     if(string === "stressed"){
//       return "relax"
//     } else {
//       return "keep going"
//     }
//   }

// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("money", () => {
    it("Write the test for a function that returns in budget if a price is lower than $300", () => {
    expect(money(300)).toEqual("out of budget")
    expect(money(200)).toEqual("in budget")
    expect(money(400)).toEqual("out of budget")
    })
  })

// Create the function that will make the test pass.

const money = (number) => {
    if(number < 300){
      return "in budget"
    } 
    else{

   return "out of budget"
  }}


// Write the test for a function that takes in two numbers and returns the smaller number.
describe("littleBank", () => {
    it("Write the test for a function that takes in two numbers and returns the smaller number", () => {
    expect(littleBank(10,20)).toEqual(10)
    expect(littleBank(1,5)).toEqual(1)
    expect(littleBank(50,50)).toEqual("same")
    })
  })

// Create the function that will make the test pass.

const littleBank = (a,b) => {
    if(a < b){
    return a
}
    else if (b < a){
    return b    
    }
    else {
   return "same"
  }}

// Write the test for a function that takes in one numbers and returns whether the number is odd.

describe ("oddOnly", () => {
    it ("Write the test for a function that takes in one numbers and returns whether the number is odd", () => {
    expect (oddOnly(20)).toEqual("not odd") 
    expect (oddOnly(31)).toEqual ("odd")
    })
    })

// Create the function that will make the test pass.
const oddOnly = (number) => {
    if(number % 2 === 0){
        return "not odd"
    }
        else {
            return "odd"
        }}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.
