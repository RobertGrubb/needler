var expect = require('chai').expect;
var needler = require('../lib');

describe("Test Needler's Replacer", function() {
  it("replaces the value between a leading and trailing tag.", function() {

    var options = {
      haystack: 'The word in the bold <bold>tag</bold> should change to WOOHOO.',
      replace: 'WOOHOO',
      header: '<bold>',
      footer: '</bold>'
    }

    needler.replace(options, function (error, result) {
      expect(error).to.equal(false);
      expect(result).to.equal('The word in the bold <bold>WOOHOO</bold> should change to WOOHOO.');
    });
  });
});
