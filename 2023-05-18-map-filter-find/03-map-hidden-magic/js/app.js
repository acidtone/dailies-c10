/******************************/
/* Hidden magic behind .map() */
/******************************/

let newArray = [];

const mapArray = (callback) => {
  for (const item of myArray) {
    newArray.push(callback(item));
  }
  return newArray;
}

/*************/
/* Your code */
/*************/

const myArray = [1, 4, 9, 16];

const handleItem = (item) => {
  return item * 2;
}

const myNewArray = mapArray(handleItem);

console.log(myNewArray)
// Expected output: Array [2, 8, 18, 32]
