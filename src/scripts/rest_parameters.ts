/*****************************
 * Rest Parameters
 * Any number of args into single variable
 *****************************/

function sumAll(message: string, ...numbers: Array<number>) {
  console.log("Message: ", message);
  return numbers.reduce((total: number, next: number) => total + next);
}

const sumA = sumAll("Rest Test A", 1, 3, 5, 7, 9);
console.log("SumA: ", sumA);

const sumB = sumAll("Rest Test B", 2, 4, 6, 8, 10);
console.log("SumB: ", sumB);
