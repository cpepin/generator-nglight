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

  karma: function() {

    // Deal with user inputs
    var framework = this.config.get('testframework');

    this.composeWith('karma:app', {
      options: {
        frameworks: framework == 'jasmine'?['jasmine']:['mocha', 'chai', 'sinon'],
        'config-path': this.destinationRoot(), 
        'app-files': [
              'bower_components/jquery/dist/jquery.js',
              'bower_components/angular/angular.js',
              'bower_components/angular-mocks/angular-mocks.js',
              'bower_components/angular-ui-router/release/angular-ui-router.min.js',
              'bower_components/angular-bootstrap/ui-bootstrap-tpls.js', 
              'assets/app/**/app.core.module.js',
              'assets/app/**/app.module.js',
              'assets/app/**/*module.js',
              'assets/app/**/*.js',
              'assets/app/**/*.html',  
              'assets/**/*spec.js'
            ]
      }
    }, {
      local: require.resolve('generator-karma/generators/app/index.js')
    });
  }, 

  writing: {
    staticFiles: function() {
      this.fs.copyTpl(
        this.templatePath('**/*'),
        this.destinationRoot(),
        { name: this.name, 
          testframework: this.config.get('testframework')
        }
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
    },
    bower: function() {
      this.spawnCommand('bower', ['install']);
    }
  },
 
});
