exports = typeof window === 'undefined' ? global : window;

//  ________________________
// /                        \
// | WELCOME TO REGEX TOWN! |
// \________________________/
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://www.regexpal.com/

exports.regexAnswers = {
  containsNumber: (str) => /\d/.test(str),

  containsRepeatingLetter: (str) => /([a-zA-Z])\1/.test(str),

  endsWithVowel: (str) => /[aeiou]$/i.test(str),

  captureThreeNumbers: (str) => {
    const matches = /\d{3}/.exec(str)
    return (matches)
      ? matches[0]
      : false
  },

  matchesPattern: (str) => /^\d{3}-\d{3}-\d{4}$/.test(str),

  // ^\$\d{1,3}(,\d{3})*(\.\d{2})?$
  // ^                            ^ - beginning and end of string
  //  ^^                            - a litteral dollar sign
  //    ^^^^^^^                     - between 1 and 3 digits
  //           ^      ^ ^       ^   - groupings
  //            ^^^^^^              - a literal comma followed by 3 digits
  //                   ^            - matches the grouping zero or more times
  //                     ^^^^^^^    - a literal period followed by 2 digits. (cents)
  //                             ^  - matches the grouping zero or one times (prevents multiple cents)
  isUSD: (str) => /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str),
}
