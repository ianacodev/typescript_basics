/*****************************
 * Classes
 *****************************/
// protected / private memebers of class cannot be added to interface.
interface SizeInterface {
  availableSizes: string[];
}

// abstract class - prevents instanciation.
// creates class you just want to extend from and not invoke.
abstract class SizesX implements SizeInterface {
  // protected maintain private memeber but access in inherited class.
  constructor(protected sizes: string[]) {}

  // setters / getters always public
  // use in cases want to intercept/manipulate data before set/get
  // this will compile down to Object.defineProperty.
  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes(): string[] {
    return this.sizes;
  }
}

/*
const sizes = new SizesX(['small', 'medium']); // error due to abstract class
console.log('Available Sizes: ', sizes.availableSizes);
sizes.availableSizes = ['medium', 'large'];
console.log('Available Sizes: ', sizes.availableSizes);
*/

interface PackageInterface extends SizesInterface {
  readonly name: string;
  shipping: string[];
  updateSizes(sizes: string[]): void;
  addShipping(shipping: string): void;
}

class Package extends SizesX implements PackageInterface {
  static insuranceDetails: string = 'Insured packages will be covered up to $1,000.00';
  public shipping: string[] = [];

  constructor(readonly name: string, sizes: string[]) {
    super(sizes);
  }

  public updateSizes(sizes: string[]): void {
    this.sizes = sizes;
  }

  public addShipping(shipping: string): void {
    this.shipping.push(shipping);
  }

  static insurePackage(name: string): string {
    return `Package '${name}' is insured.`;
  }
}

const package1 = new Package('Important Items', ['small', 'medium']);
console.log('Package Sizes: ', package1.availableSizes);
package1.addShipping('ground');
console.log('Shipping Options: ', package1.shipping);
package1.updateSizes(['extra small', 'medium', 'large']);
console.log('Package Sizes: ', package1.availableSizes);
console.log(Package.insuranceDetails);
console.log(Package.insurePackage(package1.name));
