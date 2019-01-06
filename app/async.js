exports = typeof window === 'undefined' ? global : window;

// I was trying to decide whether this section was obsolete or not with the
// arrival of async/await, and I decided that it is not. Because async/await
// still under the hood consumes promises, so you still need to know how to
// write them.

exports.asyncAnswers = {
  // https://open.spotify.com/track/5yZT3gqgZNBkTPX6G3XDTL?si=sdjU0cdST4GW0DHwb93njQ
  async: (value) => Promise.resolve(value),

  // weird writing directly for the browser. took me a second to realize that I
  // could just write straight jquery here
  manipulateRemoteData: (url) =>
    new Promise((resolve, reject) => {
      $.get(url)
      .done(response => {
        resolve(response.people
          .map(person => person.name)
          .sort()
        )
      })
    }),
};
