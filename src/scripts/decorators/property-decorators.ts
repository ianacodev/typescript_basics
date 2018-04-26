/*****************************
 * Property Decorator
 *****************************/

function append(target: Object, key: string): void {
  const originalDescriptor:
    | PropertyDescriptor
    | undefined = Object.getOwnPropertyDescriptor(target, key);
  let value;
  Object.defineProperty(target, key, {
    set: val => {
      value = val;
      if (originalDescriptor) {
        value = checkDescriptor('Append', originalDescriptor, val);
      }
      value = value.concat('.');
    },
    get: (): string => value,
    configurable: true
  });
}

function upper(target: Object, key: string): void {
  const originalDescriptor:
    | PropertyDescriptor
    | undefined = Object.getOwnPropertyDescriptor(target, key);
  let value;
  Object.defineProperty(target, key, {
    set: val => {
      value = val;
      if (originalDescriptor) {
        value = checkDescriptor('Upper', originalDescriptor, val);
      }
      value = value.toUpperCase();
    },
    get: (): string => value,
    configurable: true
  });
}

function checkDescriptor(
  name: string,
  originalDescriptor: PropertyDescriptor,
  val: any
): any {
  console.log(`${name}: descriptor detected.`);
  if (originalDescriptor.set) {
    console.log(`${name}: Set detected.`);
    originalDescriptor.set(val);
  }
  if (originalDescriptor.get) {
    console.log(`${name}: Get detected.`);
    return originalDescriptor.get().toUpperCase();
  }
  return val;
}

class Member {
  @upper
  @append
  public title: string;
  public fname: string;
  public lname: string;

  constructor(title, fname, lname) {
    this.title = title;
    this.fname = fname;
    this.lname = lname;
  }
}

const member = new Member('Mr', 'John', 'Smith');

console.log(`
 --------------------------------
 Member: ${member.title} ${member.fname} ${member.lname}
 --------------------------------
 `);
