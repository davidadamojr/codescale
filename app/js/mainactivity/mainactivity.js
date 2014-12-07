'use strict';

angular.module('codeScaleApp.mainactivity', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mainactivity', {
    templateUrl: 'partials/mainactivity/mainactivity.html',
    controller: 'MainActivityCtrl'
  });
}])

.controller('MainActivityCtrl', ['$scope', 'snippetsService', '$cookieStore', '$interval', function($scope, snippetsService, $cookieStore, $interval) {
	var timer;
	
	$scope.startTimer = function(){
	  $scope.timeElapsed = 0;
	  timer = $interval(function(){
	    $scope.timeElapsed = $scope.timeElapsed + 1;
	  }, 1000);
	};
	
	$scope.stopTimer = function(){
	  if (angular.isDefined(timer)){
        $interval.cancel(timer);
	  }
	}
	
    function init(){
	    var currentSnippet;
		if (currentSnippet = $cookieStore.get('codeScale.currentSnippet')){
		  $scope.currentSnippet = currentSnippet;
		  $scope.showingFirstSnippet = false;
		  $scope.showInfoScreen = false;
		  $scope.showFailScreen = false;
		  $scope.startTimer(); //when the page is refreshed, restart the timer for the current activity
		} else {
	      $scope.currentSnippet = 0; //no snippet presented to the user yet
		  $scope.disableFinish = true;
		  $scope.showLoading = true;
		  $scope.infoText = "The main activity is about to begin. You will be presented with code snippets and will be required to enter the expected output of the code into the text input on the right side of the screen.";
		  $scope.showInfoScreen = true;
		}
	}
	
	init();
	
	//$scope.currentSnippet = 0; //no snippet presented to the user yet
	
	snippetsService.getSnippets('/api/v1/activities').then(function(response){
	   $scope.snippets = response.data.snippets;
       $scope.numberOfSnippets = $scope.snippets.length;
	   $scope.showLoading = false;
    });
	$scope.showingFirstSnippet = true;
	$scope.showFailScreen = false;
	$scope.providedOutput = "";
	
	$scope.$on('$destroy', function(){
		$scope.stopTimer();
	});
}])
.directive('showActivity', ['$cookieStore', function($cookieStore){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			element.on("click", function(){
				scope.providedOutput = "";
				scope.showInfoScreen = false;
				scope.showFailScreen = false;
				if (!scope.showingFirstSnippet && !parseInt(attrs.tryAgain)){
  				  scope.currentSnippet = scope.currentSnippet + 1;
				  $cookieStore.put('codeScale.currentSnippet', scope.currentSnippet);
				}
				//scope.showingFirstSnippet = false;
				scope.correctOutput = false;
				scope.startTimer();
				scope.$apply();
			});
		}
	}
}])
.directive('submitOutput', ['$location', 'trialService', '$cookieStore', function($location, trialService, $cookieStore){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			element.on("click", function(){
			    scope.stopTimer();
			    var snippet_id = scope.snippets[scope.currentSnippet].id;
				var elapsed_time = 28; //change this later
				var is_correct;
				if (scope.providedOutput == scope.snippets[scope.currentSnippet].output){
				    scope.showingFirstSnippet = false;
					scope.showFailScreen = false;
					is_correct = 1;
					scope.infoText = "Awesome! You got that right! Ready for the next code snippet? Please remember to avoid any interruptions while working on a code snippet.";
					if (scope.currentSnippet < scope.snippets.length - 1){
					   scope.showInfoScreen = true;
				    } else {
					   //remove currentSnippet tracker from cookie storage, not needed anymore
					   $cookieStore.remove('codeScale.currentSnippet');
					   scope.$apply($location.url('/survey'));
					   return;
				    }
				    scope.$apply();
				} else {
				    is_correct = 0;
					scope.showInfoScreen = false;
					scope.showFailScreen = true;
				}
				
				//send attempt data
				var snippet_id = scope.snippets[scope.currentSnippet].id;
				var userCode = $cookieStore.get('codeScale.code');
				trialService.recordAttempt(userCode, snippet_id, scope.timeElapsed, is_correct).
				  error(function(data, status, headers, config){
				    alert("There was an error recording your attempt! Please try again.");
				  });
				
				scope.$apply();			
			});
		}
	}
}])

.service('trialService', ['$http', 'apiBaseUrl', function($http, apiBaseUrl){
    this.recordAttempt = function(access_code, snippet_id, time_elapsed, is_correct){
	  return $http.post(apiBaseUrl + '/api/v1/trials', {code: access_code, snippet_id: snippet_id, time: time_elapsed, is_correct: is_correct});
	};
}]);
