exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  // hello fizzbuzz my old friend...
  // https://open.spotify.com/track/0eZBeB2xFIS65jQHerispi?si=lZYVx5n_T0-dsfTKWsoOmA
  fizzBuzz(num) {

    // personal rule: favor naming all your bools
    // makes code more readable
    const fizz     = (num % 3 === 0)
    const buzz     = (num % 5 === 0)
    const isNumber = (typeof num === 'number')

    // why not nested ternaries!!!?!?!?!
    // https://medium.com/javascript-scene/nested-ternaries-are-great-361bddd0f340
    return (!isNumber) ? false
      : (fizz && buzz) ? 'fizzbuzz'
      : (fizz)         ? 'fizz'
      : (buzz)         ? 'buzz'
      : num
  }
}
