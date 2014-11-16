'use strict';

angular.module('codeScaleApp.codescale', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/codescale', {
    templateUrl: 'partials/codescale/codescale.html',
    controller: 'CodeScaleCtrl'
  });
}])

.controller('CodeScaleCtrl', [function() {

}]);