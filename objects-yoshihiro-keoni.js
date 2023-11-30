// Consider this variable:

// const person = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   homePlanets: "Earth"
// }
// Write the code that accesses the first name of the person object.
// console.log(person.firstName)
// // Write the code that accesses the last name of the person object.
// console.log(person.lastName)
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// const person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanets: "Earth"
//   }
// // Update the person object with a method that logs "Arthur Dent is from planet Earth".
// console.log(`${person.firstName} ${person.lastName} is from planet ${person.homePlanets}`)


// Consider this variable:

const product = {
  name: "chair",
  price: 24.99
}
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

// const describeProduct = () => {
//     return describeProduct(product)
// }
// console.log(`The product is a ${product.name}. It costs $${product.price}.`)
 // Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// const totalWithTax = () => {
//     const salesTax = 0.07
//     const finalAmount = product.price * (1 + salesTax)
//     return finalAmount.toFixed (2)
// }
// const finalAmount = totalWithTax(product)
//  console.log(`Total price is ${finalAmount}`)
// Consider this variable:

// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }
// Write the code that accesses the ingredients property.
// console.log (lunch.ingredients)
// Write the code that access the third ingredient of the lunch object.
// console.log (lunch.ingredients[2])
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// const lunchObject = () => {
//         return lunchObject(lunch)
//      }
//      console.log(`The ingredients for a ${lunch.name} ${lunch.type}, are ${lunch.ingredients}.`)
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// const lunch = {
//     name: "PB and Banana",
//     type: "sandwich",
//     ingredients: ["bread", "peanut butter", "banana"]
// }
// lunch.lunchObject = function () {
//     const ingredientsInString = this.ingredients.join (', ')
//     return `The ingredient for a ${this.name} ${this.type}, are ${this.ingredients}.`
// }
//         console.log(lunch.lunchObject())
  
// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
// // Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
// const animalsOfCats = animals.filter (object => {
//     return object.type === "cat"
// })
// console.log(animalsOfCats)
// // Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
// const animalNames = animals.map (object => {
//     return object.name
// })
// console.log(animalNames)
// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
// const animalOfAge = animals.filter (object => {
//     return object.age >= 10
// })
// console.log(animalOfAge)
// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
// const animalSentence = (animalArray) => {
//     return animalArray.map (animals => `${animals.name} is a ${animals.type} that is ${animals.age} years old`)
//     return animalArray.map (animals => `${animals.name} is a ${animals.type} that is ${animals.age} years old`)
//     return animalArray.map (animals => `${animals.name} is a ${animals.type} that is ${animals.age} years old`)
//     return animalArray.map (animals => `${animals.name} is a ${animals.type} that is ${animals.age} years old`)
// }
// const arrayOfAnimals = animalSentence(animals)
// console.log (arrayOfAnimals)

// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}
// Write the code that destructures the author object so that the following code snippet will run successfully:
console.log(`${author.name} is a ${author.genre} author`)
// output: "H. G. Wells is a science fiction author"
// Consider this variable:

// const pokeOne = {
//   species: "Charmandar",
//   pokemon_type: "Fire"
// }

// const pokeTwo = {
//   species: "Magikarp",
//   pokemon_type: "Water"
// }
// // Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
// const describePokemon = ({species, pokemon_Type}) => {
//     return `${species} is a ${pokemon_Type} pokemon`
//  }
 
// console.log(describePokemon(pokeOne))
// //output: "Charmandar is a Fire pokemon"

// console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"

// Consider this variable:

// const triangleDimensions = {
//   base: 2,
//   height: 5,
//   something: function() {
//     return 0.5 * this.base * this.height
//   }
// }
// // Modify the triangleDimensions object to have a method that returns the area of the triangle.
// const area = triangleDimensions.something()
// console.log (area)
// Write the code that will update the base to be the value of 6.

const triangleDimensions = {
    base: 2,
    height: 5
}   
triangleDimensions.base = 6
console.log(triangleDimensions)