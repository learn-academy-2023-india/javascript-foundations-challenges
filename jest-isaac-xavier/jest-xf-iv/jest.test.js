// 💻 Challenges

// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.
// psuedo:
// if/else function
// input: tired || notTired
// output: return "drink coffee" || "keep working"

describe("areYouTired", () => {
  it("returns either drink coffee or keep working", () => {
    expect(areYouTired("yes")).toEqual("drink coffee")
    expect(areYouTired("no")).toEqual("keep working")
  }) 
})

const areYouTired = (string) => {
  if(string === "yes") {
    return "drink coffee"
  } else if(string === "no") {
    return "keep working"
  }
}
// console.log(areYouTired(yes))
// console.log(areYouTired(no))


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.
describe("areYouStressed", () => {
  it("returns either relax or keep going", () => {
    expect(areYouStressed("yes")).toEqual("relax")
    expect(areYouStressed("no")).toEqual("keep going")
  }) 
})

const areYouStressed = (string) => {
  if(string === "yes") {
    return "relax"
  } else if(string === "no") {
    return "keep going"
  }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.
// income: string of <= $300
// outcome: string of in budget or not in budget
// breakdown: 

describe("withinBudget", (string) => {
  it("returns either in budget or not in budget", () => {
    expect(withinBudget("300")).toEqual("in budget")
    expect(withinBudget("")).toEqual("not in budget")
  }) 
})

const withinBudget = (string) => {
  if(string === "300") {
    return "in budget"
  } else(string !== ""); {
    return "not in budget"
  }
}
// console.log(withinBudget(100))

// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.


// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.


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