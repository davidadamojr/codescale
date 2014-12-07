'use strict';

angular.module('codeScaleApp.thankyou', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/thankyou', {
    templateUrl: 'partials/thankyou/thankyou.html',
    controller: 'ThankYouCtrl'
  });
}])

.controller('ThankYouCtrl', ['$cookieStore', function($cookieStore) {
  $cookieStore.remove('codeScale.code');
}]);