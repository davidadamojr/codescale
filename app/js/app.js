'use strict';

// Declare app level module which depends on views, and components
angular.module('codeScaleApp', [
  'ngRoute',
  'ngResource',
  'codeScaleApp.welcome',
  'codeScaleApp.overview',
  'codeScaleApp.refresher',
  'codeScaleApp.survey',
  'codeScaleApp.thankyou',
  'codeScaleApp.mainactivity'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/welcome'});
}])

.value('apiBaseUrl', 'http://localhost:5000');
