'use strict';

angular.module('codeScaleApp.presurvey', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/presurvey', {
    templateUrl: 'partials/presurvey/presurvey.html',
    controller: 'PreSurveyCtrl'
  });
}])

.controller('PreSurveyCtrl', [function() {

}]);