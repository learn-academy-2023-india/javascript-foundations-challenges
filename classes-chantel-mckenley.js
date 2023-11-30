// Coffee Maker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile
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
var blackCoffee = new Coffee("black coffee", 0, 0)
console.log(blackCoffee)
console.log(blackCoffee.coffeeProfile())
var creamAndSugar = new Coffee("coffee", 1, 2)
console.log(creamAndSugar)
console.log(creamAndSugar.coffeeProfile())

// Latte Maker: create a class for Latte
class LatteMaker{
    constructor(flavor, milk, shots) {
        this.flavor = flavor.toLowerCase()
        this.milk = milk
        this.shots = shots
    }
    latteProflie() {
        return `Here's your ${this.flavor} latte with ${this.milk} milk and ${this.shots} shots!`
    }
}
var regularLatte = new LatteMaker("regular", "regular", 1)
console.log(regularLatte)
console.log(regularLatte.latteProflie())
var hazelnutLatte = new LatteMaker("hazelnut", "almond", "double")
console.log(hazelnutLatte)
console.log(hazelnutLatte.latteProflie())

// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.


// Volume of a Cylinder: create a class for Cylinder
class Cylinder{
    constructor(radius, height) {
        this.piValue = Math.PI
        this.radius = radius
        this.height = height
    }

    volume() {
        return parseFloat((this.piValue * this.radius ** 2 * this.height).toFixed(4))
    }
    // fourDecimal() {
    //     return this.volume.toFixed(4)
    // }
}
var cylinderVolume = new Cylinder(4, 9)
console.log(cylinderVolume.volume())
var cylinderVolume = new Cylinder(42, 15)
console.log(cylinderVolume.volume())
var cylinderVolume = new Cylinder(8, 34)
console.log(cylinderVolume.volume())
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects