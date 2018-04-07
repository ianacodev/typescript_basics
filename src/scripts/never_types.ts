/*****************************
 * Never type.
 * Telling ts compiler value will never occur.
 * Add to a function when the return type never actually returns something
 * or if an error is thrown means never going to continue down with that particular code.
 *****************************/
function orderError(error: string): never {
  throw new Error(error);
}

orderError('Oops something went wrong.');
