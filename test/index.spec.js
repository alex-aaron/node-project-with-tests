const mocha = require('mocha');
const describe = mocha.describe;
const chai = require('chai');
const { assert, expect } = chai;
const sinon = require('sinon');
const index = require('../index');
const { sampleData, findName } = index;

console.log(sampleData);

describe("test suite", () => {
  it('should be a test', () => {
    assert.equal('test runs', 'test runs');
  })
});

describe('findName', () => {
  it('should return a string', () => {
    assert.equal(typeof findName(sampleData, 'alex'), 'string');
  });
  it('should return a correct string of a targeted name', () => {
    assert.equal(findName(sampleData, 'alex'), 'alex');
  })
})