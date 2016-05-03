/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 *
 * For more information see:
 *   https://github.com/balderdashy/sails-docs/blob/master/anatomy/myApp/tasks/pipeline.js.md
 */


// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  'styles/**/*.css', // load static styles
  'vendor/**/*.css', // load vendor css files
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

  // Load sails.io before everything else
  //'js/dependencies/sails.io.js', // We dont need this

  // Dependencies like jQuery, or Angular are brought in here
  'vendor/**/angular.js',     //we need to make sure angular loads first!
  'vendor/**/jquery.js',      //we need to make sure jquery loads first!
  'vendor/**/*.js',           //bower dependencies

  // We need to make sure angular modules get loaded first
  'app/**/app.core.module.js',
  'app/**/app.module.js',
  'app/**/*module.js',

  // Import all .js files from app
  'app/**/*.js',

  // Use the "exclude" operator to ignore files
  // '!js/ignore/these/files/*.js'
  // We excluded all spec files
  '!app/**/*spec.js',

];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html'
];







// Default path for public folder (see documentation for more information)
var tmpPath = '.tmp/public/';

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  var tmpPath = '.tmp/public/';
  if (path.substring(0,1) == '!')
    return '!' + tmpPath + path.substring(1);
  return tmpPath + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  var tmpPath = '.tmp/public/';
  if (path.substring(0,1) == '!')
    return '!' + tmpPath + path.substring(1);
  return tmpPath + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  var tmpPath = 'assets/';
  if (path.substring(0,1) == '!')
    return '!' + tmpPath + path.substring(1);
  return tmpPath + path;
});
