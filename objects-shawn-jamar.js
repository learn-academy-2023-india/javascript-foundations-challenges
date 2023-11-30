// // Consider this variable:

// const person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth",
//     sayStuff: function (){
//       return `${person.firstName} ${person.Lastname} is from planet ${person.homePlanet}`
//     }
// }
// // Write the code that accesses the first name of the person object.
// console.log(person.firstName)

// // Write the code that accesses the last name of the person object.
// console.log(person.lastName)
// // Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// console.log(person.homePlanet)
// // Update the person object with a method that logs "Arthur Dent is from planet Earth".
// console.log((person.firstName + " ") + (person.lastName + " is from planet ")+(person.homePlanet))
// Consider this variable:

//  const product = {
//   name: "chair",
//   price: 24.99,
//   tax: 0.07,
//   describeProduct : () => {
//     return `This product is a ${product.name}. it costs ${product.price}`
//     },
//     totalTax: () => {
//       return product.price * product.tax
//     },
//     totalWithTax: () => {
//       return product.price + product.totalTax()
//     }
// }
// // Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// describeProduct = () => {
//     return `This product is a ${product.name}. it costs ${product.price}`
// }
// console.log(product.describeProduct())
// // Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
// totalTax = () => {
//    return product.price * product.tax
// }
// console.log(product.totalTax())
// console.log(product.totalWithTax())
// Consider this variable:
//  const lunch = {
//   name: "PB and Banana",
//    type: "sandwich",
//    ingredients: ["bread", "peanut butter", "banana"],
//    howTo: function(){
//       return `The ingredients for a ${lunch.name} sandwich are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, ${lunch.ingredients[2]}`
//     }
//   }
// // Write the code that accesses the ingredients property.
// console.log(lunch.ingredients)
// // Write the code that access the third ingredient of the lunch object.
// console.log(lunch.ingredients[2])
// // Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// console.log(lunch.howTo())

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."


// Consider this variable:

// const animals = [
//    { name: "Waffles", type: "dog", age: 7 },
//    { name: "Fluffy", type: "cat", age: 14 },
//    { name: "Spelunky", type: "dog", age: 4 },
//    { name: "Hank", type: "cat", age: 11 }]
// function generateAnimalSentences(animalArray) {
//   return animalArray.map(animal => {
//     return `${animal.name} is a ${animal.age} year old ${animal.type}.`
//   })
// }
// // Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
// var onlyCats = animals.filter(value => {
//     return value.type === "cat"
//   })
// console.log(onlyCats)
// // Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
// var onlyNames = animals.map(value => {
//     return value.name
//   })
// console.log(onlyNames)
// // Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
// var onlyOlder = animals.filter(value => {
//     return value.age > 10
//   })
// console.log(onlyOlder)
// // Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
// console.log(generateAnimalSentences(animals))

// Consider this variable:
// const author = {
//    name: "H. G. Wells",
//    genre: "science fiction"
//  }
// // Write the code that destructures the author object so that the following code snippet will run successfully:
// console.log(`${author.name} is a ${author.genre} author`)
// // output: "H. G. Wells is a science fiction author"
// Consider this variable:
// const describePokemon = ({species, pokemon_type}) => {
//     return `${species} is a ${pokemon_type} pokemon`
// }
// const pokeOne = {
//    species: "Charmandar",
//    pokemon_type: "Fire"
// }

// const pokeTwo = {
//   species: "Magikarp",
//   pokemon_type: "Water"
// }
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
// console.log(describePokemon(pokeOne))
// // // output: "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"
// Consider this variable:

// const triangleDimensions = {
//     base: 2,
//     height: 5,
//     areaOfT: () => {
//         return triangleDimensions.base * triangleDimensions.height
//     }
// }
// console.log(triangleDimensions.areaOfT())
// // Modify the triangleDimensions object to have a method that returns the area of the triangle.
// // Write the code that will update the base to be the value of 6.
// triangleDimensions.base = 6
// console.log(triangleDimensions.areaOfT())
// 🏔 Stretch Goals
// Consider this variable:

const learn = {
  cohorts: {
    2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel"],
    2023: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet"]
  }
}
// // Write the code that logs the name of your cohort.
// console.log(learn.cohorts[2023][8])
// Write the code that uses destructuring to log the name of your cohort.
var cohort = {
2023: "India"
}
console.log(cohort)
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
// output: ["2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf", "2022 Hotel", "2023 Alpha", "2023 Bravo", "2023 Charlie", "2023 Delta", "2023 Echo", "2023 Foxtrot", "2023 Golf", "2023 Hotel", "2023 India", "2023 Juliet"]
