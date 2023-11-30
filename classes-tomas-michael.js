class Coffee {
    constructor(type, cream, sugar) {
      this.type = type.toLowerCase()
      this.cream = cream
      this.sugar = sugar
    } 

  
    coffeeProfile() {
      return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
    }
    blackcoffee () {
        if (this.type === "black" && this.cream === 0 && this.sugars === 0 ) {
            return `A ${this.type} blackcoffee` 
        }
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
  const newcoffee = new Coffee ("black", 0,0) 
  console.log (newcoffee.coffeeProfile())

  const newcream = new Coffee ("black", 1,2) 
  console.log (newcream.coffeeProfile())

  const newsugar = new Coffee ("black", 2,1) 
  console.log (newsugar.coffeeProfile())

//   Latte Maker: create a class for Latte

// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.

class Latte {
    constructor(flavor, milk, shot) {
      this.flavor = flavor.toLowerCase()
      this.milk = milk
      this.shot = shot
    } 

  
    latteProfile() {
      return `A ${this.flavor} latte with ${this.milktype ()}, and  ${this.shots()}`
    }
    blackcoffee () {
        if (this.type === "black" && this.cream === 0 && this.sugars === 0 ) {
            return `A ${this.type} blackcoffee` 
        }
    }
     
    milktype() {
        if (this.milk !== null)
      {return `${this.milk} milk`

      } else {
        return "no milk"
      }
    }
  
    shots() {
      if (this.shot === "double" || this.shot === "single" ) {
        return `${this.shot} shot`
      } 
      }
    }
  const newlatte = new Latte ("regular", null, "single")
  console.log (newlatte.latteProfile())
  const hazelnut = new Latte ("hazelnut", "almound", "double") 
  console.log (hazelnut.latteProfile())

  class Cylinder {
    constructor(radius, height) {
      this.radius = height
      this.height = radius
    }

    volume (){
        return  (this.radius *2) * this.height * Math.PI 
    }
}
const newcyl = new Cylinder (2,7)
console.log (newcyl.volume().toFixed(4))
const newcyl1 = new Cylinder (4,8)
console.log (newcyl1.volume().toFixed(2))
const newcyl2 = new Cylinder (20,150)
console.log (newcyl2.volume().toFixed(18))