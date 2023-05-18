import {animals} from '../../assets/data/animal-objects.js'

const handleItem = item => {
  return {
    title: item.title,
    fileName: item.fileName
  }
}

const myMap = animals.map(handleItem);

console.log(myMap);