# generator-nglight
---
 A lightweight Angular yeoman generator.

## Installation
---
### Before you begin

1. Make sure you have npm installed
2. Make sure you have yeoman installed http://yeoman.io
`npm install -g yo`
3. Make sure you have grunt-cli installed globally
`npm install -g grunt-cli`

### Getting started

1. Install the generator via npm `npm install -g generator-nglight`
2. Next, create a directory for your project to live in.
3. After moving to your newly created directory,  run the generator with the following command `yo nglight <appname>`

  This will generate your new app! You will be prompted for a test framework. You can choose either jasmine or mocha.

4. Now run npm install to download any additional dependencies
5. And walla! you have a fully operational battle station... I mean angular application!

## Usage
---

### Running your app

In order to build and run your application, run the following command from the root of your project.

`grunt serve`

This will build your app into a .tmp/public directory, start up a simple server, and watch for file changes.

### Building your app

In order to build your app for production, run the following command from the root of your project.

`grunt buildProd`

This will minify your Javascript/Stylesheets and build your app into www/.  You can test your production code
locally by changing the location of the app.js server to www.

TODO: Add subtask for serve which serves from production build folder.

### Testing your app

In order to test your app, run `npm test`. This will start the karma  test runner. Note by default karma will watch for file changes and rerun your tests every time you save a file. You can disable this in the `karma.conf` file.

To run your unit tests a single time, use:

`grunt test`

## Using Sub-generators
---

ngLight comes built in with several sub-generators which adhere to the Angular 1.x style guide. This
is to enforce modular design.

### Modules

To generate a new module, use the following command:

`yo ngLight:module <module name> <directory>`

This generates a new sub module (under the main project module) in assets/app/<directory>/<module name>.module.js.
** BE SURE TO ADD THIS MODULE AS A DEPENDENCY TO THE MAIN MODULE **

### Routers

To generate a new router, use the following command:

`yo ngLight:router <module name> <directory>`

This generates a new sub router in assets/app/<directory>/<module name>.routes.js.

### Controllers

To generate a new controller, use the following command:

`yo ngLight:controller <moduleName> <directory> <controllerName>`

This generates a new controller in assets/app/<directory>/<controllerName>.controller.js.

### Services

To generate a new service, use the following command:

`yo ngLight:service <moduleName> <directory> <serviceName>`

This generates a new service in assets/app/<directory>/<serviceName>.service.js.

### Directive

To generate a new directive, use the following command:

`yo ngLight:directive <moduleName> <directory> <directiveName>`

This generates a new service in assets/app/<directory>/<directiveName>.directive.js.

## Deploying
---
TODO
