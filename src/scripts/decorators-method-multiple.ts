/*****************************
 * Multiple Method Decorator
 *****************************/

function decorator1(
  target,
  key: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  var oldValue = descriptor.value;
  descriptor.value = function() {
    console.log(`
    ---------------------------------
    Old descriptor value: ${oldValue}
    ---------------------------------
    `);
    const str = oldValue.apply(null, arguments);
    return str.concat(' descriptor1');
  };
  return descriptor;
}

function decorator2(
  target,
  key: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  var oldValue = descriptor.value;
  descriptor.value = function() {
    console.log(`
    ---------------------------------
    Old descriptor value: ${oldValue}
    ---------------------------------
    `);
    const str = oldValue.apply(null, arguments);
    return str.concat(' descriptor2');
  };
  return descriptor;
}

class Bar {
  @decorator1
  @decorator2
  test(str: string) {
    return str;
  }
}

const bar = new Bar();
console.log(`Bar Test: ${bar.test('hello')}`);
