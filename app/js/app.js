'use strict';

// Declare app level module which depends on views, and components
angular.module('codeScaleApp', [
  'ngRoute',
  'hljs',
  'ngCookies',
  'codeScaleApp.welcome',
  'codeScaleApp.overview',
  'codeScaleApp.refresher',
  'codeScaleApp.survey',
  'codeScaleApp.thankyou',
  'codeScaleApp.mainactivity'
]).

config(['$routeProvider', 'hljsServiceProvider', function($routeProvider, hljsServiceProvider) {
  $routeProvider.otherwise({redirectTo: '/welcome'});

  hljsServiceProvider.setOptions({
    //replace tab with 4 spaces
    tabReplace: '    '
  });
}])

.run(['$location', '$rootScope', '$cookieStore', function($location, $rootScope, $cookieStore){
  $rootScope.$on('$routeChangeStart', function(event){
    if (!$cookieStore.get('codeScale.code')){
	  event.preventDefault();
	  $location.path('/welcome');
	}
  });
}])

.value('apiBaseUrl', 'http://localhost:5000')

.service('snippetsService', ['apiBaseUrl', '$http', function(apiBaseUrl, $http){
	this.getSnippets = function(endpoint){
		return $http.get(apiBaseUrl + endpoint);
	};
}]);
/*
.service('sessionService', function(){
  this.create = function(code){
    this.code = code;
  };

  this.destroy = function(){
    this.code = null;
  };
  
  return this;
});*/
