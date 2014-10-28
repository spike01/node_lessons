var server = require('../server');
chai = require('chai')
expect = chai.expect
var Browser = require('zombie')

describe('homepage', function() {

 var browser = new Browser({ site: 'http://localhost:3000' }); 

  it('Returns response code 200 when visiting the homepage', function(){
    browser.visit('/', function(){
      expect(browser.success).to.be.true
    });
  });

  it('Returns response code 404 when visiting a page not listed in the routes', function(){
    browser.visit('/other', function(){
      expect(browser.success).to.be.false
    });
  });
});
