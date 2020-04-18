const Target = require('../moduleA.js')

module.exports = {
  doMock: (method, func) => {
    jest.spyOn(Target, method).mockImplementation(func);
  }
};