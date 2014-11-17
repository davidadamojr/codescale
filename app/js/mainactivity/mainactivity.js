'use strict';

angular.module('codeScaleApp.mainactivity', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mainactivity', {
    templateUrl: 'partials/mainactivity/mainactivity.html',
    controller: 'MainActivityCtrl'
  });
}])

.controller('MainActivityCtrl', [function() {

}]);