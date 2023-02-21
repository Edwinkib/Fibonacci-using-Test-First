const number = 11;

if (number < 0) {
  throw new Error('The Parameter must be a positive integer!');
} else if (!Number.isInteger(number)) {
  throw new Error('The Parameter must be an integer!');
} else {
  let n1 = 0;
  let n2 = 1;
  let nextCohort;
  // eslint-disable-next-line no-console
  console.log('Fibonacci Series:');
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= number; i++) {
    // eslint-disable-next-line no-console
    console.log(n1);
    nextCohort = n1 + n2;
    n1 = n2;
    n2 = nextCohort;
  }
}
