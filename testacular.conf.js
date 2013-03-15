// Testacular configuration
// Generated on Tue Feb 26 2013 11:01:41 GMT+0100 (CET)


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'public/javascripts/jquery.js',
  'public/javascripts/json2.js',
  'public/javascripts/underscore.js',
  'public/javascripts/backbone.js',
  'public/javascripts/backbone.babysitter.js',
  'public/javascripts/backbone.wreqr.js',
  'src/build/marionette.core.js',
  'spec/javascripts/support/marionette.support.js',
  'src/marionette.helpers.js',
  'src/marionette.triggermethod.js',
  'src/marionette.domRefresh.js',
  'src/marionette.bindEntityEvents.js',
  'src/marionette.callbacks.js',
  'src/marionette.controller.js',
  'src/marionette.region.js',
  'src/marionette.regionManager.js',
  'src/marionette.templatecache.js',
  'src/marionette.renderer.js',
  'src/marionette.view.js',
  'src/marionette.itemview.js',
  'src/marionette.collectionview.js',
  'src/marionette.compositeview.js',
  'src/marionette.layout.js',
  'src/marionette.approuter.js',
  'src/marionette.application.js',
  'src/marionette.module.js',
  'spec/javascripts/helpers/*.js',
  'spec/javascripts/**/*.spec.js',
  {pattern: 'spec/javascripts/fixtures/**/*.html', watched: true, included: false, served: true}
];


// list of files to exclude
exclude = [

];

preprocessors = {
};


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = false;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = [];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
