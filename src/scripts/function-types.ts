/*****************************
 * Function types.
 *****************************/
let addValues: Function;

addValues = (n1: number, n2: number): number => {
  return n1 + n2;
};

const totalValue = addValues(10, 2);
console.log('Total Value: ', totalValue);

let getFullName: (firstname: string, lastname: string) => string;

getFullName = (fn, ln) => `${fn} ${ln}`;

const fullName = getFullName('John', 'Smith');
console.log(fullName);
