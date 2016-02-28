/*jslint node:true*/
'use strict';

var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
    this.argument('module', { type: String, required: true });
    this.argument('directory', { type: String, required: true });
    this.argument('directive', { type: String, required: true });
    this.module = _.camelCase(this.module);
    this.dir = _.camelCase(this.directory);
    this.directive = _.camelCase(this.directive);
  },
  writing: {
    module: function() {
      this.fs.copyTpl(
        this.templatePath('module.js'),
        this.destinationPath(this.dir + '/' +
          this.config.get('appName') + '.' + this.module + '.module.js' ),
        {
          name: this.config.get('appName'),
          module: this.module,
          directive: this.directive
        }
      );
    }
  }
});