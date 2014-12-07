'use strict';

angular.module('codeScaleApp.survey', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/survey', {
    templateUrl: 'partials/survey/survey.html',
    controller: 'SurveyCtrl'
  });
}])

.controller('SurveyCtrl', ['$location', '$scope', 'surveyService', 'sessionService', function($location, $scope, surveyService, sessionService) {
	$scope.finish = function(){
		surveyService.submitSurvey(sessionService.code, $scope.education, $scope.experience, $scope.interrupted, $scope.proficiency)
		  .error(function(data, status, headers, config){
		    alert("There was a problem submitting your survey. Please try again.");
		  });
		$location.url('/thankyou');
	};
}])
.service('surveyService', ['$http', 'apiBaseUrl', function($http, apiBaseUrl){
  this.submitSurvey = function(access_code, education, experience, interrupted, proficiency){
    return $http.post(apiBaseUrl + '/api/v1/surveys', {code:access_code, proficiency:proficiency, experience:experience, education:education, interrupted:interrupted});
  };
  
}]);