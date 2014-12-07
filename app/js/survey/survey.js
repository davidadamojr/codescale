'use strict';

angular.module('codeScaleApp.survey', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/survey', {
    templateUrl: 'partials/survey/survey.html',
    controller: 'SurveyCtrl'
  });
}])

.controller('SurveyCtrl', ['$location', '$scope', 'surveyService', '$cookieStore', function($location, $scope, surveyService, $cookieStore) {
	$scope.finish = function(){
		var userCode = $cookieStore.get('codeScale.code');
		surveyService.submitSurvey(userCode, $scope.education, $scope.experience, $scope.interrupted, $scope.proficiency)
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