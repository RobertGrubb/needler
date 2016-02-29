var needler = require('../lib');

/**
 * Set options for needler.
 * haystack, header, and footer are all required.
 */
var options = {
  haystack: 'The word inside of <bold>tag</bold> will be returned.',
  header: '<bold>',
  footer: '</bold>'
}

var result = needler.find(options, function (error, match) {
  // Most likely if a required option is missing.
  if (error) {
    console.log(error);
  }

  // This should return `tag`
  console.log(match);
});
