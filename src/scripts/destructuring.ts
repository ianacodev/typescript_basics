/*****************************
 * Destructuring
 * Pluck properties from objects and arrays
 *****************************/
// Object example
const testCar = {
  name: "Volvo",
  colors: ["Red", "Green", "Blue"]
};

// rename destructured variable.
function getCar({ name: carName, colors: carColors }) {
  console.log(carName, carColors);
  return { carName, carColors };
}

const newCarObj = getCar(testCar);
console.log("New Car Object: ", newCarObj);

// Array example.
const months = ["January", "February", "March", "April", "May"];
const [m0, m1, m2] = months;
console.log(`
    Months From Variable:
    month0: ${m0}
    month1: ${m1}
    month2: ${m2}`);
function getMonths([m0, m1, m2]: Array<string>) {
  console.log(`
    Months From Function: 
    month0: ${m0}
    month1: ${m1}
    month2: ${m2}`);
}

getMonths(months);
