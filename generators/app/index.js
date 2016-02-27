/*jslint node:true*/
'use strict';

var generators = require('yeoman-generator');

module.exports = generators.NamedBase.extend({
  constructor: function() {
    generators.NamedBase.apply(this, arguments);
  },
  writing: {
    staticFiles: function() {
      this.fs.copyTpl(
        this.templatePath('**/*'),
        this.destinationPath(this.name + '/'),
        { name: this.name }
      );
    }
  },
  install: {
    npm: function() {
      this.spawnCommand('npm', ['install'], { cwd: this.name + '/' });
    }
  }
});
