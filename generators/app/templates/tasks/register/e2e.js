/**
 * `e2e`
 *
 * ---------------------------------------------------------------
 *
 * This grunt task will execute your protractor tests
 *
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('e2e', [
      'compileAssets',
      'linkAssets',
      'express',
      'protractor'
  ]);
};
