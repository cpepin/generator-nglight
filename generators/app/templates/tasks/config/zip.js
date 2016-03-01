/**
 * Zips distribution folder.
 *
 * ---------------------------------------------------------------
 *
 * Zips the contents of the static distribution site for deployment.
 * ** THIS NEEDS TO BE CALLED AFTER BUILD/BUILDPROD **
 *
 */

module.exports = function(grunt) {

  grunt.config.set('zip', {
    'target/archive.zip': ['www/**', 'Staticfile']
  });

  grunt.loadNpmTasks('grunt-zip');
};
