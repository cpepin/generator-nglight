/*jslint node:true*/
'use strict';

var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
    this.argument('module', { type: String, required: true });
    this.argument('directory', { type: String, required: true });
    this.argument('service', { type: String, required: true });
    this.module = _.camelCase(this.module);
    this.dir = this.directory;
    this.service = _.camelCase(this.service);
  },
  writing: {
    module: function() {
      this.fs.copyTpl(
        this.templatePath('service.js'),
        this.destinationPath('assets/app/' + this.dir + '/' +
          this.service + '.service.js' ),
        {
          name: this.config.get('appName'),
          module: this.module,
          service: this.service + 'Service'
        }
      );
    }
  }
});
