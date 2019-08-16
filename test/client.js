const { assert } = require('chai');
const exd = require('./../test-data/expected').client;
const sel = require('./../test-data/selectors').client;

describe(exd.suite, function () {
  it('Page level title', function () {
    browser.url('/');
    assert.equal(browser.getTitle(), exd.pageTitle);
  });
  it('Global Header exists', function () {
    assert.isTrue($(sel.header).isVisible());
  });
  it('Global Footer exists', function () {
    assert.isTrue($(sel.footer).isVisible());
  });
  it('Global App exists', function () {
    assert.isTrue($(sel.app).isVisible());
  });
});


