/*****************************
 * Functions and Optional Arguments
 *****************************/
let calculateTotalCost: (cost: number, quantity?: number) => number;

calculateTotalCost = (c, q) => {
  let total: number = c;
  if (q) {
    total = c * q;
  }
  return total;
};

console.log(`Total cost ${calculateTotalCost(2.5, 3).toFixed(2)}`);
console.log(`Total cost ${calculateTotalCost(10.25).toFixed(2)}`);
