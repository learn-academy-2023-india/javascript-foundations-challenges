// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("work", () => {
    it("is a function that returns 'drink coffee' if you are tired and 'keep working' if you are not tired.", () => {
      expect(work("yes")).toEqual("drink coffee")
      expect(work("no")).toEqual("keep working")
    })
  })

  const work = (string) => {
    if(string === "yes"){
        return "drink coffee"
    } else{
        return "keep working"
    }
  }
  

// Create the function that will make the test pass.
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("mediation", () => {
  it("is a function that returns 'relax' if you are stressed and 'keep going' if you are not stressed.", () => {
    expect(mediation("I am stressed")).toEqual("relax")
    expect(mediation("I am relaxed")).toEqual("keep going")
  })
})

const mediation = (string) => {
  if(string === "I am stressed"){
      return "relax"
  } else{
      return "keep going"
  }
}
// Create the function that will make the test pass.
// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("price", () => {
  it("is a function that returns 'in budget' if a price is lower than $300.", () => {
    expect(price("250")).toEqual("in budget")
  })
})

const price = (number) => {
  if (number < 300) {
    return "in budget"
} else {
    return "out of budget"
}
}

// Create the function that will make the test pass.
// Write the test for a function that takes in two numbers and returns the smaller number.

describe("smallerNumber", () => {
  it("is a function that takes in two numbers and returns the smaller number.", () => {
    const number1 = 15
    const number2 = 20
    expect(smallerNumber(number1, number2)).toEqual(number1)
  })
})

const smallerNumber = (number1, number2) => {
  if (number1 < number2) {
    return number1
} else {
    return number2
}
}

// Create the function that will make the test pass.
// Write the test for a function that takes in one number and returns whether the number is odd.
describe("oddNumber", () => {
  it("is a function that takes in one number and returns whether the number is odd.", () => {
    const number3 = 15
    expect(oddNumber(number3)).toEqual("odd")
  })
})

const oddNumber = (odd) => {
  if (odd % 2 !== 0) {
    return "odd"
} else {
    return "even"
}
}

// Create the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
describe("fruit", () => {
  it("takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape.", () => {
      expect(fruit("banana")).toEqual("yellow") 
      expect(fruit("apple")).toEqual("red")
      expect(fruit("grape")).toEqual("purple")
  })
})
const fruit = (bowlOfFruit) => {
  if(bowlOfFruit === "banana"){
      return "yellow"
  } else if (bowlOfFruit === "apple"){
      return "red"
  } else if (bowlOfFruit === "grape"){
      return "purple"
  }
} 

// Create the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".
describe("cartoon", () => {
  it("is a function called rick that returns 'Morty'.", () => {
      expect(cartoon("rick")).toEqual("Morty") 
  })
})
const cartoon = (newName) => {
  if(newName === "rick"){
      return "Morty"
  }
} 

// Create the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
describe("greeting", () => {
  it("is a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.", () => {
      expect(greeting("IrvinChantel")).toEqual("Hi") 
  })
})
const greeting = (salute) => {
  if(salute === "IrvinChantel"){
      return "Hi"
  }
} 

// Create the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
describe("oddOrEven", () => {
  it("is a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.", () => {
      expect(oddOrEven(3)).toEqual("odd") 
      expect(oddOrEven(4)).toEqual("even") 
      expect(oddOrEven(1.5)).toEqual("It is not an integer") 
  })
})
const oddOrEven = (odd) => {
  if (odd % 2 === 1) {
    return "odd"
} else if (odd % 2 === 0)
  return "even" 
else {
    return "It is not an integer"
} 
}

// Create the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
describe("doubler", () => {
  it("is a function called doubler that takes a number and returns the result of the number multiplied by 2.", () => {
      expect(doubler(3)).toEqual(6) 
  })
})
const doubler = (number) => {
  return number * 2
}

// Create the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
describe("multiply", () => {
  it("is a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.", () => {
      expect(multiply(2, 6)).toEqual(12) 
      expect(multiply(24, 4)).toEqual(96) 
  })
})
const multiply = (number3, number4) => {
  return number3 * number4
}

// Create the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
describe("divisibleBy", () => {
  it("is a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs '10 is evenly divisible by 5'", () => {
      expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5") 
      expect(divisibleBy(24, 6)).toEqual("24 is evenly divisible by 6") 
      expect(divisibleBy(96, 13)).toEqual("96 is not evenly divisible by 13") 
  })
})
const divisibleBy = (number5, number6) => {
  if(number5 % number6 === 0)
  return `${number5} is evenly divisible by ${number6}`
  else {
  return `${number5} is not evenly divisible by ${number6}`
}
}
// Create the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
describe("fizzbuzz", () => {
  it("is a  function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'", () => {
      expect(fizzbuzz(15)).toEqual("FizzBuzz") 
      expect(fizzbuzz(6)).toEqual("Fizz") 
      expect(fizzbuzz(10)).toEqual("Buzz") 
      expect(fizzbuzz(1)).toEqual("number") 
  })
})
const fizzbuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz"
}
else if (number % 3 === 0) {
    return "Fizz"
}
else if (number % 5 === 0) {
    return "Buzz"
}
else {
    return "number"
}
}

// Create the function that will make the test pass.