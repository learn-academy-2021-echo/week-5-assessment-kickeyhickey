// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


describe("hello", () => {
  it("takes in a string and converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 ", () => {
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"
    //use expect to take in variables and return expected output with .toEqual
    expect(codeMaker(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codeMaker(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codeMaker(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

    // ERROR: codeMaker is not defined

// b) Create the function that makes the test pass.

// create a function that takes in a string. 
const codeMaker = (string) =>{
  // define letters to replace and iterate over string replacing those values
  // use .replace and create a regex. Use built in replace funtion by creating an object with key value pairs
  return string.replace(/[aeioAEIO]/g, value => ({'a': 4, 'A':4, 'e': 3, 'E': 3, 'i': 1, 'I': 1, 'o': 0, 'O':0}) [value])
}
console.log(codeMaker(secretCodeWord1));
console.log(codeMaker(secretCodeWord2));
console.log(codeMaker(secretCodeWord3));


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("onlyWords", () => {
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    //use expect to take in variables and return expected output with .toEqual
    expect(onlyWords(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(onlyWords(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})
    //ERROR: onlyWords is not defined
// b) Create the function that makes the test pass.

// create a function that takes in an array and a single letter
const onlyWords = (words, letter) =>{
  //iterate over the array and test if each value has the letter argument
  // find a use for .toUpperCase()
  return words.filter(value => value.includes(letter) || value.includes( letter.toUpperCase()) ? value : null)
}
console.log(onlyWords(arrayOfWords1, letterA));
console.log(onlyWords(arrayOfWords2, letterE));

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("poker", () => {
  it("a function that takes in an array of 5 numbers and determines whether or not the array contains a pair and three of a kind", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    //use expect to take in variables and return expected output with .toEqual
    expect(poker(hand1)).toEqual(true)
    expect(poker(hand2)).toEqual(false)
    expect(poker(hand3)).toEqual(false)
  })
})

    // ERROR: poker is not defined


// b) Create the function that makes the test pass.





    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false   


    // create function that takes in an array. Define a variable to catch the the number of times a value is repeated in the array
const poker = (array) =>{
    let nums = []
    // iterate over array and push the sum of the repeated numbers to the nums array
    array.map((v,i,a) =>{
      //create a variable to hold our sum by setting it equal to each value in the array
      let newVal = a[i]
      // ask if our empty array already contains a value. If yes add 1 to an index, if no the value only recieves a 1 count
      nums[newVal] ? nums[newVal] += 1 : nums[newVal] = 1
    })
    // Now we look into our array to see if a value was counted 3 times and 2 times
    return nums.includes(3) && nums.includes(2) ? true : false
}
console.log(poker(hand1));
console.log(poker(hand2));
console.log(poker(hand3));