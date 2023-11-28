// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("work", () => {
    it("is a function that returns drink coffee if you are tired and keep working if you are not tired", () => {
      expect(work("tired")).toEqual("drink coffee")
      expect(work("not tired")).toEqual("keep working")
    })
  })

// Create the function that will make the test pass.

const work = (string) => {
    if(string === "tired"){
      return "drink coffee"
    } else {
      return "keep working"
    }
  }
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("stressLvl", () => {
    it("is a function the returns relax if you are stressed and keep going if you are not stressed.", () => {
        expect(stressLvl("stressed")).toEqual("relax")
        expect(stressLvl("not stressed")).toEqual("keep going")
    })
})
// Create the function that will make the test pass.
const stressLvl = (string) => {
    if(string === "stressed"){
        return "relax"
    } else {
        return "keep going"
    }
}
// Write the test for a function that returns "in budget" if a price is lower than $300.
describe("budget", () => {
    it("is a function that returns in budget if a price is lower than $300.", () => {
        expect(budget ("")).toEqual("in budget")
    })
})
// Create the function that will make the test pass.
const budget = (price) => {
    if(price < 300){
        return "in budget"
    }
}
// Write the test for a function that takes in two numbers and returns the smaller number.
describe("smolNum", () => {
    it("takes in two numbers and returns the smaller number.", () => {
        expect(smolNum("")).toEqual("")
    })
})
// Create the function that will make the test pass.
const largNum = ("")
const smolNum = () => {
    if(smolNum < largNum){
        return smolNum
    } else { 
        return largNum
    }
}
// Write the test for a function that takes in one numbers and returns whether the number is odd.
describe("oddNums", () => {
    it("takes in one numbers and returns wheter the number is odd.", () => {
        expect(oddNums()).toEqual("odd")
    })
})
// Create the function that will make the test pass.
const oddNums = () => {
    if(oddNums % 2 !== 0){
        return "odd"
    }
}
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
describe("fruit", () => {
    it("takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape.", () => {
        expect(fruit("banana")).toEqual("yellow")
        expect(fruit("apple")).toEqual("red")
        expect(fruit("grape")).toEqual("purple")
    })
})
// Create the function that will make the test pass.
const fruit = (fruitType) => {
    if(fruitType === "banana"){
        return "yellow"
    } else if (fruitType === "apple"){
        return "red"
    } else if (fruitType === "grape"){
        return "purple"
    }
} 
// Write the test for a function called rick that returns "Morty".
describe("rick", () => {
    it("returns Morty", () => {
        expect(rick()).toEqual("Morty")
    })
})
// Create the function that will make the test pass.
const rick = () => {
    return "Morty"
}
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
describe("greeter", () => {
    it("takes a name as an argument and returns a greeting with that name to the screen.", () => {
        expect(greeter("Bob")).toEqual("Hello, Bob.")
    })
})
// Create the function that will make the test pass.
const greeter = (name) => {
    return `Hello, ${name}.`
}
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
describe("oddOrEven", () => {
    it("takes a number as an argument and logs whether the number is odd.", () => {
        expect(oddOrEven(1)).toEqual("odd")})
    it("takes a number as an argument and logs whether the number is even.", () => {
        expect(oddOrEven(2)).toEqual("even")
    })
})
// Create the function that will make the test pass.
const oddOrEven = (number) => {
    if (number % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
describe("doubler", () =>
    it("takes a number and returns the result of the number multiplied by 2.", () => {
    expect(doubler(1)).toEqual(2)
}))
// Create the function that will make the test pass.
const doubler = (number) => {
    return number * 2
}
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
describe("multiply", () =>
    it("takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.", () => {
    expect(multiply(2,3)).toEqual(6)
}))
// Create the function that will make the test pass.
const multiply = (num1, num2) => {
    return num1 * num2
}
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
describe("divisibleBy", () =>
    it("returns whether the first number is evenly divisible by the second.", () => {
        expect(divisibleBy(10,5)).toEqual("10 is evenly divisible by 5.")
    }))
// Create the function that will make the test pass.
const divisibleBy = (num1, num2) => {
    if(num1 % num2 === 0){
        return `${num1} is evenly divisible by ${num2}.`
    }
}
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
describe("fizzBuzz", () => 
    it("will replace a number that is a multiple of 3 with the word fizz.", () => {
        expect(fizzBuzz(3)).toEqual("fizz")}))
    it("will replace a number that is a multiple of 5 with the word buzz.", () => {
        expect(fizzBuzz(5)).toEqual("buzz")})
    it("will replace a number that is a multiple of 3 and 5 with the word fizzbuzz", () => { 
        expect(fizzBuzz(15)).toEqual("fizzbuzz")
    })
// Create the function that will make the test pass.
const fizzBuzz = (num) => {
    if(num % 3 === 0 && num % 5 === 0){
        return "fizzbuzz"
    } else if(num % 3 === 0){
        return "fizz"
    } else if(num % 5 ===0){
        return "buzz"
    }
}