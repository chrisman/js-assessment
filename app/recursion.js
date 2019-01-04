exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

    // me: no, linux! not EVERY thing is a file!
    // linux: *points at dir*
    // me: noo
    // linux: *points at printer*
    // me: Noooooo
    const inner = (file, acc = [], dirs = []) => {

      // for part 2: keep track of our current/ancestral dir
      dirs.push(file.dir)

      file.files.forEach(f => {
        // if is filename
        if (typeof f === 'string') {
          // short circuit for part 2:
          //   no dirName? proceed
          //   dirName and dirName in dirs? proceed
          if (!dirName || dirs.includes(dirName))
            acc.push(f)
        // else is dir object
        } else {
          return inner(f, acc, dirs)
        }
      })

      // remove current dir on way back "up" through recurssion so we don't
      // have the wrong context when drilling down into siblings
      dirs.pop()

      return acc
    }

    return inner(data)
  },

  // gonna be honest. i looked this up.
  // and the next time I have to write something like this, i again will look
  // at stackoverflow answers and read through available algorithms on
  // wikipedia. because that's how you get stuff done
  permute(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
      let allOthers = this.permute(arr.slice(0, i).concat(arr.slice(i + 1)))

      if (!allOthers.length) {
        result.push(arr[i])
      } else {
        for (let j = 0; j < allOthers.length; j++) {
          result.push([ arr[i] ].concat(allOthers[j]))
        }
      }
    }

    return result
  },

  // poor Fibonacci is pretty much only known to the layman because of this
  // mathematical sequence. kind of a shame considering he pretty much single
  // handedly popularized Arabic numerals in Europe at a time when everybody
  // was still using Roman numerals, which is way cooler.
  fibonacci(n) {
    return (n < 1) ? 0
      : (n <= 2) ? 1
      : this.fibonacci(n - 1) + this.fibonacci(n - 2)
  },

  validParentheses(n) {

    // build some parenths!
    let init = ''
    for (let i = 0; i < n; i++) {
      init += '()'
    }

    // wanted to use `this.permute`
    // but that created tons of dupes
    // because permutations of '(((' include '(((' and '((('
    // so here comes some yucky string comparison
    let perms = this.permute(init.split(''))
      .map(a => a.join(''))
      .filter((el, idx, arr) => arr.indexOf(el) === idx) // unique
      .map(s => s.split(''))

    const isValid = (arr) => {
      let valid = true
      let a = []

      // there's probably a simpler way to do this but I'm going off memory
      // when I wrote something like this to check for curly, square AND round
      // brackets so I think I have a little bit of historical complexity in my
      // head
      arr.forEach(c => {
        if (c === '(') {
          a.push(c)
        } else if (c === ')') {
          if (a.length) {
            a.pop()
          } else {
            valid = false
          }
        }
      })

      return valid
    }

    let answer = perms
      .filter(isValid)
      .map(a => a.join(''))

    return answer
  }
};
