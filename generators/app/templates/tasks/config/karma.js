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
    }
  });

  grunt.loadNpmTasks('grunt-karma');
};
