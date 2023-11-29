// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// describe areYouTired
// if (yes) "drink coffee"
// if (no) "keep working"
describe("areYouTired", () => {
    it("returns drink coffee or keep working based on input", () => {
      expect(areYouTired("yes")).toEqual("drink coffee")
      expect(areYouTired("no")).toEqual("keep working")
    })
  })

  
// Create the function that will make the test pass.
const areYouTired = (string) => {
    if (string === "yes") {
        return "drink coffee" // made a mistake with an extra '{'
  } else if (string === "no") {
    return "keep working" 
  }
  }
  

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Describing areYouStressed
// if (yes) "relax"
// if (no "keepgoing")

describe ("areYouStressed", () => {
    it("returns relax or keep working based on input", () => {
        expect (areYouStressed("yes")).toEqual("relax")
        expect (areYouStressed("no")).toEqual("keep going")
    })
})

// Create the function that will make the test pass.
const areYouStressed = (string) => {
    if (string ==="yes"){
        return "relax"
    } else if (string === "no") {
      return "keep going"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Return "in budget" if price is below $300

describe ("budget", () => {
    it("returns in budget if less than $300", () => {
        expect (budget(200)).toEqual("in budget")
        expect (budget(400)).toEqual("outofbudget")
        
    })
})

// Create the function that will make the test pass.
const budget = (price) => {
    if (price < 300){
        return "in budget"
    } else {
        return "outofbudget"
    }
}

// Write the test for a function that takes in two numbers and returns the smaller number.

// creating a function that will give a lower number
describe ("twoNumbers", (a,b) => {
    it ("takes in two numbers and returns as smaller number", () => {
       // expect (twoNumbers("")).toEqual("")
        expect (twoNumbers(42,30)).toEqual(30)
    })
        
})
// Create the function that will make the test pass.
// const otherNumber = ("")
const twoNumbers = (a,b) => {
    if (a < b){
        return a
    } else {
return b
    }
}
// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.

describe ("odd", () => {
    it("function that takes in one numbers and returns whether the number is odd", () => {
        expect (odd(2)).toEqual("not odd")
        expect (odd(3)).toEqual("odd")
        
    })
})

const odd = (numb1) => {
    if (numb1 % 2 !== 0 ){
        return "odd"
    } else {
        return "not odd"
    }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.

describe ("fruit", () => {
    it("function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape", () => {
        expect (banana()).toEqual("yellow")
        expect (apple()).toEqual("red")
        expect (grape()).toEqual("purple")
        
    })
})

const fruit = (apple,banana,grape) => {
    if (fruit === banana){
        return "yellow"
    } else if (fruit === apple) {
        return "red"
      else if (fruit === grape){
        return "purple" 
      }
    }
} // wasn't able to figure out how to add multiple arguements

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