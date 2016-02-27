module.exports = function(grunt) {
  grunt.config.set('express', {
    express: {
      options: {
        script: 'app.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-express-server');
};
