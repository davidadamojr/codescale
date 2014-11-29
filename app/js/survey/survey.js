'use strict';

angular.module('codeScaleApp.survey', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/survey', {
    templateUrl: 'partials/survey/survey.html',
    controller: 'SurveyCtrl'
  });
}])

.controller('SurveyCtrl', ['$location', '$scope', function($location, $scope) {
	$scope.finished = function(){
		$location.url('/thankyou');
	};
}]);