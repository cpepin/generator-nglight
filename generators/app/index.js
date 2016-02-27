/*jslint node:true*/
'use strict';

var generators = require('yeoman-generator');

module.exports = generators.NamedBase.extend({
  constructor: function() {
    generators.NamedBase.apply(this, arguments);
    this.log('name: ', this.name);
  },
  method1: function(){
    this.log('Hello, World!');
  }
});
