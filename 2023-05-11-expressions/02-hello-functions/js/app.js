const greet = () => {
  console.log('Hi!');
}

greet();

const greet2 = () => {
  return "Hi, from my expression!";
}

console.log(greet2());

let greeting = greet2();

const greeter = {
  salutation: 'Hi',
  greet: function(name) {
    return `${this.salutation}, ${name}`
  }
}

console.log(greeter.greet('Zack'));