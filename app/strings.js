exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: (str, amount) => str.replace(
    // programatic regex building!!! 😬
    // (.)(?=\1{2})
    // ^^^          - match any character...
    //    ^^^^^^^^^ - only if followed by two of that character
    //                (positive lookahead)
    // so the str.replace will delete all instances of a character followed by
    // `amount` more copies of itself #magic
    new RegExp('(.)(?=\\1{' + amount + '})','g')
    , ''
  ),

  wordWrap: (str, cols) => str
    .split(' ')
    .reduce((acc, cur) => {
      if (acc.length && acc.length + cur.length > cols)
        acc += '\n'
      else if (acc.length)
        acc += ' '

      acc += cur

      return acc
    },''),

  // this is probably cheating
  reverseString: (str) => str
    .split('')
    .reverse()
    .join(''),
}
