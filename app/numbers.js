exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  // i had to read up on this one because I don't know how to do
  // bit math
  valueAtBit: (num, bit) => 1 & num >> bit - 1,

  base10: (str) => parseInt(str, 2),

  // if I saw this line in somebody else's code i would curse them
  // it right-shifts the number and converts it to binary...
  // and then leftpads it with zeros 🤮
  convertToBinary: (num) => (Array.from({ length: 8 }).map(_ => 0).join('') + (num >>> 0).toString(2)).slice(-8),

  // this is weird and funky and I don't like it
  // particularly, I don't like using the `+` below
  // but for some reason parseInt doesn't work?
  multiply: function(a, b) {
    const length = b.toString().split('.').slice(-1).length
    return +Number.parseFloat(a * b).toPrecision(length)
  }
};
