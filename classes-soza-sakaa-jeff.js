// Coffee Maker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile

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
// var coffee1 = new Coffee ("Black" , 0 ,0 )
// var coffee2 = new Coffee ("Black" , 1, 2 )
// console.log(coffee1.coffeeProfile());
// console.log(coffee2.coffeeProfile());

// Latte Maker: create a class for Latte

// // Write a Latte class that takes a flavor, a milk type, and a number of shots
// // Write a method for your Latte class that outputs the latte's profile
// // Write the code that makes a regular, single shot latte
// // Log the regular, single shot latte's profile
// // Write the code that makes a double shot, hazelnut latte with almond milk.
// // Log the double shot, hazelnut latte with almond milk's profile.

class Latte {
    constructor (flavor, milkType, shot)
        this.flavor = flavor
        this.milkType = milkType
        this.shot = shot
}
    latteProfile() {
  return `A ${this.flavor} latte with ${this.milkType} milk, ${this.shot()}`
    }
    shot() {
      if (this.shot > 1) {
        return `${this.shot} shots`
      } else {
        return `${this.shot} shot`
      }
    }

  var latte1 = new Latte ("hazelnut" , "almond" , 2 )
  console.log(latte1.latteProfile());


// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects

// SAKAA METHOD
class Cylinder {
    constructor(radius,height){
        this.radius = radius
        this.height = height    
    }
    
    volume (){
        return (Math.PI * this.radius ** 2 * this.height).toFixed(4)
    }
}

const vol1 = new Cylinder (1,5)
console.log(vol1.volume())
const vol2 = new Cylinder (5,10)
console.log(vol2.volume())
const vol3 = new Cylinder (15,20)
console.log(vol3.volume())

// SOZA'S SUPER COMPLICATED HIGHLY DONT RECOMMEND METHOD THAT WORKS BUT KEEP IN MIND TO INVOKE A METHOD YOU NEED TO USE () ON AN ALREADY EXISITNG METHOD. IF INVOKING AN OBJECT USE DOT METHOD (.)

// Volume of a Cylinder: create a class for Cylinder

// class Cylinder {
//     constructor(radius, height) {
//     this.radius = radius
//     this.height = height
// }
// radiusSq() {
//     return this.radius ** 2
// }
// radiusSqTimesPi() {
//     return this.radiusSq() * Math.PI
// }
// radiusSqTimesPiTimesHeight() {
//     return this.radiusSqTimesPi() * this.height
// }
// totalMath () {
//     let volume = this.radiusSqTimesPiTimesHeight()
//     return volume.toFixed(4)
//     }
// }
// const volume1 = new Cylinder(2,6)
// console.log (volume1.totalMath())
// 