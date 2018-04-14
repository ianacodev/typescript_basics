/*****************************
 * Generic
 * Create for of dynamic type
 *****************************/

// car
class Car {
  constructor(private model: string, private year: number) {}
}

// driver
class Driver {
  constructor(private firstname: string, private lastname: string) {}
}

class List<T> {
  private list: Array<T> = [];

  addItem(item: T): void {
    this.list.push(item);
  }

  getList(): Array<T> {
    return this.list;
  }
}

const carList = new List<Car>();
carList.addItem(new Car('Volvo', 2007));
carList.addItem(new Car('Ford', 2010));
console.log('Car list: ', carList.getList());

const driverList = new List<Driver>();
driverList.addItem(new Driver('John', 'Smith'));
driverList.addItem(new Driver('Mark', 'Stevens'));
console.log('Driver list: ', driverList.getList());
