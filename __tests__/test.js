const test = require('../test');
const request = require('request')
const sinon = require('sinon');

describe('sinon test', () => {

  let mock;
  beforeAll(()=> {

    mock = sinon.mock(request);
  })

it('tests the test',()=> {
  mock.expects('defaults').once().withArgs({
    headers: {'x-token': 'my-token'}
  });
  test();

  expect(()=>mock.verify()).not.toThrow()
})
})
