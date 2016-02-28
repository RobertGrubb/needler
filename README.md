# Needler
----------------

Get tired of having to fool with regex to find a value in between two tags?

Example: `<title>Get this value</title>`

----------------

This is a lightweight tool that will do just this for you, as well as replace
those values if need be.

To install:

`npm install needler`

Example of usage for finding a value in between something:

	  var needler = require('needler');

	  var options = {
	    haystack: 'The word inside of <bold>tag</bold> will be returned.',
	    header: '<bold>',
	    footer: '</bold>'
	  }

	  var result = needler.find(options, function (error, match) {
	    if (error) {
	      console.log(error);
	    }

		// Will return 'tag'
	    console.log(match);
	  });

Example of usage for replacing a value in between something:

	  var needler = require('needler');

	  var options = {
	    haystack: 'The word after <this>WOOHOO</this>.',
	    replace: 'it was changed!',
	    header: '<this>',
	    footer: '</this>',
	    flags: 'i' //g, i, m, etc. Can be combined.
	  }

	  var result = needler.replace(options, function (error, result) {
	    if (error) {
	      console.log(error);
	    }

		// Will return 'The word after <this>it was changed!</this>.'
	    console.log(result);
	  });

## ES6

Needler is also compatible with es6 importing. You can do so like below:

`import needler from 'needler';`

	  import needler from 'needler';

	  let options = {
	    haystack: 'The word after <this>WOOHOO</this>.',
	    replace: 'it was changed!',
	    header: '<this>',
	    footer: '</this>',
	    flags: 'i' //g, i, m, etc. Can be combined.
	  }

	  let result = needler.replace(options, (error, result) => {
	    if (error) {
	      console.log(error);
	    }

		// Will return 'The word after <this>it was changed!</this>.'
	    console.log(result);
	  });

## options

> **haystack** (find, replace) [string | required] - String that you will be searching.

> **replace** (replace) [string | required] - String that you will be replaces the value with.

> **header** (find, replace) [string | required] - String before the value you are searching for. For instance - `<title>value</title>`: In this example, the header would be `<title>`

> **footer** (find, replace) [string | required] - String after the value you are searching for. For instance - `<title>value</title>`: In this example, the header would be `</title>`
>
> **flags** (replace) [string | required] - String that holds the flags for RegExp. (`i`, `g`, `m`). These can be combined like so: `gim`. For more information on flags, [Visit this Website](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

## Todo

 1. At the moment, replace ignores leading and trailing spaces. Wanting to add options for that.
