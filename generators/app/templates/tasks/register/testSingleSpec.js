/**
 * `testSingleSpec`
 *
 * ---------------------------------------------------------------
 *
 * This grunt task will watch your files and run the spec file you are modifying, or the
 * associated spec file (if it exists)
 *
 * The list of files to load in browser must be added in karma.js
 *
 */
module.exports = function(grunt){
    var original_karmaOne_files = grunt.config.get('karma.one.options.files'); // keep the original files array

    grunt.event.on('watch', function watchEventListener(action, filepath){

        var specFile = filepath.slice(0, -2) + 'spec.js';

        // Run test if there is a spec file for the modified file
        if (grunt.file.exists(specFile)) {
            grunt.config.set('karma.one.options.files', [].concat(original_karmaOne_files, specFile));
        }
        // Run test if the modified file IS a spec file
        else if (filepath.indexOf('spec.js') > -1) {
            grunt.config.set('karma.one.options.files', [].concat(original_karmaOne_files, filepath));
        }
    });

    grunt.registerTask('testSingleSpec', [
        'watch:spec'
    ]);
};
