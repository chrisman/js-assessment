exports = typeof window === 'undefined' ? global : window;

// i'm gonna be honest. when I first read the test description I had that
// jackie chan wtf face

exports.countAnswers = {
  count: function (start, end) {
    let timer

    const makeTimer = () => {
      console.log(start++)
      if (start <= end) timer = setTimeout(makeTimer, 100)
    }
    makeTimer()

    return {
      cancel: () => clearTimeout(timer),
    }
  }
};
