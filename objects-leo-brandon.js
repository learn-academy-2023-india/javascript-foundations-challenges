// Consider this variable:

const person = {
       firstName: "Arthur",
     lastName: "Dent"
 }
// Write the code that accesses the first name of the person object.
console.log(person.firstName)
// Write the code that accesses the last name of the person object.
console.log(person.lastName)
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
const additionalInfo = { ... person, homePlanet: "Earth"
}
console.log(additionalInfo)
// Update the person object with a method that logs "Arthur Dent is from planet Earth".
const person1 = {
    firstName: "Arthur",
  lastName: "Dent",
  homePlanet: "Earth",

getData: function (){
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
}
}
console.log(person1.getData())


// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// Consider this variable:
const product = {
  name: "chair",
  price: 24.99,

  describeProduct: function (){
    return `The product is a ${this.name}. It costs $${this.price}.`
    return this.price * 1.07
}
}
console.log(product.describeProduct())
console.log((product.price * 1.07).toFixed(2))
// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"] ,
  sandWhich: function (){
    return `The ingredients for a ${this.name} sandwhich are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}.`
    
}
}
// Write the code that accesses the ingredients property.
console.log(lunch.ingredients)
// Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2])
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
console.log(`The ingredients for a ${lunch.name} sandwhich are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`)
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
console.log(lunch.sandWhich())

// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 } ,
 
]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
var animalType = animals.filter(object=>{
    return object.type === "cat"
})
    console.log(animalType)

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
var animalName = animals.map(value=>{
    return value.name 
})
console.log(animalName)
// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
var oldAnimal = animals.filter(value=>{
    return value.age > 10
})
var animalName2 = oldAnimal.map(value=>{
    return value.name 
})
console.log(animalName2)
// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
const animalSent = (animalArray) =>{
    return animalArray.map(animals =>  `${animals.name} is a ${animals.type}, and ${animals.age} years old.`)
    return animalArray.map(animals =>  `${animals.name} is a ${animals.type}, and ${animals.age} years old.`)
    return animalArray.map(animals =>  `${animals.name} is a ${animals.type}, and ${animals.age} years old.`)
    return animalArray.map(animals =>  `${animals.name} is a ${animals.type}, and ${animals.age} years old.`)
}
const animalSent2 = animalSent(animals)
console.log(animalSent2)
// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}
// Write the code that destructures the author object so that the following code snippet will run successfully:
const {name, genre} = author
console.log(`${name} is a ${genre} author`)
// // output: "H. G. Wells is a science fiction author"
// Consider this variable:

const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire",
 
}

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water",
}
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

const describePokemon = ({species, pokemon_type}) =>{
    return `${species} is a ${pokemon_type} pokemon`
}
console.log(describePokemon(pokeOne))
// // output: "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"
// Consider this variable:

const triangleDimensions = {
  base: 2,
  height: 50
}
// Modify the triangleDimensions object to have a method that returns the area of the triangle.
// Write the code that will update the base to be the value of 6.
