exports = typeof window === 'undefined' ? global : window;

// i'm gonna be honest. when I first read the test description I had that
// jackie chan wtf face

// i kind of wanted this to be a generator because i've never really gotten to
// write a generator, but I don't think that this--as with most things--is a
// problem for which a generator is really the correct solution.
//
// generators: a solution looking for a problem

exports.countAnswers = {
  count(start, end) {
    let timer

    const makeTimer = () => {
      console.log(start++)
      if (start <= end)
        timer = setTimeout(makeTimer, 100)
    }
    makeTimer()

    return {
      cancel: () => clearTimeout(timer),
    }
  }
};
