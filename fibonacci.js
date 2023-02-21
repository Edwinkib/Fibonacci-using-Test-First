function fibonacci(n) {
  let n1 = 0; let n2 = 1; let nextn;
  const fibSequence = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < n; i++) {
    fibSequence.push(n1);
    nextn = n1 + n2;
    n1 = n2;
    n2 = nextn;
  }

  return fibSequence;
}

module.exports = {
  fibonacci,
};
