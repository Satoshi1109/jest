'use strict';

exports.testMethod = (a, b) => {
  return a - b;
};

module.exports.hello = (a, b) => {
    var hoge = exports.testMethod(a, b);
    console.log(hoge);
    return hoge;
};
