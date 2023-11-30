// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent",
}
// Write the code that accesses the first name of the person object.
console.log(person.firstName)
// Write the code that accesses the last name of the person object.
console.log(person.lastName)
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
person.homePlanet = "Earth"
console.log(person)
// Update the person object with a method that logs "Arthur Dent is from planet Earth".
console.log(`${person.firstName} ${person.lastName} is from  planet ${person.homePlanet}.`)

// Consider this variable:

const product = {
  name: "chair",
  price: 24.99
}

// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
//PsuedoCode
// Create describeProduct Function
// Output require string interpolation for the object keys. Value is displayed in console log in Sentence

var describeProduct = (object => {
    return `The product is a ${object.name}. It costs ${object.price}.`
})
console.log(describeProduct(product))

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
var totalWithTax = (object =>{
    return (object.price * .07 + object.price).toFixed(2)   
})
console.log(totalWithTax(product))

// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"],
  recipes: function(){
    return `The ingredients for a PB and Banana Sandwich are ${this.ingredients[0]}, ${this.ingredients[1]}, and, ${this.ingredients[2]}.`
  }
    
// Attempted to update the lunch object with a method within the object called recipes that would access
}
// Write the code that accesses the ingredients property.
console.log(lunch.ingredients)
// Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2])
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// var recipe = (value => {
//     return `The ingredients for a PB and Banana sandwich are ${lunch.ingredients[0]}, ${lunch.ingredients[1]} and ${lunch.ingredients[2]}.`
// })
// console.log(recipe())
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
console.log(lunch.recipes())

// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
const onlyCats = animals.filter((value) => value.type === "cat")
console.log(onlyCats)
// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
const onlyNames = animals.map(value => {
    return value.name
})
console.log(onlyNames)
// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
const onlyOld = animals.filter(object => {
    return object.age > 10
})
console.log(onlyOld)
// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
const animalTalk = animals.map(value => {
    return `${value.name} is a funny ${value.type} and is ${value.age} years old.`
})
console.log(animalTalk)

// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}
// Write the code that destructures the author object so that the following code snippet will run successfully:
var {name, genre} = author
console.log(`${name} is a ${genre} author`)
// // output: "H. G. Wells is a science fiction author"

// Consider this variable:

const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire"
}

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water"
}
var describePokemon = (object => {
    return `${object.species} is a ${object.pokemon_type} pokemon`
})
var {species, pokemon_type} = pokeOne
var {species, pokemon_type} = pokeTwo

// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
console.log(describePokemon(pokeOne))
// // output: "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"

// Consider this variable:

const triangleDimensions = {
  base: 2,
  height: 5
}
// Modify the triangleDimensions object to have a method that returns the area of the triangle.
triangleDimensions.area = triangleDimensions.base * triangleDimensions.height
console.log(triangleDimensions)
// Write the code that will update the base to be the value of 6.
triangleDimensions.base = 6
triangleDimensions.area = triangleDimensions.base * triangleDimensions.height
console.log(triangleDimensions)