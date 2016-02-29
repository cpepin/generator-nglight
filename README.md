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

### Running & Building your app
In order to build and run your application, run the following command from the root of your project. 

`grunt serve`

This will build your app into a .tmp/public directory, start up a simple server, and watch for file changes. 

### Testing your app

In order to test your app, run `npm test`. This will start the karma  test runner. Note by default karma will watch for file changes and rerun your tests every time you save a file. You can disable this in the `karma.conf` file. 

## Deploying 
---
TODO





