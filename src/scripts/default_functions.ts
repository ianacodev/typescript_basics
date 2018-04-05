/*****************************
 * Default Functions
 *****************************/

// default argument value.
function multiply(n1: number, n2: number = 20) {
  return n1 * n2;
}

console.log("Multiply 2 * 5 =", multiply(2, 5)); // 10
console.log("Multiple 3 * default =", multiply(3)); // 60

function getName(firstname: string = "Unknown", lastname: string = "Unkown") {
  return firstname + " " + lastname;
}

console.log("Name: ", getName()); // Unknown Unknown
console.log("Name: ", getName("John")); // John Unknown
console.log("Name: ", getName("John", "Smith"));
