'use strict';

angular.module('codeScaleApp.welcome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welcome', {
    templateUrl: 'partials/welcome/welcome.html',
    controller: 'WelcomeCtrl'
  });
}])

.controller('WelcomeCtrl', ['$scope', function($scope) {
  $scope.showFeedback = false;
}])
.directive('accessCode', ['$http', '$location', 'apiBaseUrl', '$cookieStore', function($http, $location, apiBaseUrl, $cookieStore){
  return {
    restrict: 'A',
	link: function(scope, element, attrs){
	  element.on("click", function(){
	    scope.feedbackInfo = "Authenticating...";
		scope.showFeedback = true;
		
		//TODO: move this API call to a separate service so it can be tested properly
	    $http.post(apiBaseUrl + '/api/v1/access', {code:scope.userCode}).success(function(data){
		  scope.authResponse = data;
		  if (scope.authResponse.authorized){
   			//sessionService.create(scope.userCode);
			$cookieStore.put('codeScale.code', scope.userCode);
			$location.url('/overview');
		  } else {
			scope.feedbackInfo = "Invalid Code";
		  }
		});
		scope.$apply();
	  });
	}
  };
}])
