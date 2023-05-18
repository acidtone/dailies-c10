import {animals} from '../../assets/data/animal-objects.js'

const newArray = [];

for(const item of animals) {
  const newItem = {
    title: item.title,
    fileName: item.fileName
  }
  newArray.push(newItem);
}


console.log(newArray);