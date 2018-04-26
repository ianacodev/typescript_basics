/*****************************
 * Method Decorators
 *****************************/

function muldiv(
  target: Object,
  key: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  let originalValue = descriptor.value;
  descriptor.value = (...args): string => {
    let value = originalValue.apply(target, args);
    return `
    ${value}
    Mul: ${args[0] - args[1]}
    Div: ${args[0] - args[1]}
    `;
  };
  return descriptor;
}

function addsub(
  target: Object,
  key: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  let originalValue = descriptor.value;
  descriptor.value = (...args): string => {
    let value = originalValue.apply(target, args);
    return `
    ${value}
    Add: ${args[0] + args[1]}
    Sub: ${args[0] - args[1]}
    `;
  };
  return descriptor;
}

class MyCalculator {
  constructor() {}

  @muldiv
  @addsub
  public calculate(n1: number, n2: number): string {
    return `
    Number1: ${n1} 
    Number2: ${n2}
    `;
  }
}

const myCalc = new MyCalculator();
console.log(myCalc.calculate(10, 5));
