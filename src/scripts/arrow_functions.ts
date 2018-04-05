/*****************************
 * Arrow functions
 *****************************/
const cars = [
  {
    name: "Volvo",
    colors: ["red", "green", "blue"]
  }
];

// implicit return ('return' keyword is added when compiled down to es5)
const mappedCars = cars.map((car, index) => car.name.toUpperCase());
console.log("Mapped Cars: ", mappedCars);

const carA = {
  name: "Volvo S40",
  getName: function() {
    console.log("CarA Name: ", this.name);
  }
};

carA.getName();

// scope example.
const carB = {
  name: "Audi R8",
  getName: function() {
    setTimeout(function() {
      console.log("Scope for CarB: ", this); // this now refers to the scope of the setTimout.
      console.log("CarB Name: ", this.name);
    });
  }
};

carB.getName();

// arrow functions ignores scope, do not bind this.
// (similar to inheriting the scope, will use whatever 'this' value is available);
const carC = {
  name: "BMW i8",
  getName: function() {
    setTimeout(() => console.log(this.name));
  }
};

carC.getName();

// each 'function' creates a new scope and context.
// context often determined by how a function is invoked.
// when a function is called as a method of an object, 'this'
// is set to the object the method is called on.
const obj = {
  foo: function() {
    return this;
  }
};

console.log("Object Context ", obj.foo() === obj);

// same principle applies when invoking a function with the new operator
// to create an instance of an object.
function foo() {
  console.log("foo this:", this);
}

foo(); // window (if not in strict mode, else undefined).
new foo(); // foo
