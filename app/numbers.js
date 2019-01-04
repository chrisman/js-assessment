exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  // i had to read up on this one because I don't know how to do
  // bit math
  valueAtBit: (num, bit) => 1 & num >> bit - 1,

  base10: (str) => parseInt(str, 2),

  // this just leftpads whatever the answer is with zeros
  // it is very bad to do it this way
  convertToBinary: (num) => (Array.from({ length: 8 }).map(_ => 0).join('') + (num >>> 0).toString(2)).slice(-8),

  // this is weird and funky and I don't like it
  multiply: function(a, b) {
    const length = b.toString().split('.').slice(-1).length
    return +Number.parseFloat(a * b).toPrecision(length)
  }
};
