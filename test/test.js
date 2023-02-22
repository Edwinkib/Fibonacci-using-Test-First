// Edwin Niwaha
// Kiberu Edwin Ronald


const { assert } = require('chai');
const { it, describe } = require('mocha');
const { fibonacci } = require('../fibonacci');

describe('Fibonacci Function Unit Test', () => {
  it('should return an empty array for 0', () => {
    const result = fibonacci(0);
    assert.deepEqual(result, []);
  });

  it('should return [0]', () => {
    const result = fibonacci(1);
    assert.deepEqual(result, [0]);
  });

  it('should return [0, 1]', () => {
    const result = fibonacci(2);
    assert.deepEqual(result, [0, 1]);
  });

  it('should return [0, 1, 1]', () => {
    const result = fibonacci(3);
    assert.deepEqual(result, [0, 1, 1]);
  });

  it('should return [0, 1, 1, 2]', () => {
    const result = fibonacci(4);
    assert.deepEqual(result, [0, 1, 1, 2]);
  });

  it('should return [0, 1, 1, 2, 3]', () => {
    const result = fibonacci(5);
    assert.deepEqual(result, [0, 1, 1, 2, 3]);
  });

  it('should return [0, 1, 1, 2, 3, 5]', () => {
    const result = fibonacci(6);
    assert.deepEqual(result, [0, 1, 1, 2, 3, 5]);
  });

  it('should return [0, 1, 1, 2, 3, 5, 8]', () => {
    const result = fibonacci(7);
    assert.deepEqual(result, [0, 1, 1, 2, 3, 5, 8]);
  });

  it('should return [0, 1, 1, 2, 3, 5, 8, 13]', () => {
    const result = fibonacci(8);
    assert.deepEqual(result, [0, 1, 1, 2, 3, 5, 8, 13]);
  });

  it('should return [0, 1, 1, 2, 3, 5, 8, 13, 21]', () => {
    const result = fibonacci(9);
    assert.deepEqual(result, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
  });

  it('should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', () => {
    const result = fibonacci(10);
    assert.deepEqual(result, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });

  it('should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]', () => {
    const result = fibonacci(11);
    assert.deepEqual(result, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});
