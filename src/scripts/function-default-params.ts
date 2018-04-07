/*****************************
 * Typed functions and Default Params
 *****************************/
let calculateTotal: (cost: number, quantity?: number) => number;

calculateTotal = (c, q = 1) => c * q;

console.log(`Total Cost ${calculateTotal(1.45, 5).toFixed(2)}`);
console.log(`Total Cost ${calculateTotal(2.35).toFixed(2)}`);
