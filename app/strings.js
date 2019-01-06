exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: (str, amount) => str.replace(
    // programatic regex building!!! 😬
    //
    // this is a funkier regex than anything i wrote in the regex section!
    // https://open.spotify.com/user/spotify/playlist/37i9dQZF1DX6ZXLFyYlwP7?si=xYFkm6rCTt-wZKmDKUjKBQ
    //
    // ------------
    // (.)(?=\1{2})
    // ------------
    // ^ ^^       ^ - capture groups
    // ^^^          - capture any one character
    //     ^^       - positive lookahead (look it up on mdn)
    //       ^^     - the captured character from the previous capture group
    //         ^^^  - repeated two times
    // summary: match any character (only if it is followed by 2 instances of
    // itself)
    //
    // so the str.replace will delete all instances of a character followed by
    // `amount` more copies of itself
    //
    // which should result in all characters being repeated `amount` or fewer
    // times
    //
    // https://gph.is/1KjihQe
    // https://www.xkcd.com/208/
    //
    // also TIL: you can't use string literals when building new RegExps?
    new RegExp('(.)(?=\\1{' + amount + '})','g')
    , ''
  ),

  wordWrap: (str, cols) => str
    .split(' ')
    .reduce((acc, cur) =>
      acc += (acc.length === 0)
        ? cur
        : (acc.length + cur.length > cols)
        ? '\n' + cur
        : ' ' + cur
    , ''), // , ''),  (>'')>  <('.')>  <(''<)  ,('' ,  ,(''),
  //^^^^^^  -  <abbr title="weird extraneous syntactical artifacts">WESA</abbr>

  // this is probably cheating
  reverseString: (str) => str
    .split('')
    .reverse()
    .join(''),
}
