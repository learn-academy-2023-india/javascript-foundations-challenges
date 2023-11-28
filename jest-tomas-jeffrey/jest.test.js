describe("areYouHungry", () => {
    it("returns eat food or keep coding based on input", () => {
      expect(areYouHungry("yes")).toEqual("eat food")
      expect(areYouHungry("no")).toEqual("keep coding")
    })
  })
  
  const areYouHungry = (string) => {
    if (string === "yes") {
      return "eat food"
    } else if (string === "no") {
      return "keep coding" // tests identify typos
    }
  }

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
  const areYouTired = (string) => {
    if (string === "tired") {
      return "drink coffee"
    } else if (string === "not tired") {
      return "keep working" // tests identifies if correct output of areYouTired
    }
  }

// Create the function that will make the test pass.
describe("areYouTired", () => {
    it("returns drink coffee if tired", () => {

      expect(areYouTired("tired")).toEqual("drink coffee")
      expect(areYouTired("not tired")).toEqual("keep working")
    })
  })

// // Create the function that will make the test pass.

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
const areYouStressed = (string) => {
    if (string === "stressed") {
      return "relax"
    } else{
      return "keep going" 
    }
  }


// // Create the function that will make the test pass.
describe("areYouInBudget", () => {
    test("returns in budget if number is less than 300", () => {

      expect(areYouInBudget(299)).toEqual("in budget")
      expect(areYouInBudget(301)).toEqual("not in budget")
    })
  })

// Write the test for a function that returns "in budget" if a price is lower than $300.
const areYouInBudget = (number) => {
    if(number < 300) {
        return "in budget"
    } else {
        return "not in budget"
    }
}


// // Create the function that will make the test pass.
describe("smallerNumber", () => {
    test("returns num1 if num1 is smaller than num2", () => {

      expect(smallerNumber(7, 8)).toEqual(7)
     
    })
  })

// Write the test for a function that takes in two numbers and returns the smaller number.
const smallerNumber = (num1, num2) => {
    if(num1 < num2){
        return num1
    } else {
        return num2
    }
}


// // Create the function that will make the test pass.
describe("oddNumber", () => {
    test("returns odd number", () => {
        expect(oddNumber(3)).toEqual("odd")
    })
    test("returns even number", () => {
        expect(oddNumber(4)).toEqual("even")
    })
})

// Write the test for a function that takes in one numbers and returns whether the number is odd.

const oddNumber = (num) => {
    if(num % 2 === 1){
        return "odd"
    } else {
        return "even"
    }
}


// // Create the function that will make the test pass.
describe("fruitColor", () => {
    test("returns yellow if banana", () => {
        expect(fruitColor("banana")).toEqual("yellow")
    })
    test("returns red if apple", () => {
        expect(fruitColor("apple")).toEqual("red")
    })
    test("returns purple if grape", () => {
        expect(fruitColor("grape")).toEqual("purple")
    })
})


// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
const fruitColor = (string) => {
    if(string === "banana"){
        return "yellow"
    } else if(string === "apple"){
        return "red"
    } else {
        return "purple"
    }
}



// // Create the function that will make the test pass.
describe("rick", () => {
    test("returns Morty if typeof is string", () => {
        expect(rick("y")).toEqual("Morty")
    })
})

// Write the test for a function called rick that returns "Morty".
const rick = (string) => {
    if(typeof string === "string"){
        return "Morty"
    }
}

// Create the function that will make the test pass.
describe("greeter", () => {
    test("returns a greeting when passed a name", () => {
        expect(greeter("Jeff")).toEqual("Hello, Jeff")
    })
})

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
const greeter = (name) => {
    if(typeof name === "string"){
        return `Hello, ${name}`
    }
}



// Create the function that will make the test pass.
describe("oddOrEven", () => {
    test ("returns odd if number is odd", () => {
        expect(oddOrEven(3)).toEqual("odd")
    })
})

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
const oddOrEven = (number) => {
    if(number % 2 !== 0){
        return "odd"
    }else{
        return "even"
    }
}


// Create the function that will make the test pass.
describe("doubler", () => {
    test("returns number multiplied by 2", () => {
        expect(doubler(2)).toEqual(4)
    })
})


// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
const doubler = (number) => {
    return number * 2
}


// Create the function that will make the test pass.
describe("multiply", () => {
    test("returns num1 multiplied by num2", () => {
        expect(multiply(2, 3)).toEqual(6)
    })
})


// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
const multiply = (num1, num2) => {
    return num1 * num2 
}


// Create the function that will make the test pass.
describe("divisibleBy", () => {
    test("returns true if first number is divisible by second number", () => {
        expect(divisibleBy(10, 5)).toEqual(true)
    })
    test("returns false if first number is not divisbile by second number", () => {
        expect(divisibleBy(10, 3)).toEqual(false)
    })
})


// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num1, num2) => {
    return num1 % num2 === 0
}

// Create the function that will make the test pass.
describe("fizzbuzz", () => {
    test("returns fizz if muliple of 3", () => {
        expect(fizzbuzz(3)).toEqual("fizz")
    })
    test("returns buzz if mutlple of 5", () => {
        expect(fizzbuzz(5)).toEqual("buzz")
    })
    test("returns fizzbuzz if multiple of 5 and 3", () => {
        expect(fizzbuzz(15)).toEqual("fizzbuzz")
    })
})



// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".

const fizzbuzz = (number) => {
    if(number % 3 === 0 && number % 5 === 0){
        return "fizzbuzz"
    }else if(number % 3 === 0){
        return "fizz"
    }else if(number % 5 === 0){
        return "buzz"
    }
} 