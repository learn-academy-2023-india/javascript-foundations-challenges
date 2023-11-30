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

// const black = new Coffee ("black", 0, 0)
// console.log(black.coffeeProfile())
// const black2 = new Coffee ("sweet", 1, 2)
// console.log(black2.coffeeProfile())


// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.
// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects


class Latte {
    constructor(flavor, milkType, shots) {
      this.flavor = flavor.toLowerCase();
      this.milkType = milkType.toLowerCase();
      this.shots = shots;
    }
  
    latteProfile() {
      return `A ${this.flavor} latte with ${this.milkType} milk, and ${this.shotsFunction()} of Espresso!`;
    }
  
    shotsFunction() {
      if (this.shots > 1) {
        return `${this.shots} shots`;
      } else {
        return `${this.shots} shot`;
      }
    }
  }
  
  const latte1 = new Latte("regular", "Whole", 1);
  
  console.log(latte1.latteProfile());

//   class Cylinder{
//     constructor(volume, radius, height) {
//         this.volume = 3.14 * radius ** 2 * height
//         this.radius = radius
//         this.height = height
//     }
// }
// var cylinderVolume = new Cylinder(volume = this.radius * this.height, 4, 9)
// console.log(cylinderVolume)

// const roundedNumber = Math.ceil(originalNumber * 10000) / 10000;

// console.log(roundedNumber.toFixed(4));

class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
  
    calculateVolume() {
      const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
      return parseFloat(volume.toFixed(4)); // Rounds to four decimal places
    }
  }
  
  // Create three unique cylinder objects
  const cylinder1 = new Cylinder(3, 5);
  const cylinder2 = new Cylinder(2, 8);
  const cylinder3 = new Cylinder(4, 6);
  
  // Display the volumes of the cylinders
  console.log("Cylinder 1 Volume:", cylinder1.calculateVolume());
  console.log("Cylinder 2 Volume:", cylinder2.calculateVolume());
  console.log("Cylinder 3 Volume:", cylinder3.calculateVolume());