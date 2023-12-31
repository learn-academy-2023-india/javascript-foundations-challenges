// 💻 Challenges
// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent",
}

// Write the code that accesses the first name of the person object.
// pseudo:
// 1. access firstName
console.log(person.firstName)

// Write the code that accesses the last name of the person object.
// pseudo:
// 1. access lastName
console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// pseudo:
// 1. person.homePlanet
// 2. concat? "Earth"

var property = { 
    homePlanet: "Earth", 
    addUp: () => {
        return this.firstName + this.homePlanet
    }   
}
console.log(property.homePlanet)
// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// Consider this variable:
// pseudo:
// 1. concat firstName + lastName + 'is from planet' + homePlanet

var property = { 
    homePlanet: "Earth", 
    addUp: () => {
        return this.firstName + this.homePlanet
    }   
}
console.log((person.firstName + ' '  + person.lastName + ' is from planet ' + property.homePlanet))

// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

// pseudo
// 1. describeProduct(product.name) => "The product is a chair. It costs $24.99."
// 2. console.log("The product is a chair. It costs $24.99.")

const product = {
    name: "chair",
    price: 24.99
}
console.log(( 'The product is a ' + product.name + '. It costs ' + product.price ))

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
// psuedo
// 1. totalWithTax() () => product 
// 2. return product.price * .07 <-- round two decimals

// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
  
}
console.log((product.price * .07).toFixed(2))

// Write the code that accesses the ingredients property.

console.log((lunch.ingredients))

// Write the code that access the third ingredient of the lunch object.

console.log((lunch.ingredients[2]))
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
console.log(( 'The ingredients for a PB and Banana sandwich are ' + (lunch.ingredients.join()) + "."))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// psuedo: 
// 1. lunch() => {
//    returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// }
lunch.describe = () => {
        return 'The ingredients for a ' + lunch.name + ' ' + lunch.type + ' are ' + lunch.ingredients + '.'
}
console.log(lunch.describe())


// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
// Consider this variable:
const animals = [
    { name: "Waffles", type: "dog", age: 7 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "cat", age: 11 }
]
// 1. take animal arrays 
// 2. take animal arrays and return a new array with key type values
var type = animals.filter(object => {
    return object.type === "cat"
})
console.log(type)

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
var animalName = animals.map(object => {
    return object.name
})
console.log(animalName)

// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
var plusTen = animals.filter(object => {
    return object.age >= 10
})
console.log(plusTen)
// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
// 1. function([animals]) () => 
// 2. return ["sentence about each of the {animals}"]

console.log(( 'Sentence about each of the ' + (animalName.join(", ")) + "."))

// Consider this variable:
const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}
const { name, genre } = author
// Write the code that destructures the author object so that the following code snippet will run successfully: console.log(`${name} is a ${genre} author`)
// 1. author()
// 2. return author.name + author.genre



// console.log(( 'H. G. Wells is a science fiction author ' + (author.name.join(", ")) + "."))

console.log(`${name} is a ${genre} author`)

// output: "H. G. Wells is a science fiction author"


// Consider this variable:


const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire"
}

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water"
}

// const allPokemon = () => {
//     for (let i)
// }

// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

const describePokemon = () => {
    return pokeOne.species
}

console.log(`${pokeOne.species} is a ${pokeOne.pokemon_type} pokemon`)
const { species, pokemon_type } = pokeOne
console.log(describePokemon(pokeOne))


// const describePokemon = () => {
//     return pokeOne.species
// }
// console.log(`${species()} is a ${pokemon_type()} pokemon`)
// const { species, pokemon_type } = pokeOne
// console.log(describePokemon(pokeOne))
// output: "Charmandar is a Fire pokemon"

// console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"








// Consider this variable:

// const triangleDimensions = {
//   base: 2,
//   height: 5
// }
// Modify the triangleDimensions object to have a method that returns the area of the triangle.
// Write the code that will update the base to be the value of 6.
// 🏔 Stretch Goals
// Consider this variable:

// const learn = {
//   cohorts: {
//     2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel"],
//     2023: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet"]
//   }
// }

// learn.cohorts.2023
// Write the code that logs the name of your cohort.
// Write the code that uses destructuring to log the name of your cohort.
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
// // output: ["2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf", "2022 Hotel", "2023 Alpha", "2023 Bravo", "2023 Charlie", "2023 Delta", "2023 Echo", "2023 Foxtrot", "2023 Golf", "2023 Hotel", "2023 India", "2023 Juliet"]
