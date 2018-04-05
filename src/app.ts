/*****************************
 * Rest parameter - any number of args into single variable
 *****************************/
/*
function sumAll(message: string, ...arr: Array<number>) {
  console.log("message: ", message);
  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll("hello world", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(sum);
*/

/*****************************
 * Array Spread operator
 *****************************/
/*
const toppings = ["toppingA", "toppingB"];
const newToppings = ["toppingC"];
const allToppings = [...toppings, ...newToppings]; // copy of arrays
console.log("all toppings: ", allToppings);
const allToppingsNewOrder = [...newToppings, ...toppings];
console.log(allToppingsNewOrder);
*/

/*****************************
 * Destructuring - pluck out things from objects and arrays
 *****************************/
const pizza = {
  name: "Plain",
  toppings: ["toppingA"]
};

// can rename variable
function order({ name: pizzaName, toppings: pizzaToppings }) {
  console.log(pizzaName, pizzaToppings);
  return { pizzaName, pizzaToppings };
}
const { pizzaName } = order(pizza);
console.log("test", pizzaName);

// array destructring
const toppings = ["toppingA", "toppingB", "toppingC"];

const [first, second, third] = toppings;
console.log(first, second, third);

function logToppings([first, second, third]: any) {
  console.log(first, second, third);
}
logToppings(toppings);
