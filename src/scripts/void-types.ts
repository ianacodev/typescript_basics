/*****************************
 * Void type.
 * No type at all.
 *****************************/
let selectedCar = 'Volvo';

// pure function wont mutate any value outside itself, pass data in and return data.
// impure function mutates variable outside function.
// might not want to add void to every function (but good for readability)
function changeSelectedCar(car: string): void {
  selectedCar = car;
}

console.log('Selected Car: ', selectedCar);
changeSelectedCar('Ford');
console.log('Selected Car: ', selectedCar);
