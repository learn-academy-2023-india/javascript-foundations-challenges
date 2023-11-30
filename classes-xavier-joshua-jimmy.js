// Coffee Maker: copy the given Coffee class into a text editor
class Coffee {
      constructor(type, cream, sugar) {
        this.type = type.toLowerCase()
        this.cream = cream
        this.sugar = sugar
      }
      coffeeProfile() {
        return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
      }
    
      creams() {
        if (this.cream > 1) {
          return `${this.cream} creams`
        } else {
          return `${this.cream} cream`
        }
      }
    
      sugars() {
        if (this.sugar > 1) {
          return `${this.sugar} sugars`
        } else {
          return `${this.sugar} sugar`
        }
      }
    }
// Write the code that makes a black coffee object
const blackCoffee = new Coffee("black", 0, 0)
// Write the code that outputs the black coffee's profile
console.log(blackCoffee.coffeeProfile())
// Write the code that makes a coffee object with 1 cream and 2 sugars
const brownCoffee = new Coffee("brown", 1, 2)
// Write the code that outputs the 1 cream and 2 sugars coffee profile
// console.log(brownCoffee.coffeeProfile())
// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile

class Latte {
    constructor(flavour, mylk, shots) {
        this.flavour = flavour.toLowerCase()
        this.mylk = mylk.toLowerCase()
        this.shot = shots
    }
    latteProfile() {
        return `A ${this.flavour} latte ${this.mylks()} ${this.shots()}`
    }
    mylks() {
        if (this.mylk) {
            return `with ${this.mylk} mylk`
        } else {
            return `${this.mylk}`
        }
    }
    shots() {
        if (this.shot > 1) {
            return `with ${this.shot} shots`
        } else {
            return `with ${this.shot} shot`
        }
    }
}

const regLatte = new Latte("regular","", 1)
console.log(regLatte.latteProfile())
// Write the code that makes a double shot, hazelnut latte with almond milk.
const dHazLatte = new Latte ("hazelnut", "almond", 2)


// Log the double shot, hazelnut latte with almond milk's profile.
console.log(dHazLatte.latteProfile())

// Volume of a Cylinder: create a class for Cylinder
class Cylinder {
      constructor (pi, radius, height)
      this.pi = Math.PI
      this.radius = radius
      this.height
}


// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects
