exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: (fn, obj) => fn.call(obj),

  // this is what i'm talking about
  // javascript is a prototypal language. not a classical language.
  // classes create too much abstraction and misdirection for somebody new to
  // the language to know how to work with prototypes.
  // kids these days..
  alterObjects(constructor, greeting) {
    constructor.prototype.greeting = greeting
  },

  // i'm probably expected to loop through the object and use
  // Object.hasOwnProperty here. So I guess this is a place where I don't meet
  // expectations!
  iterate: (obj) => Object.entries(obj)
    .map(([ key, value ]) => `${key}: ${value}`),
};
