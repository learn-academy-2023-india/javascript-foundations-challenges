// Consider this variable:

// const person = {
//   firstName: "Arthur",
//   lastName: "Dent",

// }
// const person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth",
//     makeState: function() {
//         return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
//     }
//   }
// // Write the code that accesses the first name of the person object.
// console.log(person.firstName)
// // Write the code that accesses the last name of the person object.
// console.log(person.lastName)
// // Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// // Update the person object with a method that logs "Arthur Dent is from planet Earth".
// console.log(person.makeState())
// Consider this variable:

// const product = {
//   name: "chair",
//   price: 24.99,
  
// // Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
//   describeProduct: function() {
//     return `The product is a ${this.name}. It costs $${this.price}`
// },
// // Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
//   totalWithTax: function() {
//     return Math.round(((this.price * 0.07)+ this.price)*100)/100
//   }
// }
// console.log(product.totalWithTax())
// Consider this variable:

// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"],

// Write the code that accesses the ingredients property.
// console.log(lunch.ingredients)
// Write the code that access the third ingredient of the lunch object.
// console.log(lunch.ingredients[2])
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// listOf: function() {
//     return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients}.`
// }
// console.log(lunch.listOf())
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// listOf: function() {
//     return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]} .`
// }
// }
// console.log(lunch.listOf())
// Consider this variable:

// const animals = [
//   { name: "Waffles", type: "dog", age: 7 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 },
// ]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.

// let cat = [];
// for (let i = 0; i < animals.length; i++) {
//     if (animals[i].type == "cat") {
//         cat.push(animals[i]);
//     }
// }
// console.log(cat)
// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
// var animalsNames = animals.map(value => {
//     return value.name 
//   })
//   console.log(animalsNames)
// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
// var animalsAge = animals.filter(object => {
//     return object.age > 10
//   })
//   console.log(animalsAge)
// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
// const animalStory = function () {
//     return animals.map(animal => `${animal.name} is a ${animal.type} and is ${animal.age} years old`)
// }
// console.log(animalStory())
// Consider this variable:

// const author = {
//   name: "H. G. Wells",
//   genre: "science fiction"
// }
// const { name, genre } = author
// Write the code that destructures the author object so that the following code snippet will run successfully:
// console.log(`${name} is a ${genre} author`)
// // output: "H. G. Wells is a science fiction author"
// Consider this variable:

// const pokeOne = {
//   species: "Charmandar",
//   pokemon_type: "Fire"
// }
// var { species, pokemon_type } = pokeOne
// const describePokemon = function () {
//     return pokeOne.map(pokeOne => `${pokeOne.species} is a ${pokeOne.pokemon_type} pokemon.`)
// }
// const pokeTwo = {
//   species: "Magikarp",
//   pokemon_type: "Water"
// }
// var { species, pokemon_type } = pokeTwo

// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
// console.log(describePokemon(pokeOne))
// // output: "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"
// Consider this variable:
// const triangleDimensions = {
//   base: 2,
//   height: 5,
//   findArea: function () {
//     return ((this.base * this.height)**2)
//   },
//   increaseBase: function () {
//     return this.base * 3
//   }
// }
// Modify the triangleDimensions object to have a method that returns the area of the triangle.
// console.log(triangleDimensions.findArea())
// Write the code that will update the base to be the value of 6.
// triangleDimensions.base = 6
// console.log(triangleDimensions.base)
// 🏔 Stretch Goals
// Consider this variable:

const learn = {
  cohorts: {
    2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel"],
    2023: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet"]
  }
}
// Write the code that logs the name of your cohort.
console.log(learn.cohorts[2023][8])
// Write the code that uses destructuring to log the name of your cohort.

// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
  
// // output: ["2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf", "2022 Hotel", "2023 Alpha", "2023 Bravo", "2023 Charlie", "2023 Delta", "2023 Echo", "2023 Foxtrot", "2023 Golf", "2023 Hotel", "2023 India", "2023 Juliet"]