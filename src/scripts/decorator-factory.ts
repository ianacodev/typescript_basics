/*****************************
 * Method Decorator
 * Customize the decorator that is being applied
 * Decorator Factory takes custom arguments and returns the decorator function
 * now the decorator can use the data passed into the factory function
 *****************************/

function decoratorFactory(random: string) {
  return function(
    target,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    var oldValue = descriptor.value;

    descriptor.value = function() {
      return `${arguments[0]} ${arguments[1]} [${random}]`.toUpperCase();
    };
    return descriptor;
  };
}

class Customer {
  @decoratorFactory('string uppercase')
  getFullName(fname: string, lname: string): string {
    return `${fname} ${lname}`;
  }
}

const cust = new Customer();
console.log(cust.getFullName('john', 'smith'));
