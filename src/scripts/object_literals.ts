/*****************************
 * Object literals
 *****************************/

// object literals used inside of object.
const car = {
  name: 'Volvo',
  model: 'S40'
};

const carColors = ['Red', 'Green', 'Blue'];

const inventoryOld = {
  car: car,
  carColors: carColors,
  getCarName: function() {
    return this.car.name;
  }
};

const inventoryNew = {
  car,
  carColors,
  getCarName(): string {
    return this.car.name;
  }
};

console.log('Inventory Old: ', inventoryOld);
console.log('Inventory New: ', inventoryNew);
console.log(
  'Inventory Match: ',
  JSON.stringify(inventoryOld) === JSON.stringify(inventoryNew)
);
console.log('Inventory Car: ', inventoryNew.getCarName());

// return object literal in function.
function getInventory(car: Object, carColors: Object) {
  return { car, carColors }; // returns an object literal.
}

console.log('Get Inventory: ', getInventory(car, carColors));
