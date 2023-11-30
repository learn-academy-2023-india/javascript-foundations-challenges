// Coffee Maker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object


// class Coffee {
//     constructor(type, cream, sugar){
//         this.type = type.toLowerCase(),
//         this.cream = cream,
//         this.sugar = sugar
//     } 

//     coffeeProfile() {
//         return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//     }
//       creams() {
//     if (this.cream > 1) {
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//     }

//       sugars() {
//     if (this.sugar > 1) {
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//     }
// }
// const blackCoffee = new Coffee("black", 0, 0)

// // Write the code that outputs the black coffee's profile
// console.log(blackCoffee.coffeeProfile())
// // Write the code that makes a coffee object with 1 cream and 2 sugars
// const creamyCoffee = new Coffee("regular", 1, 2)
// console.log(creamyCoffee.coffeeProfile())
// Write the code that outputs the 1 cream and 2 sugars coffee profile
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
class Latte {
    constructor(milkType, flavor, shots){
        this.milkType = milkType.toLowerCase(),
        this.flavor = flavor,
        this.shots = shots
    } 

    latteProfile() {
        return `A ${this.milkType} latte with ${this.flavor()}, ${this.shots()}`
    }

    //  double shot, hazelnut latte, 
      flavor() {
    if (this.flavor > 1) {
      return `${this.flavor} flavor`
    } else {
      return `${this.flavor} flavor`
    }
    }

      shots() {
    if (this.shots > 1) {
      return `${this.shots} shots`
    } else {
      return `${this.shots} shots`
    }
    }
}

// Write a Latte class that takes a flavor, a milk type, and a number of shots
// --->done
// Write a method for your Latte class that outputs the latte's profile
//--->done
// Write the code that makes a regular, single shot latte
const singleRegLatte = new Latte("regular, single shot", 1, 1)

// Log the regular, single shot latte's profile
console.log(singleRegLatte.latteProfile())
// Write the code that makes a double shot, hazelnut latte with almond milk.

// Log the double shot, hazelnut latte with almond milk's profile.

// Volume of a Cylinder: create a class for Cylinder

// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects
