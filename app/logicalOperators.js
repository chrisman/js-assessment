exports = typeof window === 'undefined' ? global : window;

// this felt like checking boxes
// in fact, why include this suite when you obviously had to use logical
// operators to complete "flowControl" aka fizzbuzz
// this test suite should be deleted
exports.logicalOperatorsAnswers = {
  or:  (a, b) => a || b,
  and: (a, b) => a && b,
};
