const expect = require('chai').expect;
const multiple = require('../src/index')

describe('Main test', () => {
	it('should return multiplied', () => {
		expect(multiple(2, 2)).to.eq(4);
	})
});
