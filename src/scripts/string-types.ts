/*****************************
 * String Types
 *****************************/
const code: string = 'save25';

function normalizeCode(code: string): string {
  return code.toUpperCase();
}

const codeMessage: string = `Final code is ${normalizeCode(code)}`;
console.log('Code Message: ', codeMessage);
