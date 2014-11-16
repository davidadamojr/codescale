'use strict';

angular.module('codeScaleApp.overview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/overview', {
    templateUrl: 'partials/overview/overview.html',
    controller: 'OverviewCtrl'
  });
}])

.controller('OverviewCtrl', [function() {

}]);