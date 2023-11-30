// Consider this variable:

//  const person = {
//    firstName: "Arthur",
//    lastName: "Dent"
//    homePlanet: "Earth"
//  }


// Write the code that accesses the first name of the person object.
// console.log(person.firstName)

// Write the code that accesses the last name of the person object.
// console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// const person = {
//     name: "Arthur Dent",
//     homePlanet: "Earth",
//     getData: function () {
//       return `${this.name} is from planet ${this.homePlanet}`
//     }
//   }
  
//   console.log(person.getData())

// Consider this variable:

//  const describeProduct = {
//    name: "chair",
//    price: 24.99,
 
      
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// const describeProduct = {
//     name: "chair",
//     price: 24.99,
//      getData: function () {
//            return `This product is a ${this.name}. It costs ${this.price}.`
//          }
//        }
//        console.log(describeProduct.getData())
// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
// const product = {
//     name: "chair",
//     price: 24.99,
//      totalWithTax: function () {
//            const totalPriceWithTax = this.price + (this.price *0.07)
//            return totalPriceWithTax.toFixed(2) ; // Rounds to decimals within ()
//        }
//     }
//        console.log(product.totalWithTax())
//     // 26.74


// Consider this variable:

//  const lunch = {
//    name: "PB and Banana",
//    type: "sandwich",
//    ingredients: ["bread", "peanut butter", "banana"]
//    }
// Write the code that accesses the ingredients property.
// console.log(lunch.ingredients)
//'bread', 'peanut butter', 'banana'

// Write the code that access the third ingredient of the lunch object.



// const lunch = {
//     name: "PB and Banana",
//     type: "sandwich",
//     ingredients: ["bread", "peanut butter", "banana"]
//     }

// console.log(lunch.ingredients[2])
// bread


// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// const lunch = {
//         name: "PB and Banana",
//         type: "sandwich",
//         ingredients: ["bread", "peanut butter", "banana"],
//         addUp: function() { //function takes lunch object as argument

//           }
//         }
//     const sandwich = (object) => {
//         return "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
//     }
//     console.log(sandwich())


// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// const lunch = {
//         name: "PB and Banana",
//         type: "sandwich",
//         ingredients: ["bread", "peanut butter", "banana"],
//         addUp: function() {
//             return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients}`
//           }
//         }
    
//     console.log(lunch.addUp())


// Consider this variable:

// const animals = [
//   { name: "Waffles", type: "dog", age: 7 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 }
// ]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.

// const animals = [
//     { name: "Waffles", type: "dog", age: 7 },
//     { name: "Fluffy", type: "cat", age: 14 },
//     { name: "Spelunky", type: "dog", age: 4 },
//     { name: "Hank", type: "cat", age: 11 }
//   ]
// const onlycats = animals.filter(value => {
//     return value.type === "cat"
// })

// console.log(onlycats)
// { name: 'Fluffy', type: 'cat', age: 14 },
// { name: 'Hank', type: 'cat', age: 11 }

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.

// const animals = [
//     { name: "Waffles", type: "dog", age: 7 },
//     { name: "Fluffy", type: "cat", age: 14 },
//     { name: "Spelunky", type: "dog", age: 4 },
//     { name: "Hank", type: "cat", age: 11 }
//   ]
//   const onlyName = animals.map(value => {
//         return value.name
//     })
    
//     console.log(onlyName)


// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.

const animals = [
    { name: "Waffles", type: "dog", age: 7 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "cat", age: 11 }
  ]
  const onlyAge = animals.filter(value => {
         return number.age > 10
    })
    
    console.log(onlyAge)


// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
// Consider this variable:

// const author = {
//   name: "H. G. Wells",
//   genre: "science fiction"
// }
// Write the code that destructures the author object so that the following code snippet will run successfully:
// console.log(`${name} is a ${genre} author`)
// // output: "H. G. Wells is a science fiction author"
// Consider this variable:

// const pokeOne = {
//   species: "Charmandar",
//   pokemon_type: "Fire"
// }

// const pokeTwo = {
//   species: "Magikarp",
//   pokemon_type: "Water"
// }
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
// console.log(describePokemon(pokeOne))
// // output: "Charmandar is a Fire pokemon"
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
// Write the code that logs the name of your cohort.
// Write the code that uses destructuring to log the name of your cohort.
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
// // output: ["2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf", "2022 Hotel", "2023 Alpha", "2023 Bravo", "2023 Charlie", "2023 Delta", "2023 Echo", "2023 Foxtrot", "2023 Golf", "2023 Hotel", "2023 India", "2023 Juliet"]
