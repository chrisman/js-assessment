exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  // probably meant to use `fn.apply` here
  // but I don't have to because I have a spread
  argsAsArray: (fn, arr) => fn(...arr),

  // `fn.call` is stull useful in certain situations
  speak: (fn, obj) => fn.call(obj),

  functionFunction: (str) => (name) => `${str}, ${name}`,

  // this is kind of a convoluted closure
  makeClosures: (arr, fn) => arr.map(a => () => fn(a)),

  // not sure if this counts
  partial: (fn, str1, str2) => (punct) => fn(str1, str2, punct),

  // it probably goes against the original spirit of the exercise to change the
  // function definition to take advantage of the spread operator, but... we
  // have the spread operator now and there's really no reason to do stuff the
  // way that I think we're meant to here. Because that's the old way and it's
  // an obsolete way of doing things. So I'm gonna spread ¯\_(ツ)_/¯
  useArguments: (...args) => args.reduce((a, b) => a + b),

  // see above comment
  callIt: (fn, ...args) => fn(...args),

  // hi
  partialUsingArguments: (fn, ...args) => (...otherArgs) => fn(...args.concat(otherArgs)),

  curryIt: function(fn) {
    const innerCurry = (args, len) => (arg) => {
      args.push(arg);
      return (args.length === len)
        ? fn(...args)
        : innerCurry(args, len)
    }
    return innerCurry([], fn.length);
  }
};
