module.exports = function(config){
  config.set({

    basePath : '.',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
	  'app/bower_components/angular-cookies/angular-cookies.js',
      'app/js/**/*.js',
	  'tests/unit-tests/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine-jquery', 'jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
			'karma-jasmine-jquery'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
