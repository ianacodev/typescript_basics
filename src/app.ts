/*****************************
 * Generic
 * Create for of dynamic type
 *****************************/

class Pizza {
  constructor(private name: string, private price: number) {}
}

class Coupon {
  constructor(private name: string) {}
}

//Dynamic variable can infer type down to list class
class List<T> {
  private list: T[] = [];

  addItem(item: T): void {
    this.list.push(item);
  }

  getList(): T[] {
    return this.list;
  }
}

// use type inference and pass info down into the list.
// returns whatever type passed to list.
const list = new List<Pizza>();
list.addItem(new Pizza('plain', 15));
const pizzas = list.getList();

const anotherList = new List<Coupon>();
anotherList.addItem(new Coupon('SAVE_25'));
const coupons = anotherList.getList();

/*****************************
 * Overloads
 * Different ways to use a function
 *****************************/
// overload declares diff function args you can pass in and the return types
// in ts different these are simply for type checking.

// overload functions these declare diff args and variables can pass in and return types.
// work best in utility functions. These dont get complied down to js becuase cant have dup functions
function reverse(str: string): string; // -- these overloads are virtual..just tells ts we have multiple
function reverse<T>(arr: T[]): T[]; // ways to pass in

// this is the implementation function.
function reverse<T>(stringOrArray: string | T[]): string | T[] {
  if (typeof stringOrArray === 'string') {
    return stringOrArray
      .split('')
      .reverse()
      .join('');
  }
  // slice copies array and returns reverse version, becuase
  // js passes objects by reference.
  return stringOrArray.slice().reverse();
}

console.log(reverse('Ford'));
console.log(reverse(['Ford', 'Volvo', 'Saturn']));
