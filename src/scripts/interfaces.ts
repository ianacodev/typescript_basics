/*****************************
 * Interfaces
 * More powerful type.
 *****************************/
/*
type Account = {
  firstname: string;
  lastname: string;
};
*/

interface AccountX {
  firstname: string;
  lastname: string;
}

// extend (inherit) interface.
interface CheckingAccount extends AccountX {
  overdraft: number;
  pin?: number;
  getAccountHolder(): string;
  [key: string]: any; // index signature to create dynamic key value pairs.
} // treat data structure as indexs and look up those dynamically
// string or number - [key: number]: string

let checkAccount: CheckingAccount;

function createCheckingAccount(
  firstname: string,
  lastname: string,
  overdraft: number
): CheckingAccount {
  return {
    firstname,
    lastname,
    overdraft,
    getAccountHolder() {
      return firstname + ' ' + lastname;
    }
  };
}

checkAccount = createCheckingAccount('John', 'Smith', 50);
checkAccount.pin = 123;
checkAccount['route'] = Math.ceil(Math.random() * 100000);
checkAccount['id'] = Math.ceil(Math.random() * 100000);
console.log('Checking Account: ', checkAccount);
