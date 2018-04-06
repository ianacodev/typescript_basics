/*****************************
 * Number Type
 *****************************/
/*
// Javascipt types.
new Number();
new Boolean();
new String();
15; // primitive

// Typescript types.
const pizzaCost: number = 10;
const pizzaToppings: number = 5;

function calculatePrice(cost: number, toppings: number): number {
  return cost + 1.5 * toppings;
}

const cost: number = calculatePrice(pizzaCost, pizzaToppings);
console.log("Pizza cost: ", cost);
*/

/*****************************
 * String Types
 *****************************/
/*
const coupon: string = 'pizza25';

function normalizeCoupon(code: string): string {
  return code.toUpperCase();
}

const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;
console.log('Coupon Message: ', couponMessage);
*/

/*****************************
 * Boolean Types
 *****************************/
const pizzas: number = 2;

function offerDiscount(orders: number): boolean {
  return orders > 3;
}

if (offerDiscount(pizzas)) {
  console.log(`You're entitled to a discount!`);
} else {
  console.log(`Order more than 3 pizzas for a discount!`);
}
