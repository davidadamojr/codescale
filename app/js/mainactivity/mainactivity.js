'use strict';

angular.module('codeScaleApp.mainactivity', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mainactivity', {
    templateUrl: 'partials/mainactivity/mainactivity.html',
    controller: 'MainActivityCtrl'
  });
}])

.controller('MainActivityCtrl', ['$scope', 'snippetsService', function($scope, snippetsService) {
	$scope.disableFinish = true;
	$scope.infoText = "The main activity is about to begin. You will be presented with code snippets and will be required to enter the expected output of the code into the text input on the right side of the screen.";
	$scope.showInfoScreen = true;
	
	$scope.currentSnippet = 0; //no snippet presented to the user yet
	snippetsService.getSnippets('/api/v1/activities').then(function(response){
	   $scope.snippets = response.data.snippets;
           $scope.numberOfSnippets = $scope.snippets.length;
        });
	$scope.showingFirstSnippet = true;
	$scope.showFailScreen = false;
	$scope.providedOutput = "";
}])
.directive('showActivity', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			element.on("click", function(){
				scope.providedOutput = "";
				scope.showInfoScreen = false;
				scope.showFailScreen = false;
				if (!scope.showingFirstSnippet && !parseInt(attrs.tryAgain)) scope.currentSnippet = scope.currentSnippet + 1;
				//scope.showingFirstSnippet = false;
				scope.correctOutput = false;
				scope.$apply();
			});
		}
	}
})
.directive('submitOutput', ['$location', function($location){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			element.on("click", function(){
				if (scope.providedOutput == scope.snippets[scope.currentSnippet].output){
				    scope.showingFirstSnippet = false;
					scope.showFailScreen = false;
					scope.infoText = "Awesome! You got that right! Ready for the next code snippet? Please remember to avoid any interruptions while working on a code snippet.";
					if (scope.currentSnippet < scope.snippets.length - 1){
					   scope.showInfoScreen = true;
				    } else {
					   scope.$apply($location.url('/survey'));
					   return;
				    }
				    scope.$apply();
				} else {
					scope.showInfoScreen = false;
					scope.showFailScreen = true;
				}
				scope.$apply();			
			});
		}
	}
}])

.service('trialService', ['$http', function($http){
    
});
