const pizzas = [
  {
    name: "Plain",
    toppings: ["cheese"]
  }
];

// implicit return, return will be added when compiled down to es5.
const mappedPizzas = pizzas.map((pizza, index) => pizza.name.toUpperCase());

console.log(mappedPizzas);

/*
const pizza = {
  name: "Blazing Inferno",
  getName: function() {
    setTimeout(() => { // arrow function ignores scope, not binding any this value (kind of inherits the scope, will use whatever this value available)
      console.log(this.name);
    }, 100);
  }
};
*/

const pizza = {
  name: "Blazing Inferno",
  getName: () => pizza.name // cant use this here because the arrow function is placed on the object itself.
};

console.log(pizza.getName());
