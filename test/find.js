var expect = require('chai').expect;
var needler = require('../lib');

describe("Test Needler's Finder", function() {
  it("retrieves the value between a leading and trailing tag.", function() {

    var options = {
      haystack: 'The word in the bold <bold>tag</bold> should be returned.',
      header: '<bold>',
      footer: '</bold>'
    }

    needler.find(options, (error, result) => {
      expect(error).to.equal(false);
      expect(result).to.equal('tag');
    });
  });
});
