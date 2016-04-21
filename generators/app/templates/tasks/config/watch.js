/**
 * `watch`
 *
 * ---------------------------------------------------------------
 *
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * Watch for changes on:
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

  grunt.config.set('watch', {
    all: {
      // Assets to watch:
      files: ['assets/**/*', 'tasks/pipeline.js', '!**/node_modules/**'],

      // When assets are changed:
      tasks: ['syncAssets', 'linkAssets']
    },
    //For watching only js and spec files
    spec: {
      files: ['assets/**/*.js','assets/**/*.spec.js'],
      options: {spawn: false},
      // When assets are changed:
      tasks: ['karma:one']

    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
