class Coffee {
    constructor(type, cream, sugar) {
      this.type = type.toLowerCase()
      this.cream = cream
      this.sugar = sugar 
    }
  
    coffeeProfile() {
      return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}}`
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

const blackCoffee = new Coffee("black",0 ,0)
const myCoffee = new Coffee("Americano",1 ,2)

console.log(blackCoffee)
console.log(myCoffee)


//Latte Maker: create a class for Latte
//Write a Latte class that takes a flavor, a milk type, and a number of shots
//Write a method for your Latte class that outputs the latte's profile
//Write the code that makes a regular, single shot latte
//Log the regular, single shot latte's profile
//Write the code that makes a double shot, hazelnut latte with almond milk.
//Log the double shot, hazelnut latte with almond milk's profile.

class Latte {
  constructor(flavor, milk, shots) {
    this.flavor = flavor
    this.milk = milk
    this.shots = shots
  }

  latteProfile() {
    return `A ${this.flavorType()} latte with ${this.milkType()}, ${this.shotType()}`
  }

  milkType() {
    if (this.milk === 1) {
      return `${this.milk} regular`
    } else  
     return `${this.milk} almond`
    
    
    }
    
  
  shotType() {
    if (this.shots === 1) {
      return `${this.shots} single shot(s)`
    } else  {
      return `${this.shots} double shot(s)`
    }
  }
  flavorType() {
    if (this.flavor === 1) {
      return `${this.flavor} hazelnut`
    }
  }
}


//const myLatte = new Latte("myLatte",1 ,1)
const myLatte = new Latte( 1, 2, 2)

console.log(myLatte.latteProfile())
//console.log(myCoffee)


// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects

class Cylinder {
  constructor(flavor, milk, shots) {
    this.flavor = flavor
    this.milk = milk
    this.shots = shots
  }

  latteProfile() {
    return `A ${this.flavorType()} latte with ${this.milkType()}, ${this.shotType()}`
  }

  milkType() {
    if (this.milk === 1) {
      return `${this.milk} regular`
    } else  
     return `${this.milk} almond`
    
    
    }
    
  
  shotType() {
    if (this.shots === 1) {
      return `${this.shots} single shot(s)`
    } else  {
      return `${this.shots} double shot(s)`
    }
  }
  flavorType() {
    if (this.flavor === 1) {
      return `${this.flavor} hazelnut`
    }
  }
}
