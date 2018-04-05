/*****************************
 * Arrow functions
 *****************************/
/*
const pizzas = [
  {
    name: "Plain",
    toppings: ["cheese"]
  }
];

// implicit return, return will be added when compiled down to es5.
const mappedPizzas = pizzas.map((pizza, index) => pizza.name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
  name: "Blazing Inferno",
  getName: function() {
    setTimeout(() => { // arrow function ignores scope, not binding any this value (kind of inherits the scope, will use whatever this value available)
      console.log(this.name);
    }, 100);
  }
};

const pizza = {
  name: "Blazing Inferno",
  getName: () => pizza.name // cant use this here because the arrow function is placed on the object itself.
};

console.log(pizza.getName());
*/

/*****************************
 * Default functions
 *****************************/
/*
function multiply(a: number, b: number = 25) {
  return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 35));
*/

/*****************************
 * Object litteral
 *****************************/
/*
const pizza = {
  name: "Plain",
  price: 15
};

const toppings = ["plain"];
const order = {
  name: "test",
  pizza,
  toppings,
  getName(): string {
    return this.name;
  }
};

console.log(order.getName());

console.log(order);

function createOrder(pizza: Object, toppings: Object) {
  return { pizza, toppings };
}

console.log("create order: ", createOrder(pizza, toppings));
*/

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
