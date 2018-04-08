/*****************************
 * Type Aliases
 *****************************/
// can assign anything to type.
// aliase type purely for type checking.
type Employee = 'intern' | 'contractor' | 'full-time';
type Callback = (employee: Employee) => void;

let employeeType: Employee = 'contractor';
console.log('Employee: ', employeeType);

/*
const selectedEmployee = (employee: Employee): void => {
  employeeType = employee;
};
*/

const selectedEmployee: Callback = (x): void => {
  employeeType = x;
};
selectedEmployee('intern');
console.log('Employee: ', employeeType);
