/*****************************
 * Object types.
 * Define signature of object.
 *****************************/
let employee: {
  id: number;
  firstname: string;
  lastname: string;
  getFullName(): string;
};

employee = {
  id: 123,
  firstname: 'John',
  lastname: 'Smith',
  getFullName() {
    return employee.firstname + ' ' + this.lastname;
  }
};

console.log(`Employee Name: ${employee.getFullName()}`);
