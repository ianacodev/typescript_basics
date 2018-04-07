/*****************************
 * Boolean Types
 *****************************/
const FREE_SHIPPING_MINIMUM: number = 250.0;
const total: number = 205.25;

function applyFreeShipping(total: number): boolean {
  return total >= FREE_SHIPPING_MINIMUM;
}

const freeShippingStatus = applyFreeShipping(total);
let message: string;
if (freeShippingStatus === true) {
  message = 'Order qualifies for free shipping.';
} else {
  message = `Add $${FREE_SHIPPING_MINIMUM -
    total} to your total to qualify for free shipping.`;
}
console.log(message);
