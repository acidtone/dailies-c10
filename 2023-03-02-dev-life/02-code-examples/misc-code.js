/**************************/
/* Example: Calculate GST */
/**************************/

const subTotal = 40;

const total = subTotal * 0.05 + subTotal;

console.log(`$${subTotal} plus GST is $${total}.`);


/****************************/
/* Example: Square a number */
/****************************/

const num = 4;

const numSquared = num * num;

// Concatenation
console.log(`${num} squared is ${numSquared}.`); // ES6
// console.log(num + ' squared is ' + numSquared + '.'); // ES5 - yuck


/**********************************************/
/* Example: Calculate fahrenheit from celsius */
/**********************************************/

const tempF = 72;
const tempPreference = 'celsius';
let temp;

if (tempPreference == 'celsius') {
  temp = (5 / 9) * (tempF - 32)
} else {
  temp = tempF;
}

console.log(`Temp is ${temp} degrees`);