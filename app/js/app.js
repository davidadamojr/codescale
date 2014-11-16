'use strict';

// Declare app level module which depends on views, and components
angular.module('codeScaleApp', [
  'ngRoute',
  'codeScaleApp.welcome',
  'codeScaleApp.overview',
  'codeScaleApp.presurvey',
  'codeScaleApp.refresher',
  'codeScaleApp.codescale',
  'codeScaleApp.postsurvey',
  'codeScaleApp.thankyou'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/welcome'});
}]);
