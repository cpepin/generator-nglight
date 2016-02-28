/*jslint node:true*/
'use strict';

var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
    this.argument('module', { type: String, required: true });
    this.argument('directory', { type: String, required: true });
    this.argument('controller', { type: String, required: true });
    this.module = _.camelCase(this.module);
    this.dir = this.directory;
    this.ctrl = _.camelCase(this.controller);
  },
  writing: {
    module: function() {
      this.fs.copyTpl(
        this.templatePath('controller.js'),
        this.destinationPath('assets/app/' + this.dir + '/' +
          this.ctrl + '.controller.js' ),
        {
          name: this.config.get('appName'),
          module: this.module,
          ctrl: this.ctrl + 'Controller'
        }
      );
    }
  }
});
