// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.
describe("work", () => {
    it("is a function that returns drink coffee if you are tired and keep working if you are not tired", () => {
      expect(work("tired")).toEqual("drink coffee")
      expect(work("not tired")).toEqual("keep working")
    })
  })
  const work = (string) => {
    if(string === "tired"){
      return "drink coffee"
    } else {
      return "keep working"
    }
  }
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.
describe("stress", () => {
    it("is a function that returns relax if you are stressed and keep going if you are not stressed.", () => {
      expect(stress("stressed")).toEqual("relax")
      expect(stress("not stressed")).toEqual("keep going")
    })
  })
  const stress = (string) => {
    if(string === "stressed"){
      return "relax"
    } else {
      return "keep going"
    }
  }

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.
describe("budget", () => {
    it("is a function that returns in budget if a price is lower than $300.", () => {
      expect(budget(200)).toEqual("in budget")
      expect(budget(400)).toEqual("out of budget")
      expect(budget(300)).toEqual("out of budget")
    })
  })
  const budget = (item) => {
    if(item < 300){
      return "in budget"
    } else {
      return "out of budget"
    }
  }

// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.
describe("smallerNum", () => {
    it("is a function that takes in two numbers and returns the smaller number.", () => {
      expect(smallerNum(2, 3)).toEqual(2)
      expect(smallerNum(5, 3)).toEqual(3)
    })
  })
  const smallerNum = (a, b) => {
    if(a < b){
      return a
    } else {
      return b
    }
  }

// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.
describe("oddNum", () => {
    it("is a function that takes in one numbers and returns whether the number is odd.", () => {
      expect(oddNum(2)).toEqual("not odd")
      expect(oddNum(3)).toEqual("odd")
    })
  })
  const oddNum = (number) => {
    if( number % 2 !== 0){
      return "odd"
    } else {
      return "not odd"
    }
  }

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.
describe("fruit", () => {
    it("is a function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape.", () => {
      expect(fruit("banana")).toEqual("yellow")
      expect(fruit("apple")).toEqual("red")
      expect(fruit("grape")).toEqual("purple")
    })
  })
  const fruit = (bestFruit) => {
    if( bestFruit === "apple")
      return "red"
    else if( bestFruit === "banana")
      return "yellow"
    else if( bestFruit === "grape")
      return "purple"
    else {
        return null
    }
    }

// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.
describe("rick", () => {
    it("is a function called rick that returns Morty.", () => {
      expect(rick()).toEqual("Morty")
    })
  })
  const rick = () => {
    return "Morty"
  }

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.
describe("greeter", (str) => {
    it("is a function called greeter that takes a name as an argument and returns a greeting with that name to the screen", () => {
      expect(greeter("Brandon")).toEqual("Hello, Brandon!")
    })
  })
  const greeter = (str) => {
    return `Hello, ${str}!`
  }

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.
describe("oddOrEven", () => {
    it("is a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.", () => {
      expect(oddOrEven(2)).toEqual("even")
      expect(oddOrEven(3)).toEqual("odd")
      expect(oddOrEven(1.5)).toEqual("it's not an integer")
    })
  })
  const oddOrEven = (number) => {
    if( number % 2 === 1){
      return "odd"
    } else if( number % 2 === 0)
      return "even"
    else {
        return "it's not an integer"
    }
  }

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.
describe("doubler", () => {
    it("is a function called doubler that takes a number and returns the result of the number multiplied by 2.", () => {
      expect(doubler(2)).toEqual(4)
    })
  })
  const doubler = (number) => {
    return number * 2
  }

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.
describe("multiply", () => {
    it("is a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.", () => {
      expect(multiply(2, 3)).toEqual(6)
      expect(multiply(6, 4)).toEqual(24)
    })
  })
  const multiply = (a, b) => {
    return a * b
  }

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
describe("divisbleBy", () => {
    it("is a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs 10 is evenly divisible by 5.", () => {
      expect(divisbleBy(10, 5)).toEqual("10 is evenly divisible by 5")
      expect(divisbleBy(9, 3)).toEqual("9 is evenly divisible by 3")
      expect(divisbleBy(5, 3)).toEqual("5 is not evenly divisible by 3")
    })
  })
  const divisbleBy = (a, b) => {
    if(a % b === 0)
    return `${a} is evenly divisible by ${b}`
    else {
        return `${a} is not evenly divisible by ${b}`
    }
  }

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.
describe("fizzbuzz", () => {
    it("is a function called fizzbuzz. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.", () => {
      expect(fizzbuzz(3)).toEqual("fizz")
      expect(fizzbuzz(5)).toEqual("buzz")
      expect(fizzbuzz(15)).toEqual("fizzbuzz")
      expect(fizzbuzz(8)).toEqual(8)
    })
  })
  const fizzbuzz = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return "fizzbuzz";
    } else if (number % 3 === 0) {
      return "fizz";
    } else if (number % 5 === 0) {
      return "buzz";
    } else {
      return number;
    }
  }