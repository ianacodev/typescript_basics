/*****************************
 * Implicit / Explicit types.
 *****************************/
// implicit typescripts infers type (string) based on value.
// if have class may not want to be explicit for every class variable.
let implicitCode = 'save25';

// explicit tell typescript
// makes it more readable.
// useful for let statements where dont want it to be of type any.
let explicitCode: string;
explicitCode = 'save25';
