/* Hidden magic */
let newArray = []; // array that's eventually returned

const mapFunction = (sourceArray, callback) => {
  for (const item of sourceArray) {
    newArray.push(callback(item));
  }
  return newArray;
}

/* Your code */
const myArray = [1, 4, 9, 16];

const myNewArray = mapFunction(myArray, item => item * 2);

console.log(myNewArray)
// Expected output: Array [2, 8, 18, 32]