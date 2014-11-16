'use strict';

angular.module('codeScaleApp.refresher', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/refresher', {
    templateUrl: 'partials/refresher/refresher.html',
    controller: 'RefresherCtrl'
  });
}])

.controller('RefresherCtrl', [function() {

}]);