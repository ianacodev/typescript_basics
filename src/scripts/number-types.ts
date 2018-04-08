/*****************************
 * Number Type
 *****************************/
const carCost: number = 25000;
const quantity: number = 2;

function calculatePrice(carCost: number, quantity: number): number {
  return carCost * quantity;
}

const totalCost: number = calculatePrice(carCost, quantity);
console.log('Total Cost: $' + totalCost.toFixed(2).toLocaleString());
