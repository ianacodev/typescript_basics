/*****************************
 * Ways to define properties
 *****************************/
const util = require('util');
interface Temp {
  fname: string;
  lname: string;
  getFullname: () => string;
}

// Define 1
const temp1: Temp = {
  fname: 'John',
  lname: 'Smith',
  getFullname: () => `${temp1.fname} ${temp1.lname}`
};

console.log(`
Method: Object Literal
-------------------------------
Fname: ${temp1.fname}
Lname: ${temp1.lname}
FullName: ${temp1.getFullname()}
-------------------------------
`);

// Define 2
const temp2: any = {};
temp2.fname = 'David';
temp2.lname = 'Young';
temp2.getFullname = () => `${temp2.fname} ${temp2.lname}`;

console.log(`
Method: Object
-------------------------------
Fname: ${temp2.fname}
Lname: ${temp2.lname}
FullName: ${temp2.getFullname()}
-------------------------------
`);

// Define 3
const temp3: any = {};
Object.defineProperties(temp3, {
  fname: {
    value: 'Jim',
    writable: false,
    enumerable: false,
    configurable: false
  },
  lname: {
    value: 'Rogers',
    writable: false,
    enumerable: false,
    configurable: false
  },
  getFullname: {
    value: () => `${temp3.fname} ${temp3.lname}`,
    writable: false,
    enumerable: false,
    configurable: false
  }
});

console.log(`
Method 3
------------------------------
Fname: ${temp3.fname}
Lname: ${temp3.lname}
FullName: ${temp3.getFullname()} 
------------------------------
`);
