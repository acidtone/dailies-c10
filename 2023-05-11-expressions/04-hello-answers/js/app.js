let city = 'mISsISsIPPI';




city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()



console.log(city);

const $$ = {
  start: 0,
  end: 1,
  doStuff: 2,
}

const ___location___ = [$$.start];

function goto(x){
  ___location___[0] = x;
}

while(true) {
  switch(___location___[0]) {
      case $$.start:
          goto($$.doStuff);
          continue;
      case $$.doStuff:
          goto($$.end);
          continue;
      case $$.end: {
          break;
      }
      default: break;
  }
  break;
}

const uniqueInOrder = d => {
  [...d].filter(
    (x, i, a) => {
      x != a[i + 1]
    }
  )
}