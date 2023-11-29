// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

    // describe('go', () => {
    //     it('a function that returns relax if you are stressed and keep going if you are not stressed', () => {
    //       expect(go('stressed')).toEqual('chill bro')
    //       expect(go('not stressed')).toEqual('keep working')
    //     })
    //   })

    //   const go = (string) => {
    //     if(string === 'stressed'){
    //         return 'chill bro'
    //     } else {
    //         return 'keep working'
    //     }
    //   }

// Write the test for a function that returns "in budget" if a price is lower than $300.

    // describe('money', () => {
    //     it('returns in budget if a price is lower than $300', () => {
    //       expect(money('$300')).toEqual('in budget')
    //       // expect(money('>$300')).toEqual('get a job')
    //     })
    //   })

    //   const money = (string) => {
    //     if(string === '$300' ){
    //       return "in budget"
    //     } 
        // else {
        //   return "get a job"
        // }
      //}

// Write the test for a function that takes in two numbers and returns the smaller number
    // describe('greater', () => {
    //     it('takes in two numbers and returns the smaller number', () => {
    //       expect(greater(42, 96)).toEqual(42)
    //       expect(greater(54, 999)).toEqual(54)
    //     })
    //   })
      
    //   const greater = (numOne, numTwo) => {
    //     if(numOne < numTwo){
    //       return numOne
    //     } else {
    //       return numTwo
    //     }
    //   }

// Write the test for a function that takes in one numbers and returns whether the number is odd
    // describe("numTest", () => {
    //     it("is a function that takes in one numbers and returns whether the number is odd.", () => {
    //       expect(numTest(7)).toEqual("odd")
    //     })
    //   })
    //   const numTest = (number) => {
    //     if(number % 2 !== 0){
    //       return "odd"
    //     } else {
    //       return "even"
    //     }
    //   }

//Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
    
// describe('fruit', () => {
//         it('takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape ', () => {
//           expect(fruit('banana')).toEqual('yellow')
//           expect(fruit('apple')).toEqual('red')
//           expect(fruit('grape')).toEqual('purple')
//         })
//       })
      
//       const fruit = (kindOffruit) => {
//         if(kindOffruit === 'banana'){
//           return 'yellow'
//         } else if (kindOffruit === 'apple') {
//           return 'red'
//         } else if (kindOffruit === 'grape'){
//             return 'purple'
//         }
//       }

// Write the test for a function called rick that returns "Morty".

    //   describe('rick', () => {
    //     it('returns Morty', () => {
    //       expect(rick()).toEqual('Morty')
    //     })
    //   })
      
    //   const rick = () => {
    //       return 'Morty'
    //     }

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen

    // describe('greeter', () => {
    //     it('takes a name as an argument and returns a greeting with that name to the screen', () => {
    //       expect(greeter('MaryJane')).toEqual(`Hello, MaryJane`)
    //     })
    //   })
      
    //   const greeter = (name) => {
    //     return `Hello, ${name}`
    //   }

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even

// describe('oddEven', () => {
//     it('takes a number as an argument and logs whether the number is odd or even', () => {
//       expect(oddEven(1)).toEqual('odd')
//       expect(work(2)).toEqual('even')
//     })
//   })
  
//   const oddEven = (number) => {
//     if(number % 2 === 0){
//       return 'even'
//     } else {
//       return 'odd'
//     }
//   }

  // Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// describe("doubler", () =>
// it("takes a number and returns the result of the number multiplied by 2.", () => {
// expect(doubler(1)).toEqual(2)
// }))
// // Create the function that will make the test pass.
// const doubler = (number) => {
// return number * 2
// }

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// describe("multiply", () =>
//     it("takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.", () => {
//     expect(multiply(2,3)).toEqual(6)
// }))

// const multiply = (num1, num2) => {
//     return num1 * num2

  //Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// describe("divisibleBy", () =>
//     it("returns whether the first number is evenly divisible by the second.", () => {
//         expect(divisibleBy(10,5)).toEqual("10 is evenly divisible by 5.")
//     }))

// const divisibleBy = (num1, num2) => {
//     if(num1 % num2 === 0){
//         return `${num1} is evenly divisible by ${num2}.`
//     }
// }

//Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
//     describe("fizzBuzz", () =>
//     it("will replace a number that is a multiple of 3 with the word fizz.", () => {
//         expect(fizzBuzz(3)).toEqual("fizz")}))
//     it("will replace a number that is a multiple of 5 with the word buzz.", () => {
//         expect(fizzBuzz(5)).toEqual("buzz")})
//     it("will replace a number that is a multiple of 3 and 5 with the word fizzbuzz", () => {
//         expect(fizzBuzz(15)).toEqual("fizzbuzz")
//     })

//     const fizzBuzz = (num) => {
//         if(num % 3 === 0 && num % 5 === 0){
//         return "fizzbuzz"
//     } else if(num % 3 === 0){
//         return "fizz"
//     } else if(num % 5 ===0){
//         return "buzz"
//     }
// }

