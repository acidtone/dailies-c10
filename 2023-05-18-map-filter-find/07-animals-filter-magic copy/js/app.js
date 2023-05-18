import {animals} from '../../assets/data/animal-objects.js'

// Hidden magic
const newArray = [];

const filterFunction = (sourceArray, callback) => {
  for(const item of animals) {
    if (callback(item)) {
      newArray.push(item);
    }
  }
  return newArray;
}

// Our visible code
const handleItem = (item) => {
  if (item.title === 'Pug') {
    return true;
  } else {
    return false;
  }
}

console.log(filterFunction(animals, handleItem));