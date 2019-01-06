exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  // i can almost aleady hear the giver of the assessment: "now do it again
  // without using Array.prototype.indexOf"
  // ...almost
  indexOf: (arr, item) => arr.indexOf(item),

  // I'm playing around with a new self-imposed rule: always provide the
  // optional 3rd argument to Array.prototype.reduce if possible
  sum: (arr) => arr.reduce((a, b) => a + b, 0),

  remove: (arr, item) => arr.filter(i => i !== item),

  removeWithoutCopy(arr, item) {
    // mutating while iterating always feels like 🤮
    for(let i = arr.length; i > 0; i--) {
      if (arr[i] === item)
        arr.splice(i, 1)
    }
    return arr
  },

  append: (arr, item) => arr.concat(item),

  truncate: (arr) => arr.slice(0, -1),

  prepend: (arr, item) => [ item ].concat(arr),

  curtail: (arr) => arr.slice(1),

  concat: (arr1, arr2) => arr1.concat(arr2),

  insert(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: (arr, item) => arr.filter(i => i === item).length,

  duplicates(arr) {
    // probably a better way
    // but here's our old pal countBy!
    // countBy: the reduce function that I have written 1,898,432 times
    let countBy = arr.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1
      return acc
    }, {})
    return Object.keys(countBy)
      .map(Number)
      .filter(x => countBy[x] > 1)
  },

  // true story: I just learned about the `**` operator like five minutes ago
  // because I'm a baby 🍼👶
  square: (arr) => arr.map(x => x ** 2),

  // find INDICIES of all occurances
  findAllOccurrences: (arr, target) =>
    arr.reduce((acc, cur, i) =>
      (cur === target)
        ? acc.concat(i)
        : acc
      , []),
  // ^^^ Array.reduce looks friggin weird whenever you have to tack on that 3rd
  // argument at the end of a long arrow function :/
  // That 3rd argument/init value should be an optional 2nd argument (or even a
  // 1st argument!) so that the reduce always ends with a function #code-opinions
};
