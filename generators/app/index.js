/*jslint node:true*/
'use strict';

var generators = require('yeoman-generator');

module.exports = generators.NamedBase.extend({
  constructor: function() {
    generators.NamedBase.apply(this, arguments);
  },
  writing: {
    dependencies: function() {

    }
  },
  install: {
    npm: function() {

    }
  }
});
