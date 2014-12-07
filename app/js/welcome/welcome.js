'use strict';

angular.module('codeScaleApp.welcome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welcome', {
    templateUrl: 'partials/welcome/welcome.html',
    controller: 'WelcomeCtrl'
  });
}])

.controller('WelcomeCtrl', ['$scope', function($scope) {
  $scope.invalidCode = false;
}])
.directive('accessCode', ['$http', '$location', 'apiBaseUrl', '$cookieStore', function($http, $location, apiBaseUrl, $cookieStore){
  return {
    restrict: 'A',
	link: function(scope, element, attrs){
	  element.on("click", function(){
	    $http.post(apiBaseUrl + '/api/v1/access', {code:scope.userCode}).success(function(data){
		  scope.authResponse = data;
		  if (scope.authResponse.authorized){
   			//sessionService.create(scope.userCode);
			$cookieStore.put('codeScale.code', scope.userCode);
			$location.url('/refresher');
		  } else {
			scope.invalidCode = true;
		  }
		});
		scope.$apply();
	  });
	}
  };
}])
