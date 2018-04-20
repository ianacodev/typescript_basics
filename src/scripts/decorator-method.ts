/*****************************
 * Method Decorator
 *****************************/

// decorator.
function calc(
  target,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor | void {
  var oldValue = descriptor.value;

  descriptor.value = function() {
    const n1 = arguments[0];
    const n2 = arguments[1];

    return `
      add: ${n1 + n2},
      sub: ${n1 - n2},
      mul: ${n1 * n2},
      div: ${n1 / n2}
    `;
  };
  return descriptor;
}

class MyMath {
  @calc
  public getResults(n1, n2) {
    return `Get Results: ${n1} ${n2}`;
  }
}

const myMath = new MyMath();
console.log(myMath.getResults(10, 5));
