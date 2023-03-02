// Step 1: Declare function
const greet = function(name, lang) {

  if (lang === 'es') {
    console.log(`Hola, ${name}!`);

  } else if (lang === 'fr') {
    console.log(`Bonjour, ${name}!`);

  } else if (lang === 'ch') {
    console.log(`Nihao, ${name}!`);

  } else {
    console.log(`Hi, ${name}!`);
  }
}

// Step 2: Invoke function
greet('Tony', 'ch');

greet('Cordelle', 'fr');

greet('Deadpool', 'es');

greet('The Last of Us', 'en');