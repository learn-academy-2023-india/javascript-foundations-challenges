// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// input: String
// output:String-one or two options
// make a decision based on the input
// if tired drink coffee
// if not keep working

describe ("work", () => {
    it("is a function that returns drink coffee if you are tired and keep working if you are not tired", () => {
        expect (work("tired")).toEqual("drink coffee")
        expect (work("not tired")).toEqual ("keep working")
    })
})
// Create the function that will make the test pass.

    const work = (string) => {
        if (string === "tired") {
            return "drink coffee"
        } else { 
            return "keep working"
        }
    }
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe ("job", () => {
    it("is a function that returns relax if you are stressed and keep going if you are not stressed", () => {
        expect (job("stressed")).toEqual("relax")
        expect (job("not stressed")).toEqual ("keep going")
    })
})

// Create the function that will make the test pass.

const job = (string) => {
    if (string === "stressed") {
        return "relax"
    } else { 
        return "keep going"
    }
}
// Write the test for a function that returns "in budget" if a price is lower than $300.
// expect statements literal input 
// if number ...it must be less than max value**
// savings = function call
describe ("savings", () => {
    it("is a function that returns in budget if you are less than $300", () => {
        expect(savings(299)).toEqual("in budget")
    })
})

// Create the function that will make the test pass.

    const savings = (number) => {
        if (number < 300) {
            return "in budget"
        }
    }
// Write the test for a function that takes in two numbers and returns the smaller number.
describe ("bully" , () => {
    it("takes  on two numbers and picks on the smaller one" , () => {
        expect(bully("")).toEqual("")
    })
})

// Create the function that will make the test pass.

const ownSize = ("")
const littleGuy = () => {
    if(littleGuy < ownSize) {
        return littleGuy
    } else {
        return ownSize
    }
    }


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

describe("divisibleBy", () =>
it("will take two numbers as arguments and return whether the first number is divisble by the second." , () => {
    expect(divisibleBy(10,5)).toEqual("10 is evenly divisible by 5.") 
}))

// Create the function that will make the test pass.

const divisibleBy = (num1 , num2) => { 
    if(num1 % num2 === 0){
        return `${num1} is evenly divisible by ${num2}.`
    }
}

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".

describe("fizzBuzz", () =>
it("will replace a number that is a multiple of 3 with the word fizz." , () => {
    expect(fizzBuzz(3)).toEqual("fizz")}))
    it("will replace a number that is a multiple of 5 with thw word buzz." , () => {
        expect(fizzBuzz(5)).toEqual("buzz")
    })
        it("will replace a number that is a multiple of 3 and 5  with the word fizzbuzz." , () => {
            expect(fizzBuzz(15)).toEqual("fizzbuzz")
        })
// Create the function that will make the test pass.
const fizzBuzz = (num) => {
    if(num % 3 === 0 && num % 5 === 0){
        return "fizzbuzz"
    }   else if (num % 3 === 0) {
                return "fizz"
        } else if (num % 5 === 0 ) {
                return "buzz"
        }
}