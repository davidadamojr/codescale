'use strict';

angular.module('codeScaleApp.postsurvey', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/postsurvey', {
    templateUrl: 'partials/postsurvey/postsurvey.html',
    controller: 'PostSurveyCtrl'
  });
}])

.controller('PostSurveyCtrl', [function() {

}]);