/**
 * Runs protractor tests
 *
 * ---------------------------------------------------------------
 *
 * Runs all protractor tests with e2e folder
 *
 */

module.exports = function(grunt) {

  grunt.config.set('protractor', {
    tests: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
      options: {
        configFile: "protractor.conf.js", // Target-specific config file
        args: {},
        keepAlive: false
      }
    },
  });

  grunt.loadNpmTasks('grunt-protractor-runner');
};
