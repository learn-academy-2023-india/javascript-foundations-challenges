// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

// input = array of numbers
// output = numbers multipled by 3
// make descion about all numbers in the array

const multiplyByThree = arr => arr.map(number => number * 3);

const testArr1 = Array.from({ length: 10 }, (_, index) => index + 3); 
const multipliedArray = multiplyByThree(testArr1);
console.log(multipliedArray);



//  Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// input = function takes in Array of numbers
// output= new array of odd numbers

const filterOddNumbers = arr => arr.filter(number => number % 2 !== 0);
const testArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbersArray = filterOddNumbers(testArr2);
console.log(oddNumbersArray); 







//  Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof meth


// input = array of SVGAnimatedNumberList, and letters 
// output = string w/ only the letters
// use typeof 


const extractLetters = arr => arr.filter(item => typeof item === 'string').join('');
const mixedArray = [1, 'a', 2, 'b', 3, 'c'];
const lettersString = extractLetters(mixedArray);
console.log(lettersString);




// Create a function that takes in an array of numbers and returns the sum.
Create a fu

const extractLetters = arr => {
    const lettersString = arr.filter(item => typeof item === 'string' && /[a-zA-Z]/.test(item)).join('');
    console.log("good work " + lettersString);
};
const comboarr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"];
extractLetters(comboarr);





// Create a function that takes in an array of numbers and returns the index of the largest number.