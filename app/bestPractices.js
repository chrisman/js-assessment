/* eslint-disable */
exports = typeof window === 'undefined' ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  // literally just add a let = lexical scoping
  globals() {
    let myObject = {
      name: 'Jory'
    };

    return myObject;
  },

  // I should really be better about using parseInt correctly
  // I'm really bad about using +n as a shortcut
  parseInt(num) {
    return parseInt(num, 10);
  },

  // threequels ftw
  identity(val1, val2) {
    return val1 === val2
  }
};
