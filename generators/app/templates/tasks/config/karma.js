/**
 * Run karma tests.
 *
 * ---------------------------------------------------------------
 *
 * Performs a single run using the karma.conf file
 *
 */

module.exports = function(grunt) {

  grunt.config.set('karma', {
    unit: {
      configFile: 'karma.conf.js',
      singleRun: true
    },
    one: {
      configFile: 'karma.conf.js',
      singleRun: true,
      options: {
        files: [
          // list of files / patterns to load in the browser, except spec files.

        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
};
