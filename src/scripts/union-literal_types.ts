/*****************************
 * Union and literal types
 * Instructs typescript compiler might have one of several types.
 *****************************/
let selectedMonth: string = 'January';

// this is typescript specific checking, complies down to just month.
function selectMonth(month: 'January' | 'February' | 'March'): void {
  selectedMonth = month;
}

selectMonth('February');
console.log(`Selected Month ${selectedMonth}`);
