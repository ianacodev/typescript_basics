/*****************************
 * String Enums and Inlining Members
 *****************************/
// inline members (add const infront of enum), might be a better way to manage variable
// if using multiple times in the application may be better to just generate object instead of inline.
// inline creates non numeric enums - plain string values (no reverse mapping ie numeric keys).
const enum Colors {
  Red,
  Green,
  Blue
}

let selectedColor: Colors = Colors.Blue;
console.log('Color: ', selectedColor);

// can use enum as type to function argument.
function updateColor(color: Colors): void {
  selectedColor = color;
}

updateColor(Colors.Green);
console.log('Color: ', selectedColor);
