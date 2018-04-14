/*****************************
 * Type Assertions
 * Know more about types than typescript can pick up on.
 *****************************/
type Person = {
  firstname: string;
  lastname: string;
  age: number;
};

const p1: Person = {
  firstname: 'John',
  lastname: 'Smith',
  age: 29
};

const serializedPerson = JSON.stringify(p1);
console.log('Serialized Persons: ', serializedPerson);

// here an implied type would be any
// so tell typescript when convert obj from string
// back to object give type as ts does not know.
function getFirstNameFromJSON(obj: string): string {
  // ts will infer JSON.parse(obj) as type any so assert type.
  // old assert <Person> (JSON.parse(obj))
  return (JSON.parse(obj) as Person).firstname;
}

console.log(
  'Deserialized Person First Name: ',
  getFirstNameFromJSON(serializedPerson)
);
