/*****************************
 * Array Spread Operators
 *****************************/
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekends = ['Saturday', 'Sunday'];
const allDays = [...weekdays, ...weekends];
console.log('All Days (Weekdays, Weekends): ', allDays);
const allDaysReversed = [...weekends, ...weekdays];
console.log('All Days (Weekends, Weekdays): ', allDaysReversed);
