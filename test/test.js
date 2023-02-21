// Kiberu Edwin Ronald
// Edwin Niwaha

const { assert } = require('chai');
const { it, describe } = require('mocha');
const { fibonacci } = require('../fibonacci');

describe('Fibonacci Function Unit Test', () => {
  it('should return an empty array for 0', () => {
    const result = fibonacci(0);
    assert.deepEqual(result, []);
  });

  it('should return [0] for 1', () => {
    const result = fibonacci(1);
    assert.deepEqual(result, [0]);
  });

  it('should return [0, 1] for 2', () => {
    const result = fibonacci(2);
    assert.deepEqual(result, [0, 1]);
  });

  it('should return [0, 1, 1, 2, 3, 5, 8] for 7', () => {
    const result = fibonacci(7);
    assert.deepEqual(result, [0, 1, 1, 2, 3, 5, 8]);
  });
});
