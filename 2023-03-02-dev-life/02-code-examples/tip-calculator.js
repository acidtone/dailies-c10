// Declare function
const calculateTip = function(billTotal, tipRate) {
  if (typeof billTotal === 'undefined') {
    billTotal = 50;
  }
  if (typeof tipRate === 'undefined') {
    tipRate = 0.18;
  }

  const tipPercentage = `${tipRate * 100}%`;
  const tip = billTotal * tipRate;

  console.log(`${tipPercentage} tip on $${billTotal} is $${tip.toFixed(2)}.`);
}

// Bill 1
const tipRate1 = 0.18;
const billTotal1 = 40;

calculateTip(billTotal1, tipRate1);

// Bill 2
const tipRate2 = 0.23;
const billTotal2 = 36.74;

calculateTip(billTotal2, tipRate2);

// Bill 3
const tipRate3 = 0.21;
const billTotal3 = 74;

calculateTip(billTotal3, tipRate3);