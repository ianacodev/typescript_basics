/*****************************
 * Overloads
 * Different ways to use a function
 *****************************/

// Overloads declare different function arguments and the return types for same function.
// Overloads are virtual and used in typescript for type checking. These are not compliled
// to javascript because you cannot have duplicate functions.

// These are helpful for utility functions.

// overloads
function reverse(str: string): string;
function reverse<T>(arr: Array<T>): Array<T>;

function reverse<T>(stringOrArray: string | Array<T>): string | Array<T> {
  if (typeof stringOrArray === 'string') {
    return stringOrArray
      .split('')
      .reverse()
      .join('');
  }
  return stringOrArray.slice().reverse();
}

console.log(reverse('hello world'));
console.log(reverse(['Volvo', 'Saturn', 'Ford']));
