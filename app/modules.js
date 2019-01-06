exports = typeof window === 'undefined' ? global : window;

// is this a module pattern?
//
// so, I feel like a common way of doing this now--if not the standard way--is
// to use classes.
//
// I am against javascript classes because I think they are dishonest and
// misleading and are the wrong abstraction for 99% of the things they are
// usually used for
//
// javascript doesn't *have* classes. not in the sense that people from
// classical OOP languages like Java understand them. javascript has
// prototypes. and so I think that it's misleading to let people think they
// need to always create `new` instances and that inheritance works the way it
// does in classical languages.

exports.modulesAnswers = {
  // personal rule: favor "Hola, Wikipedia!" over "Hello, World!"
  createModule: (greeting = 'hola', name = 'wikipedia') => ({
    greeting,
    name,
    // this is a good example of where you need to know the difference between
    // "regular" functions and fat arrow functions. it's easy to oftentimes
    // think of fat arrows as just shorthand for function definitions, but
    // using one here will break the scope and cause this function to evaluate
    // to 'undefined, undefined'.
    sayIt() {
      return `${this.greeting}, ${this.name}`
    }
  })
};
