/*jslint node:true*/
'use strict';

var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
    this.argument('module', { type: String, required: true });
    this.argument('directory', { type: String, required: true });
    this.module = _.camelCase(this.module);
    this.dir = this.directory;
  },
  writing: {
    module: function() {
      this.fs.copyTpl(
        this.templatePath('routes.js'),
        this.destinationPath('assets/app/' + this.dir + '/' +
          this.module + '.routes.js' ),
        { name: this.config.get('appName'), module: this.module }
      );
    }
  }
});
