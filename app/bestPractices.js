/* eslint-disable */
exports = typeof window === 'undefined' ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  // literally just add a let = lexical scoping
  // or, avoid variables altogether
  globals: () => ({
    name: 'Jory',
  }),

  // I should really be better about using parseInt correctly
  // I'm really bad about using +n as a shortcut
  // or using Number()
  parseInt: (num) => parseInt(num, 10),

  // threequels > double equals
  identity: (val1, val2) => val1 === val2,
};
