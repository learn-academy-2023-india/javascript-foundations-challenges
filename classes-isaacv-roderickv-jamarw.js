// Coffee Maker: copy the given Coffee class into a text editor [X]
class Coffee {
    constructor(type, cream, sugar){
        this.type = type.toLowerCase(),
        this.cream = cream,
        this.sugar = sugar
    } 

    coffeeProfile() {
        return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
    }
      creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`
    } else {
      return `${this.cream} no cream`
    }
    }

      sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} no sugar`
    }
    }
}

// Write the code that makes a black coffee object [X]
const blackCoffee = new Coffee("black", 0, 0)
// Write the code that outputs the black coffee's profile [X]
console.log(blackCoffee.coffeeProfile())
// Write the code that makes a coffee object with 1 cream and 2 sugars [X]
const creamyCoffee = new Coffee("regular", 1, 2)
// Write the code that outputs the 1 cream and 2 sugars coffee profile [X]
console.log(creamyCoffee.coffeeProfile())
// output---> A regular coffee with 1 cream, 2 sugars

// class Coffee {
//   constructor(type, cream, sugar) {
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }

//   coffeeProfile() {
//     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//   }

//   creams() {
//     if (this.cream > 1) {
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }

//   sugars() {
//     if (this.sugar > 1) {
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }


// Latte Maker: create a class for Latte

// Write a Latte class that takes a flavor, a milk type, and a number of shots
// class Latte {
//   constructor(milkType, flavor, shots){
//       this.milkType = milkType.toLowerCase(),
//       this.flavor = flavor.toLowerCase(),
//       this.shots = shots
//   } 

//   latteProfile() {
//       return `A ${this.shots()} ${this.flavor()} ${this.milkType}`
//   }
//     milkType() {
//       if (this.milkType > 1) {
//         return `${this.milkType} almond milk`
//       } else {
//         return `${this.milkType} milk`
//       }
//     }
//     shots() {
//       if (this.shots > 1) {
//       return `${this.shots} shots`
//       } else if {
//       return `${this.shots} shot`
//       }
//     }
// }

// // Write a method for your Latte class that outputs the latte's profile
// // .method() for latte class () => profile 
// console.log(latteProfile())
// // Write the code that makes a regular, single shot latte
// const singleRegLatte = new Latte("regular", 1, 1)
// // Log the regular, single shot latte's profile
// console.log(singleRegLatte.latteProfile())
// // Write the code that makes a double shot, hazelnut latte with almond milk.
// const hazelnutLatte = new Latte("regular", "hazelnut latte", 2)
// // Log the double shot, hazelnut latte with almond milk's profile.
// console.log(hazelnutLatte.latteProfile())



// // Volume of a Cylinder: create a class for Cylinder
// // Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// // psuedo:
// // 1. new class
// // 2. define volumeCylinder = () => (3.14159 * 2 * height)

// class Cylinder {
//   constructor(pi, height, 2){
//       this.pi = pi,
//       this.heigh = height,
//       this.shots = shots
//   } 
// }


// // Write the code that rounds the volume of the cylinder to four decimal places
// // mapping over array to access the information from the squirrels array
// Cylinder.map(() => {
//   console.log(`The volume of a Cylinder is ${pi}*${height}*${shots} nuts.`)
// })
// // Write the code that creates three unique cylinder objects
