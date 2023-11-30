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

const blackCoffee = new Coffee ("black", 0, 0)
console.log (blackCoffee.coffeeProfile())

const coffee = new Coffee ("medium", 1, 2)
console.log (coffee.coffeeProfile())

// Latte Maker: create a class for Latte
//     Write a Latte class that takes a flavor, a milk type, and a number of shots
//     Write a method for your Latte class that outputs the latte's profile
//     Write the code that makes a regular, single shot latte
//     Log the regular, single shot latte's profile
//     Write the code that makes a double shot, hazelnut latte with almond milk.
//     Log the double shot, hazelnut latte with almond milk's profile.

class Latte {
    constructor(flavor, milkType, shots) {
      this.flavor = flavor.toLowerCase()
      this.milkType = milkType.toLowerCase()
      this.almondMilk = 'almond'
      this.oatMilk= 'oat'
      this.wholeMilk = 'whole'
      this.shots = shots
    }

    latteProfile() {
      return `A ${this.flavor} latte with ${this.getMilk()}, and ${this.getShots()}`
    }
  
    getMilk() {
      if (this.milkType === this.almondMilk) {
        return `${this.almondMilk} milk`
      } else if (this.milkType === this.oatMilk) {
        return `${this.oatMilk} milk`
      }  else if (this.milkType === this.wholeMilk) {
        return `${this.wholeMilk} milk`
      }  else {
        return 'no milk'
      }
    }
  
    getShots() {
      if (this.shots > 1) {
        return `${this.shots} shots`
      } else {
        return `${this.shots} shot`
      }
    }
  }

const regularLatte = new Latte ("regular", "", 1)
console.log (regularLatte.latteProfile())

const hazelnutLatte = new Latte ("hazelnut", "almond", 2) 
console.log (hazelnutLatte.latteProfile())

// Volume of a Cylinder: create a class for Cylinder
//     Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
//     Write the code that rounds the volume of the cylinder to four decimal places
//     Write the code that creates three unique cylinder objects

class CylinderVolume {
    constructor(radius, height){
        this.radius = radius
        this.height = height
    }
    calVol(){
        return (Math.PI * this.radius ** 2 * this.height).toFixed(4)
    }
}
const cylinder = new CylinderVolume (5, 5)
const volume = cylinder.calVol()
console.log (volume)

const cylinder1 = new CylinderVolume (7, 9)
const volume1 = cylinder1.calVol()
console.log (volume1)

const cylinder2 = new CylinderVolume (37, 42)
const volume2 = cylinder2.calVol()
console.log (volume2)