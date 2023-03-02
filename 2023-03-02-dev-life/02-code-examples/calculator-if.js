const firstNum = 6;

const secondNum = 98.3;

const operation = 'add';

console.log(operation);


if (operation === 'add') {
  // Add the two numbers
  const sum = firstNum + secondNum;
  console.log(`The sum of ${firstNum} and ${secondNum} is ${sum}.`);
}

if (operation === 'subtract') {
  // Subtract the two numbers
  const difference = firstNum - secondNum;
  console.log(`The difference between ${firstNum} and ${secondNum} is ${difference}.`);
}

if (operation === 'multiply') {
  // Multiply the two numbers
  const product = firstNum * secondNum;
  console.log(`The product of ${firstNum} and ${secondNum} is ${product}.`);
}

if (operation === 'divide') {
  // Divide the two numbers
  const quotient = firstNum / secondNum;
  console.log(`The quotient of ${firstNum} and ${secondNum} is ${quotient}.`);
}

// Bug: This console log runs even if `operation` is a valid value
// See 03a-calculator-elseif-else
console.log('Please enter a valid operation');