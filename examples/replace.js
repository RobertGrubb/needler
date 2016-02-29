var needler = require('../lib');

/**
 * Set options for needler.
 * haystack, header, and footer, and replace are all required.
 */
var options = {
  haystack: 'The word after <this>WOOHOO</this> will be replaced. <this>WOOHOO</this>',
  replace: 'it was changed!',
  header: '<this>',
  footer: '</this>',
  flags: 'i' //g, i, m, etc. Can be combined.
}

var result = needler.replace(options, function (error, result) {
  // Most likely if a required option is missing.
  if (error) {
    console.log(error);
  }

  console.log(result);
});
