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
const coffee = new Coffee("black")
// Write the code that outputs the black coffee's profile
console.log(coffee.coffeeProfile("black",0,0))
// Write the code that makes a coffee object with 1 cream and 2 sugars
const coffee1 = new Coffee("black", 1,2)
// Write the code that outputs the 1 cream and 2 sugars coffee profile
console.log(coffee1)

// Latte Maker: create a class for Latte
class Latte {
    constructor(flavor, milkType, shot) {
      this.flavor = flavor.toLowerCase()
      this.milkType = milkType
      this.shot = shot
    }
    
    latteProfile() {
      return `A ${this.flavor} latte with ${this.milkType} with ${this.shots()}`
        }
    
  
    shots() {
      if (this.shot > 1) {
        return `${this.shot} shots`
      } else {
        return `${this.shot} shot`
      }
  }
  }
  
const latte = new Latte("Hazelnut", "Almond Milk", 5)
  console.log(latte.latteProfile())
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile

// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
const latte1 = new Latte("Regular", "no milk", 1)
  console.log(latte1.latteProfile())
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.
const latte2 = new Latte("hazelnut", "almond milk", 2)
  console.log(latte2.latteProfile())



// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
class Cylinder {
    constructor(radius, height) {
      this.radius = radius
      this.height = height 
    }
    volume() {
        return Math.PI*this.radius*this.radius*this.height
        }
  }
  const volume = new Cylinder(2.5,3)
  console.log(volume.volume())
// Write the code that rounds the volume of the cylinder to four decimal places
console.log(volume.volume().toFixed(4))
// Write the code that creates three unique cylinder objects
const volume1 = new Cylinder(10,2.7)
  console.log(volume1.volume())
const volume2 = new Cylinder(7,8)
  console.log(volume2.volume())
const volume3 = new Cylinder(1,0.3)
  console.log(volume3.volume())
