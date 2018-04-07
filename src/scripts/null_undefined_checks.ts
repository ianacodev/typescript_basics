/*****************************
 * Null, Undefined, String Null checks
 *****************************/
// union types.
let tempCode: string | null = 'save25';

function removeCode(): void {
  tempCode = null;
}

console.log('Code: ', tempCode);
removeCode();
console.log('Code: ', tempCode);

let tempStatus: string | undefined = 'approved';

function removeStatus(): void {
  tempStatus = undefined;
}

console.log('Status: ', tempStatus);
removeStatus();
console.log('Status: ', tempStatus);
