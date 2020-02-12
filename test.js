const sinon = require('sinon');
const request = require('request');

module.exports = function () {
  request.defaults({
    headers: {'x-token': 'mytoken'}
  }
  );
}