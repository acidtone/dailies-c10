import {animals} from '../../assets/data/animal-objects.js'

// Hidden magic
let foundItem;

const findFunction = (sourceArray, callback) => {
  for(const item of animals) {
    if (callback(item)) {
      foundItem = item;
      break;
    }
  }
  return foundItem;
}

// Our visible code: long way
// const handleItem = (item) => {
//   if (item.title === 'Pug') {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(findFunction(animals, handleItem));

// visible code: short way
console.log(findFunction(animals, item => item.title === 'Pug'));