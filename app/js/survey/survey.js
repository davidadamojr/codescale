'use strict';

angular.module('codeScaleApp.survey', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/survey', {
    templateUrl: 'partials/survey/survey.html',
    controller: 'SurveyCtrl'
  });
}])

.controller('SurveyCtrl', ['$scope, $location', function($scope, $location) {
	$scope.finished = function(){
		alert("thank you");
		$location.url('/thankyou');
	};
}]);