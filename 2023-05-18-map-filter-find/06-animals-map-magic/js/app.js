import {animals} from '../../assets/data/animal-objects.js'

// Hidden magic
const newArray = [];

const mapFunction = (sourceArray, callback) => {
  for(const item of animals) {
    newArray.push(callback(item));
  }
  return newArray;
}

// Our visible code
const handleItem = (item) => {
  return {
    title: item.title,
    fileName: item.fileName
  }
}

console.log(mapFunction(animals, handleItem));