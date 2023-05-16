// Logical NOT
!true // false

const logicalNOT = (operand) => {
  if (operand === true) {
    return false;
  } else {
    return true;
  }

}

const divide = (operand1, operand2) => {
  return operand1 / operand2;
}

console.log(divide(5, 9));
