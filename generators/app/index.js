/*jslint node:true*/
'use strict';

var generators = require('yeoman-generator');

module.exports = generators.NamedBase.extend({

  constructor: function() {
    generators.NamedBase.apply(this, arguments);
    this.config.save();
    this.config.set('appName', this.name);
  },

  prompting: function () {

    // Promp the user for test framework
    var done = this.async();
    this.prompt({
      type    : 'list',
      name    : 'testframework',
      message : 'What test framework would you like?',
      choices: [
        "mocha",
        "jasmine"
      ],
      default : "mocha"
    }, function (answers) {
      // Let the user know what they chose
      this.log("Using " + answers.testframework + " as test framework");
      // Attach result to this.config so we can access it later
      this.config.set('testframework', answers.testframework );
      done();
    }.bind(this));
  },

  writing: {
    staticFiles: function() {
      this.fs.copyTpl(
        this.templatePath('**/*'),
        this.destinationRoot(),
        { name: this.name }
      );
    }
  },

  install: {
    npm: function() {
      this.spawnCommand('npm', ['install']);
    },
    test: function() { 
      var framework = this.config.get('testframework'); 
      if( framework === 'mocha' ) { 
        this.npmInstall(['mocha', 'chai', 'sinon'], { 'saveDev': true });
      }else { 
        this.npmInstall(['jasmine'], { 'saveDev': true });
      }
    }
  },

  karma: function() { 

    // Deal with user inputs
    var framework = this.config.get('testframework'); 

    this.composeWith('karma:app', {
      options: {
        frameworks: framework == 'jasmine'?['jasmine']:['mocha', 'chai', 'sinon'], 
        'config-path': this.destinationRoot() 
      }
    }, {
      local: require.resolve('generator-karma/generators/app/index.js')
    });
  }

});
