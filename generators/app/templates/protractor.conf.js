'use strict';

var paths = 'e2e/tests';
var JSONReporter = require('jasmine-bamboo-reporter');
var jasmineReporters = require('jasmine-reporters');
var HttpsProxyAgent = require('https-proxy-agent');
var agent = new HttpsProxyAgent('http://www-proxy.lmig.com:80');

//get local ip
var ip = require("ip");
var myIp = (ip.address());
console.dir (ip.address());

exports.config = {
    // Used to run against Sauce Labs
    //Enter in the correct Sauce Labs account information
    sauceAgent: agent,
    sauceUser: '',
    sauceSeleniumAddress: '',
    sauceKey: '',

    // Capabilities to be passed to the webdriver instance.
    capabilities : {
        'browserName': 'firefox',
        'name': 'LMB BookMe- UI Automation',
        'tunnel-identifier': 'nonprod',
        'parent-tunnel': 'LMSauceLabs',
        'maxInstances': 10,
        'shardTestFiles': true
    },

    allScriptsTimeout: 200000,

    //You might need to change the port number for the local environment
    baseUrl: 'http://' + myIp + ':1337',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: [paths + '/*.spec.js'],
    framework: 'jasmine',

    suites: {
        //fullSuite: [''],
        e2e: []
    },

    onPrepare: function() {
        // Load the Web Tester (the path may vary depending on your setup):

        jasmine.getEnv().addReporter(
            new jasmineReporters.JUnitXmlReporter({
                consolidateAll: false,
                savePath: 'e2e',
                filePrefix: 'protractorOutput'
            })
        );

        jasmine.getEnv().addReporter(new JSONReporter({
            file: 'protractor-results.json', // by default it writes to jasmine.json
            beautify: true,
            indentationLevel: 4 // used if beautify === true
        }));
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        defaultTimeoutInterval: 200000
    }
};
